import React, { Component } from 'react'
import './App.css'

class Hype extends Component {
//experiment
  constructor() {
    super()
    this.state = {
      documents: []
    }
  }
  componentDidMount(){
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new&fq=pub_date=2016-08&&api-key=2034278a644d4e91abe0514b2d6c4845"
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
      <div className='App'>
        <div className='App-header'>
          <img src='images/NKOTBlogo_Red.png' alt='something'/>
        </div>
        <div className='App-body'>
          <div className='theHypeBody'>
            <ul>
              {this.state.documents.map((document, index) =>
                <li key={index}>{document.source}</li>
              )}
              <li><img src='images/home_button.jpg' alt='Home'/></li>
              <li><img src='images/about_button.jpg' alt='About'/></li>
              <li><img src='images/songs_button.jpg' alt='Media'/></li>
              <li><img src='images/news_button.jpg' alt='News'/></li>
            </ul>
          </div>
        </div>
      </div>
        <div className='App-footer'>
         <ul>
            <li>Copyright 1990</li>
            <li>Interscope Records</li>
            <li><img src='images/Interscope_logo.png' alt=''/></li>
         </ul>
       </div>
      </div>
    )
  }
}

export default Hype
