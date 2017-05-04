import React from 'react';
import {
  Link,
} from 'react-router';

export default class RouteLink extends React.PureComponent {
  render() {
    const isActive = this.context.router.isActive(this.props.to, this.props.query);
    const activeClassName = isActive ? 'am-active' : '';
    const link = (
      <Link {...this.props} />
    );

    return (
      <li className={activeClassName}>
        {link}
      </li>
    );
  }
}

RouteLink.contextTypes = {
  router: React.PropTypes.object.isRequired,
};
