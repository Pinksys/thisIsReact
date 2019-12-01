import React from 'react';
import Cat from "./cat.png";
import Dog from "./dog.png";
import Pizza from "./pizza.png";

const theImages = [Cat, Dog, Pizza];
var index = 0;

export default class MyImage extends React.Component {

  constructor(props) {
    super(props);
    this.updateImage = this.updateImage.bind(this);
    this.props = {currentImage: 'cat.png'};

  }

  updateImage() {
    // const num = Math.floor(Math.random() * 3);
    // this.props.currentImage = theImages[num];
    index = Math.floor(Math.random() * 3);
  }

  render() {
    return (<img src={theImages[index]} alt="cute" onClick={this.updateImage} />);
  }
}
