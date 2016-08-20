import React, { Component } from 'react'
import './App.css'

class Song extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src='images/NKOTBlogo_Red.png' alt=''/>
        </div>
        <div className='Songs-body'>
        <ul>
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
      {/* DARREN'S CONTAINER */}
      {/* DARREN'S CONTAINER */}
         <div className='theSongsBody'>
          <div className='theSongsContainer'>
            <div className='theSongsLetter'>
              <div className='YO'>YO!</div>
              <div className='handwriting'> We looooooove our fans and to to give them something back for all of their support, I've personally added our hits for everyone to soak in. See you at the next concert! - Donny</div>
              <img src='images/donnie.gif' alt=''/>
          </div>
            <div className='songtitle'> Hangin' Tough</div>
              <iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254061767&ampauto_play=false&amphide_related=false&ampshow_comments=true&ampshow_user=true&ampshow_reposts=false&ampvisual=true'></iframe>
              <div className='songtitle'>I'll Be Loving You (Forever)</div>
              <iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254061733&ampauto_play=false&amphide_related=false&ampshow_comments=true&ampshow_user=true&ampshow_reposts=false&ampvisual=true'></iframe>
              <div className='songtitle'>Cover Girl</div>
              <iframe width='100%' height='150' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254061733&ampauto_play=false&amphide_related=false&ampshow_comments=true&ampshow_user=true&ampshow_reposts=false&ampvisual=true'></iframe>
              <div className='tvtitle'>The gang on TV!</div>
              <iframe width='420' height='315' src='https://www.youtube.com/embed/_rCnxuu1T9g' frameborder='0' allowfullscreen></iframe>
            </div>
          </div>
         </div>
         {/* DARREN'S CONTAINER */}
         {/* DARREN'S CONTAINER */}
         <div className='Songs-myMTV'>
        <img src='images/mtv.png' alt=''/>
         </div>
        <div className='Songs-footer'>
         <ul>
          <li>Copyright 1990</li>
          <li>Interscope Records</li>
          <li>
            <img src='images/Interscope_logo.png' alt=''/>
          </li>
         </ul>
        </div>
      </div>
    )
  }
}

export default Song
