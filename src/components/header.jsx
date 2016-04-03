import React from 'react';

export default class Header extends React.Component {
  render () {
    return (
      <h1>Hi <strong>{this.props.name}</strong>, this is a very easy example of isomorphic app done in ES6</h1>
    )
  }
}
