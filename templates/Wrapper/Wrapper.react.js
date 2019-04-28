import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import { withRouter } from 'next/router';
import '../../styles/main.scss';
import './wrapper.scss';

const routes = [
  '/',
  '/01-about',
  '/02-background',
  '/03-iteration-protocols',
  '/04-iterator',
  '/05-iterable',
  '/06-generator-intro',
  '/07-generator-function',
  '/08-generator-function-simpler',
  '/09-segue-into-practicality',
  '/10-an-incrementing-counter',
  '/11-co',
  '/12-augmenting-classes',
  '/13-linked-list',
  '/14-adding-iterability',
  '/15-an-interesting-side-effect',
  '/16-adding-hofs-to-our-class',
  '/17-async-intro',
  '/18-basic-async-generator',
  '/19-fetching-multiple-pages',
  '/20-fin'
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
