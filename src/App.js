import React, {Component} from 'react';
import './App.css';
import Tags from './Tags/Tags'
import List from './List/List'
import Input from './Input/Input'
import topicsDB from './db.json'

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

// const topicsDB = {
//   Fox: {tag: "Fox" , contents: ['wave shine sucks', 'snap to ledge'], active: true},
//   Falco: {tag: "Falco" , contents: ['the combo game is real', 'backthrow downtilt', 'blue is the worst color for this bird'], active: true},
//   Marth: {tag: "Marth" , contents: ['lol down tilt', 'he only has one move', 'here\'s another note'], active: true}
// }

console.log(`Package for writing to json ${topicsDB}`)
console.log(topicsDB.Fox)
class App extends Component {

  // selected = document.querySelector('.input-container select').value

  state = {
    fox: topicsDB["Fox"],
    falco: topicsDB["Falco"],
    marth: topicsDB["Marth"],
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


    // let contents = this.state.active.map((active, i) => {
    //   return active ? this.state.contents[i] : null
    // })

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
          topics={[this.state.fox, this.state.falco, this.state.marth]}
          click={this.listDisplayHandler}
        />
        <List 
          topics={[this.state.fox, this.state.falco, this.state.marth]}
        />
        <Input
          topics={[this.state.fox, this.state.falco, this.state.marth]}
          input={this.state.input}
          inputChange={this.inputChangeHandler}
          addInputHandler={this.addInputHandler}
        />
      </div>
      </div>
    )
  }
}

export default App;
