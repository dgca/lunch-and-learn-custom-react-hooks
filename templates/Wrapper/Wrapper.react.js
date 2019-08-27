import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import { withRouter } from 'next/router';
import '../../styles/main.scss';
import './wrapper.scss';

// * useState - https://codepen.io/dgca/pen/YzKVKqQ?editors=0011
// * useEffect - https://codepen.io/dgca/pen/NWKjKrO?editors=0011
// * useContext - https://codepen.io/dgca/pen/pozPzLz?editors=0011
// * useReducer - https://codepen.io/dgca/pen/bGbWbxJ?editors=0011
// * useMemo - https://codepen.io/dgca/pen/wvwdwRZ?editors=0011
// * useCallback - https://codepen.io/dgca/pen/vYBmYmb?editors=0011
// * useRef - https://codepen.io/dgca/pen/yLBbyLp?editors=0011
// * useImperativeHandle - https://codepen.io/dgca/pen/pozPvJp?editors=0011
// * useLayoutEffect - https://codepen.io/dgca/pen/ExYmaEz?editors=0011
// * useDebugValue
// * useToggle - https://codepen.io/dgca/pen/qBWmEME
// * useNodeSize - https://codepen.io/dgca/pen/GRKmgYm
// * useAwaitPromise - https://codepen.io/dgca/pen/NWKjPJM

const routes = [
  '/',
  '/01-about',
  '/02-what-are-hooks',
  '/03-what-are-hooks-cont',
  '/04-built-in-hooks',
  '/05-use-state',
  '/06-use-effect',
  '/07-use-context',
  '/08-use-reducer',
  '/09-use-memo',
  '/10-use-callback',
  '/11-use-ref',
  '/12-use-imperative-handle',
  '/13-use-layout-effect',
  '/14-use-debug-value',
  '/15-custom-hooks',
  '/16-custom-hook-use-toggle',
  '/17-custom-hook-use-node-size',
  '/18-custom-hook-use-await-promise',
  '/19-fin'
];

const Navigation = withRouter(class extends React.Component {

  componentDidMount() {
    global.document.addEventListener('keyup', this.handleKeyNavigation);
  }

  componentWillUnmount() {
    global.document.removeEventListener('keyup', this.handleKeyNavigation);
  }

  handleKeyNavigation = (e) => {
    if (e.key === 'ArrowLeft') {
      this.navigateToRoute(this.getPrevRoute());
    } else if (e.key === 'ArrowRight') {
      this.navigateToRoute(this.getNextRoute());
    }
  };

  navigateToRoute(route) {
    if (!route) {
      return;
    }
    Router.push(route);
  }

  getPrevRoute() {
    const routeIndex = routes.indexOf(this.props.router.pathname);
    return routes[routeIndex - 1];
  }

  getNextRoute() {
    const routeIndex = routes.indexOf(this.props.router.pathname);
    return routes[routeIndex + 1];
  }

  render() {
    const {router} = this.props;
    const prevRoute = this.getPrevRoute();
    const nextRoute = this.getNextRoute();
    const PrevComponent = prevRoute ? Link : 'div';
    const NextComponent = nextRoute ? Link : 'div';
    return (
      <div className="navigation">
        <PrevComponent
          href={prevRoute}
          ref={this.prevRef}
        >
          <span
            role="img"
            aria-label="previous slide"
            data-disabled={!prevRoute}
          >
            👈
          </span>
        </PrevComponent>
        &nbsp;
        <span className="current-page">
          {/\/(\d+)/.exec(router.pathname) && /\/(\d+)/.exec(router.pathname)[1]}
        </span>
        &nbsp;
        <NextComponent
          href={nextRoute}
          ref={this.nextRef}
        >
          <span
            role="img"
            aria-label="next-slide"
            data-disabled={!nextRoute}
          >
            👉
          </span>
        </NextComponent>
      </div>
    );
  }
});

function Wrapper({
  children,
  className
}) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossOrigin="anonymous"
        />
      </Head>
      <div className={`wrapper ${className}`}>
        {children}
      </div>
      <Navigation />
    </div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Wrapper.defaultProps = {
  className: ''
};

export default Wrapper;
