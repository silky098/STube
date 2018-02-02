import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyD29NoxVJkqQAKa1SVxUeTI5n-A5Ccu5Aw'

// Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      search <SearchBar />
    </div>
  )
}

// Take this component's generated HTML and put it in the DOM (on the page)
ReactDOM.render(<App />, document.querySelector('.container'))
