import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  handleClick = () => {
    this.props.display(this.props.id);
  }

  render () {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
