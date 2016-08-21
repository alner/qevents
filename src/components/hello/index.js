import React, { Component } from 'react'

export default class PhraseComponent extends Component {
  onChangePhrase(e) {
    console.log(e)
    //e.preventDefault()
    this.props.setPhrase(this.input.value);
  }
  render(){
    console.log(this.props)
    return (
      <div>
        {this.props.phrase}
        <input
         type="text"
         ref={(input) => this.input = input }
         onChange={this.
          onChangePhrase.bind(this)} />
      </div>
    )
  }
}
