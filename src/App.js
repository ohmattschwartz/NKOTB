import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src='images/NKOTBlogo_Red.png' alt=''/>
        </div>
        <div className="App-body">
        <ul>
        <li>
          <img src='images/home_button.png' alt=''/>
        </li>
        <li>
          <img src='images/about_button.jpg' alt=''/>
        </li>
         <li>
           <img src='images/songs_button.jpg' alt=''/>
         </li>
         <li>
          <img src='images/news_button.jpg' alt=''/>
         </li>
        </ul>
         <div className="theGang">
        <img src='images/thegang.jpg' alt=''/>
         </div>
         <div className="myMTV">
        <img src='images/mtv.png' alt=''/>
         </div>
        </div>
        <div className="App-footer">
         <ul>
          <li>Copyright 1990</li>
          <li>Interscope Records</li>
          <li>
            <img src='images/Interscope_logo.png' alt=''/>
          </li>
         </ul>
        </div>
      </div>
    );
  }
}

export default App;
