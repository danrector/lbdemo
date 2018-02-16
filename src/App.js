import React, { Component } from 'react';
import './App.css';
import Lightbox from 'react-image-lightbox';

const images = [
  '//placekitten.com/1500/500',
  '//placekitten.com/4000/3000',
  '//placekitten.com/800/1200',
  '//placekitten.com/1500/1500',
];

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <h1>CATS</h1>

        <img className='cat' src='http://placekitten.com/1500/500'
          onClick={() => this.setState({ photoIndex: 0, isOpen: true })}
          alt='cat'></img>
        <img className='cat' src='http://placekitten.com/4000/3000'
          onClick={() => this.setState({ photoIndex: 1, isOpen: true })}
          alt='cat'></img>
        <img className='cat' src='http://placekitten.com/800/1200'
          onClick={() => this.setState({ photoIndex: 2, isOpen: true })}
          alt='cat'></img>
        <img className='cat' src='http://placekitten.com/1500/1500'
          onClick={() => this.setState({ photoIndex: 3, isOpen: true })}
          alt='cat'></img>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
