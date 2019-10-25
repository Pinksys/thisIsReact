import React from 'react';

const theImages = {cat: './cat.png', dog: './dog.png', pizza: './pizza.png'};

export default class MyImage extends React.Component {

  constructor(props) {
    super(props);
    this.updateImage = this.updateImage.bind(this);
    this.props = {currentImage: 'cat.png'};

  }

  updateImage() {
    const num = Math.floor(Math.random() * 3);

    if (num == 0) {
      this.currentImage = theImages.cat;
    }
    if (num == 1) {
      this.currentImage = theImages.dog;
    }
    if (num == 2) {
      this.currentImage = theImages.pizza;
    }
  }

  render() {
    return (<img src={this.props.currentImage} alt="cute" onClick={this.updateImage} />);
  }
}
