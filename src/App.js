import React, {Component} from 'react';
import './App.css';
import Tags from './Tags/Tags'
import List from './List/List'
import Input from './Input/Input'

const marthImgs = [
  "https://cdn.imgbin.com/24/7/19/imgbin-super-smash-bros-melee-princess-zelda-marth-fire-emblem-character-marth-iF7XwmWeXGXETpsJmGjNgzpA6.jpg",
  "http://www.sclance.com/pngs/marth-png/marth_png_848572.png",
  "https://www.ssbwiki.com/images/e/ed/Marth_Palette_%28SSBM%29.png",
  "https://png2.kisspng.com/sh/a556e3279d5047c7e87626a8d9ca1bf0/L0KzQYm3VsMxN6pvjZH0aYP2gLBuTgN2eJZ3ReV2YYPrPbP5jCMudZZxfdc2cHnucbTvlb1uaaN5gJ9saHH1cbT7hgIubpoyhdN7dHiwRbO6V8Q5aZM9TtRvZkmxRIK3Ucg3O2o2TaU5M0S8R4SCVcUyQV91htk=/kisspng-super-smash-bros-melee-pikachu-marth-character-fi-marth-5b3748ab86bff9.4101863915303497395519.png"
]



function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const chosenImg = getRandomInt(marthImgs.length);

// const chosenTag = getRandomInt(tags.length)

const topicsDB = [
  {tag: "Fox" , contents: ['wave shine sucks', 'snap to ledge'], active: true},
  {tag: "Falco" , contents: ['the combo game is real', 'backthrow downtilt', 'blue is the worst color for this bird'], active: true},
  {tag: "Marth" , contents: ['lol down tilt', 'he only has one move', 'here\'s another note'], active: true}
]

// const topicsDB = {
//   "Fox" : {
//     id: 1,
//     contents: ['i am fox'],
//     active: true
//   },
//   "Falco" : {
//     id: 2, 
//     contents: ['i am sick'],
//     active: false
//   },
//   "Marth" : {
//     id: 3,
//     contents: ['i am space boy'],
//     active: true
//   }
// }

class App extends Component {

  // selected = document.querySelector('.input-container select').value

  state = {
    tags: topicsDB.map((topic) => topic.tag),
    contents: topicsDB.map((topic) => topic.contents),
    active: topicsDB.map((topic) => topic.active),
    keys: topicsDB.map((topic) => topicsDB.indexOf(topic)),
    input: ''
  }


  listDisplayHandler = (key) => {
    let newActive = this.state.active
    
    if (newActive[key] === true) {
      newActive[key] = false;
    } else {
      newActive[key] = true;
    }

    this.setState({active: newActive})
  }

  addInputHandler = (tag, input) => {
    const key = this.state.tags.indexOf(tag)
    topicsDB[key].contents.push(input)

    this.setState({contents: topicsDB.map((topic) => topic.contents), input: ''})

  }

  inputChangeHandler = (event) => {
    this.setState({ input: event.target.value })
  }




  render() {

    let contents = this.state.active.map((active, i) => {
      return active ? this.state.contents[i] : null
    })

    return (
      <div className="App">
        <header className="App-header">
          <p>Marth me up baby</p>
          <img src={marthImgs[chosenImg]} width="100px" alt="marth"/>
          <p className="samurai">侍</p>
          <p>get better or bend over</p>
        </header>
        <div>
        <Tags 
          tags={this.state.tags}
          click={this.listDisplayHandler}
          key={this.state.key}
          active={this.state.active}
        />
        <List contents={contents} />
        <Input
          tags={this.state.tags}
          input={this.state.input}
          inputChange={this.inputChangeHandler}
          userInput={this.addInputHandler}
        />
      </div>
      </div>
    )
  }
}

export default App;
