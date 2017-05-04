import React from 'react';
import {
  Container,
} from 'amazeui-react';

export default class Index extends React.PureComponent {
  render() {
    return (
      <div className="ask-banner">
        <Container>
          <h1>TiDB Admin</h1>
          <h2>My TiDB Cluster</h2>
        </Container>
      </div>
    );
  }
}
