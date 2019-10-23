import React from 'react';

export class MyImage extends React.Component {

  constructor(props) {
    super(props);
    this.updateImage = this.updateImage.bind(this);
    this.props = {currentImage: 'cat.png'};

  }


  const images = {cat: 'cat.png', dog: 'dog.png', pizza: 'pizza.png'};

  updateImage() {
    const num = Math.floor(Math.random() * 3);

    if (num == 0) {
      this.currentImage = cat;
    }
    if (num == 1) {
      this.currentImage = dog;
    }
    if (num == 2) {
      this.currentImage = pizza;
    }
  }




  render() {
    return <img src={this.currentImage} alt="cute" onClick={this.updateImage}>;
  }
}
