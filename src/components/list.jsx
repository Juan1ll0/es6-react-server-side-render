import React from 'react';

const style = {
  width: '30%',
  margin: '2px',
  display: 'inline-block',
  textDecoration: 'none',
  color: 'white'
}

export default class ListColors extends React.Component {
  render () {
    return (
      <ul>
        {
          this.props.colors.map((color, index) => {
            return <li key={index} style={Object.assign({}, style, {backgroundColor: color})}>{color}</li>
          })
        }
      </ul>
    );
  }
};
