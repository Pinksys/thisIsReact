import React from 'react';
import Image from 'src/Image.js';

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    Image.updateImage();
  }

  render() {
    return (
      <button onClick={this.onClick}>
      Click me!
      </button>
    );
  }
}
