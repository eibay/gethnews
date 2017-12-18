import React, { Component } from 'react'
import { connect, PromiseState } from 'react-refetch'
import PropTypes from 'prop-types'

class Article extends Component {
  static propTypes = {
  articles: PropTypes.array,
  updateArticles: PropTypes.func
  }
  
  componentWillMount(newArticles){
    this.props.updateArticles(newArticles)
  }

  render(){
    const { articles, articleFetch } = this.props
    
    const allFetches = PromiseState.all([articleFetch])
    const newArticles = (allFetches.value)[0]
    
    
    if (allFetches.pending) {
      return (
        <div>
          {articles.map(a => 
              <h3 key={a.id}>{a.title}</h3>
          )}
        </div>
      )
    } else if (allFetches.rejected) {
      return (
        <div>
          {articles.map(a => 
              <h3 key={a.id}>{a.title}</h3>
          )}
        </div>
      )
    } else if (allFetches.fulfilled) {
      return (
        <div>
          {newArticles.map(a => 
              <h3 key={a.id}>{a.title}</h3>
          )}
        </div>
      )
    }
  }
}

// export default Article
export default connect(props => {
  return{
    articleFetch: {
      url: 'http://localhost:3001/articles',
      refreshInterval: 1000
    }    
  }
})(Article)


