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
            <img src="images/NKOTBlogo_Red.png" alt="something" />
          </div>
          <div className="App-body">
            <ul>
              <li><img src="images/home_button.png" alt="Home" /></li>
              <li><img src="images/about_button.jpg" alt="About" /></li>
              <li><img src="images/songs_button.jpg" alt="Media" /></li>
              <li><img src="images/news_button.jpg" alt="News" /></li>
            </ul>
            <div className="theHypeBody">
              <div className="reviewsheadline">New Kids On The Block</div>
            {this.state.documents.map((document, index) =>
              <div className="reviewcontent">{document.snippet}</div>
            )}
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
