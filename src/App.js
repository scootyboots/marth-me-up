import React, {Component} from 'react';
import './App.css';
import Tags from './Tags/Tags'
import List from './List/List'

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

class App extends Component {

  state = {
    lists : [
      {tag: "Fox" , content: ['wave shine sucks', 'snap to ledge'], active: true},
      {tag: "Falco" , content: ['the combo game is real', 'backthrow downtilt', 'blue is the worst color for this bird'], active: true},
      {tag: "Marth" , content: ['lol down tilt', 'he only has one move', 'here\'s another note'], active: true}
    ]
  }

  listDisplayHandler = (tag) => {
    // const targetTopic = this.state.lists.filter((topic) => topic.tag === tag);
    // console.log(targetTopic === this.state.lists[0])
    // const i = this.state.lists.indexOf(targetTopic);
    // console.log(i)
    // const targetTopicActive = this.state.lists[i].active
    // if (targetTopicActive === true) {
    //   // targetTopicActive = false
    //   this.setState({targetTopicActive : false})
    // } else {
    //   this.setState({targetTopicActive : false})
    // }

    // // console.log(targetTopic.active)
    // // this.setState({ this.state.lists[1})

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Marth me up baby</p>
          <img src={marthImgs[chosenImg]} width="100px" alt="marth"/>
          <p>get better or bend over</p>
        </header>
        <Tags 
          tags={this.state.lists.map((topic) => topic.tag)}
          click={this.listDisplayHandler}
        />
        <List
          contents={this.state.lists.map((topic) => topic.content)}
        />
      </div>
    )
  }
}

export default App;
