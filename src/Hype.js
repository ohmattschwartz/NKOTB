import React, { Component } from 'react'
import './App.css'

class Hype extends Component {
  constructor () {
    super()
    this.state = {
      documents: []
    }
  }
  componentDidMount () {
    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=_id:4fd192738eb7c8105d69b7b3&api-key=2034278a644d4e91abe0514b2d6c4845"
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const documents = data.response.docs
        this.setState({documents})
      })
      .catch(err => console.log(err))
  }
  render () {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src="images/NKOTBlogo_Red.png" alt="something" /></div>
          <div className="App-body">
            <ul>
              <li><img src="images/home_button.png" alt="Home" /></li>
              <li><img src="images/about_button.jpg" alt="About" /></li>
              <li><img src="images/songs_button.jpg" alt="Media" /></li>
              <li><img src="images/news_button.jpg" alt="News" /></li>
            </ul>
            <div className="theHypeBody">
              <div className="Joey-body">
                <div className="YO-Joey">Joey here!</div>
                <img src="images/joey_animation.gif" alt="Home" />
                <div className="Joey-note">As you all might know, it's not easy being in the spotlight. We've been working hard since our first album dropped and the world is really paying attention. <p>Don't believe me? Check out what the world has to say.</p></div>
                </div>
            {/* ARTICLE START */}
                <div className="article">
                  <div className="reviewsheadline"><a href="http://www.nytimes.com/1990/03/27/arts/review-music-new-kids-on-the-block-end-tour.html">The Hangin Tough Tour Reviewed</a></div>
                    {this.state.documents.map((document, index) =>
                  <div className="reviewcontent">{document.snippet}</div>
                  )}
                    <div className="reviewlink"><a href="http://www.nytimes.com/1990/03/27/arts/review-music-new-kids-on-the-block-end-tour.html">Read the full article here!</a></div>
                </div>
            {/* ARTICLE START */}
                <div className="article">
                  <div className="reviewsheadline"><a href="http://www.nytimes.com/1990/03/25/arts/l-new-kids-on-the-block-building-barriers-995790.html">The Hangin Tough Tour Reviewed</a></div>
                    {this.state.documents.map((document, index) =>
                  <div className="reviewcontent">{document.snippet}</div>
                  )}
                <div className="reviewlink"><a href="http://www.nytimes.com/1990/03/25/arts/l-new-kids-on-the-block-building-barriers-995790.html">Read the full article here!</a></div>
                </div>
            </div>
          </div>
        </div>
        <div className="App-footer">
          <ul>
            <li>Copyright 1990</li>
            <li>Interscope Records</li>
            <li><img src="images/Interscope_logo.png" alt="" /></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Hype
