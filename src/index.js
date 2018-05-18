import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

const API_KEY = 'AIzaSyDcRnD_62jpeXUSMPG2OQWm8f01cDhUDHs';

class App extends Component {
  constructor(props) {
    super(props);


    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.onVideoSearch('surfboard');

  }

  onVideoSearch(term ) {
    YTSearch({key:API_KEY, term: term}, (videos) => {
      this.setState({
        videos : videos,
        selectedVideo : videos[0]

      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onVideoTermUpdate={term => this.onVideoSearch(term)} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList onVideoUpdate = {selectedVideo => this.setState({selectedVideo})} videos= {this.state.videos} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));