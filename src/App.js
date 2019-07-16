import React from 'react';
import logo from './logo.svg';
import './App.css';

const marthImgs = [
  "https://cdn.imgbin.com/24/7/19/imgbin-super-smash-bros-melee-princess-zelda-marth-fire-emblem-character-marth-iF7XwmWeXGXETpsJmGjNgzpA6.jpg",
  "http://www.sclance.com/pngs/marth-png/marth_png_848572.png",
  "https://www.ssbwiki.com/images/e/ed/Marth_Palette_%28SSBM%29.png",
  "https://png2.kisspng.com/sh/a556e3279d5047c7e87626a8d9ca1bf0/L0KzQYm3VsMxN6pvjZH0aYP2gLBuTgN2eJZ3ReV2YYPrPbP5jCMudZZxfdc2cHnucbTvlb1uaaN5gJ9saHH1cbT7hgIubpoyhdN7dHiwRbO6V8Q5aZM9TtRvZkmxRIK3Ucg3O2o2TaU5M0S8R4SCVcUyQV91htk=/kisspng-super-smash-bros-melee-pikachu-marth-character-fi-marth-5b3748ab86bff9.4101863915303497395519.png"
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Marth me up baby</p>
        <img src={marthImgs[2]} width="600px"/>
        <p>get better or bend over</p>
      </header>
    </div>
  );
}

export default App;
