import React from 'react';

const style = {
  width: '50%',
  margin: '4px',
  textDecoration: 'none',
  color: 'white'
}

export default class ListColors extends React.Component {
  render () {
    return (
      <section>
        <ul>
          {
            this.props.colors.map((color, index) => {
              return <li key={index} style={Object.assign({}, style, {backgroundColor: color})}>{color}</li>
            })
          }
        </ul>
      </section>
    );
  }
};
