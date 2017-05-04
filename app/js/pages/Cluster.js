import React from 'react';
import {
  Container,
} from 'amazeui-react';

export default class Cluster extends React.PureComponent {
  render() {
    return (
      <Container className="am-padding-vertical-lg">
        <h2>Cluster</h2>
        <p>My TiDB Cluster</p>
      </Container>
    );
  }
}
