import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoDetail from './components/video_detail'
import VideoList from './components/video_list'
const API_KEY = 'AIzaSyD29NoxVJkqQAKa1SVxUeTI5n-A5Ccu5Aw'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surfboards')
  }

videoSearch(term) {
  YTSearch({key: API_KEY, term: term}, (videos) => {
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    })
  })
}

  render() {

    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)}, 500)

    return (
      <div>
        <br />
        <p className='h1 heading'>S.Tube</p>
        <br />
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}
        />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'))
