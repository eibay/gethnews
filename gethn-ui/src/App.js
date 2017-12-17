import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

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
  
  render() {
    const { articles } = this.state 
    return (
      <div className="App">
        {articles.map(article =>
          <h2 key = {article.id}> { article.title } </h2>
        )}
      </div>
    );
  }
}

export default App;
