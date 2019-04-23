import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Head from 'next/head';
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

const Navigation = withRouter((props) => {
  const routeIndex = routes.indexOf(props.router.pathname);
  const prevRoute = routes[routeIndex - 1];
  const PrevComponent = prevRoute ? Link : 'div';
  const nextRoute = routes[routeIndex + 1];
  const NextComponent = nextRoute ? Link : 'div';
  return (
    <div className="navigation">
      <PrevComponent
        href={prevRoute}
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
        {/\/(\d+)/.exec(props.router.pathname) && /\/(\d+)/.exec(props.router.pathname)[1]}
      </span>
      &nbsp;
      <NextComponent
        href={nextRoute}
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
