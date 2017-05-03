import React, { Component } from 'react';
import {
  render,
} from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory,
} from 'react-router';

import {
  Topbar,
  Nav,
  CollapsibleNav,
} from 'amazeui-react';

import RouteLink from './components/RouteLink';
import SiteFooter from './components/SiteFooter';

class App extends Component {
  render() {
    return (
      <div className="ask-page">
        <Topbar
          className="ask-header"
          brand="TiDB Admin"
          brandLink="/"
          inverse
        >
          <CollapsibleNav>
            <Nav topbar>
              <RouteLink to="dashboard">Dashboard</RouteLink>
              <RouteLink to="cluster">Cluster</RouteLink>
            </Nav>
          </CollapsibleNav>
        </Topbar>
        <main className="ask-main">
          {this.props.children}
        </main>
        <SiteFooter />
      </div>
    );
  }
}

// Pages
import Index from './pages/Index';
import Dashboard from './pages/Dashboard';
import Cluster from './pages/Cluster';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="cluster" component={Cluster} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('root'));
});
