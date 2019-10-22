import React from 'react';

export class Image extends React.Component {

  constructor(props) {
    super(props);
    this.updateImate = this.updateImage.bind(this);

  }


  const images = {cat: 'src/images/cat.png', dog: 'src/images/dog.png', pizza: 'src/images/pizza.png'};

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
    return <img src={this.currentImage} alt="cute">;
  }
}
