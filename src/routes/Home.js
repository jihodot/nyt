import React from "react";
import axios from "axios";
import Article from "../components/Article";
import "./Home.css";
import Search from "../components/Search";
class Home extends React.Component {
  state = {
    isLoading: false,
    movies: [],
    articles: [],
    topic: "",
    typing: false,
    typingTimeout: 0,
    counter: 0,
  }
  
  handleTopicChange = (event) => {
    const self = this;

    if (self.state.typingTimeout) {
       clearTimeout(self.state.typingTimeout);
    }
    self.setState({
      topic: event.target.value,
      typing: false,
      typingTimeout: setTimeout(function () {
          self.getArticles(self.state.topic);
        }, 300)
   });
  };
  handleCounter = (event) => {
    // event.preventDefault();

    const self = this;
      self.setState({counter: self.state.counter+1});

    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${self.state.topic}&page=${self.state.counter}&api-key=wTwRh7Blb0nUPWPWvHQCWVupJSoQBqeu`)
    .then((res) =>
    {
      Array.prototype.push.apply(self.state.articles,res.data.response.docs )

      this.setState({articles: self.state.articles, isLoading:false});

    });

    console.log(self.state.counter)
  };

  getArticles = (topic) => {
    this.setState({isLoading:true});
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&api-key=wTwRh7Blb0nUPWPWvHQCWVupJSoQBqeu`)
    .then((res) =>
    {
      this.setState({articles: res.data.response.docs, isLoading:false, counter:0});
      console.log(this.state.total)

    });
  };
  
  // When the search form submits, perform NYT api search with user input
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("this.state.topic: ", this.state.topic);
    this.getArticles(this.state.topic);

  };


  
  

  render() {
    console.log(this.props)
    const { isLoading, articles, counter } = this.state;
    return (
      <section className="container">
          <Search          
            handleTopicChange={this.handleTopicChange}
            handleFormSubmit={this.handleFormSubmit}
            />

        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            
            {articles.map(article => (
              <Article
                _id={article._id}
                pub_date={article.pub_date}
                abstract={article.abstract}
                web_url={article.web_url}
                lead_paragraph = {article.lead_paragraph}
                snippet = { article.snippet}
                multimedia = {article.multimedia}
                favourite = {this.props.favourite}
                favouriteList = {this.props.favouriteList}
              />
            ))}
          <button onClick={this.handleCounter}>
            더보기
          </button>
          </div>
        )}
      </section>
    );
  }
}


export default Home;