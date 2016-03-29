import React from 'react';

export default class Header extends React.Component {
  render () {
    return <h1>Hello <strong>{this.props.name}</strong>, this is my first isomorphic app done in ES6</h1>
  }
}
