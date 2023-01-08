import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:8,
    category:"general"
  }

  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes,
    category: PropTypes.string
  }
  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=26152cba7e2c4243a4bd9b561d022a26&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data=await fetch(url)
    let parsedData=await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
  }
  handlePrevious=async()=>{
    console.log("Previous");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=26152cba7e2c4243a4bd9b561d022a26&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data=await fetch(url)
    let parsedData=await data.json()
    this.setState({articles:parsedData.articles,page:this.state.page-1,loading:false})
  }
  handleNext=async()=>{
    
    console.log("Next");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=26152cba7e2c4243a4bd9b561d022a26&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data=await fetch(url)
    let parsedData=await data.json()
    this.setState({articles:parsedData.articles,page:this.state.page+1,loading:false})
  }
  render() {
    return (
      <div className="container md-3">
        <h1 className="text-center my-4">Newsify - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
            {this.state.articles&&this.state.articles.map((element)=>{
                  return(<div className="col-md-4" key={element.url}>
                  {/* In react we our work gets reduced because of we can use components at different places again and again
                  and we can make changes in same component as per requirement by using props */}
                  <NewsItem title={element.title?element.title.slice(0,60):""} target="_blank" description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>)
            })}
          
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-sm btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-sm btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div>

      </div>
    );
  }
}

export default News;
