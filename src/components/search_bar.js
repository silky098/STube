import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = { term: '' }
  }

  render() {
    return (
      <div className='search-bar'>
        <span className='search-text'>search
         <input
          className='input-style'
          value={this.state.term}
          onChange = {event => this.onInputChange(event.target.value)}
        />
      </span>
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}
