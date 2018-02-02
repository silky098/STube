import React, { Component } from 'react'

const inputStyle = {
  marginLeft: 5,
  borderColor: '#DDDDDD',
  borderWidth: 3,
  borderRadius: 5,
  backgroundColor: '#EEEEEE',
  color: '#555555'
}

export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = { term: '' }
  }

  render() {
    return (
      <div style={{ color: 'gray', marginTop: 20 }}>
        search
         <input
          style={inputStyle}
          value={this.state.term}
          // controlled form element / component where value is set by state
          onChange = {event => this.setState({ term: event.target.value })}
          // event handler causes component to rerender and change value to new value
        />
      </div>
    )
  }
}
