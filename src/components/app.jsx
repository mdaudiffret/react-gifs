import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: ""
    };
    this.search('');
  }

  search = (query) => {
    giphy('TpDFEYfGjYrUKNyUTXoHXgmciW3tIf5F').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  display = (selected) => {
    this.setState({
      selectedGifId: selected
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList display={this.display} gifs={this.state.gifs} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
