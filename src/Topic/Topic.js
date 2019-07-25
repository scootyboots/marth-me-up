import React, {Component} from 'react'
import Tags from '../Tags/Tags'
import List from '../List/List'
import Input from '../Input/Input'




class Topic extends Component {
  render() {


    let contents = this.props.active.map((active, i) => {
      return active ? this.props.contents[i] : null
    })

    

    // if (this.props.active[this.props.key]) {
    //   list = <List contents={this.props.contents} />
    // } else {
    //   list = null
    // }

    return (
      <div>
        testing topics
        <Tags 
          tags={this.props.tags}
          click={this.props.click}
          key={this.props.key}
          active={this.props.active}
        />
        <List contents={contents} />
        <Input
          tags={this.props.tags}
          key={this.props.key}
          userInput={this.props.userInput}
        />
      </div>
    )
  }
}

export default Topic