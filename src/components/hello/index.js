import React, { Component } from 'react'

export default class PhraseComponent extends Component {
  onChangeWord(e) {
    console.log(e)
    //e.preventDefault()
    this.props.setKeyword(this.input.value);
  }
  render(){
    console.log(this.props)
    return (
      <div>
        {this.props.word}
        <input
         type="text"
         ref={(input) => this.input = input }
         onChange={this.
          onChangeWord.bind(this)} />
      </div>
    )
  }
}
