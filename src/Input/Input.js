import React, {Component} from 'react'
import './Input.css'

class Input extends Component {
  
  render() {
    return (
      <div class="input-container">
      <select ref="selectedTag">
        {this.props.tags.map((tag) => (
          <option>{tag}</option>
        ))}
      </select>
      <input ref="userInput" type="text"></input>
      <button onClick={() => (this.props.userInput(this.refs.selectedTag.value, this.refs.userInput.value))}>you suck Sapce Boy ></button>
    </div>
    )
  }
}

export default Input