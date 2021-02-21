import React, { Component } from 'react';
import Gif from './gif';

// eslint-disable-next-line react/prefer-stateless-function
class GifList extends Component {

  display = (selected) => {
    this.props.display(selected);
  }

  render () {
    return this.props.gifs.map(gif => {
      return <Gif display={this.display} id={gif.id} key={gif.id} />
    });
  }
}

export default GifList;
