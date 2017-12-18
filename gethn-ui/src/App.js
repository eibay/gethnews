import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Article from './article'

class App extends Component {
  state = {
    articles: []
  }
  
  componentDidMount(){
    this.fetchData()
  }
  
  fetchData = () => {
    axios.get('http://localhost:3001/articles')
      .then(response => {
        this.setState({articles: response.data })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }
  
  updateArticles = (newArticles) => {
    this.setState(state => { articles: newArticles })
  }
  
  render() {
    const { articles } = this.state 
    return (
      <div>
        <Article
          articles={articles}
          updateArticles={this.updateArticles}
          fetchData={this.fetchData} />
      </div>
    );
  }
}

export default App
