import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
      let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div>
        <div className="card mb-3" style={{width: "18rem;"}}>
            <img src={!imageUrl?"https://cdn.telanganatoday.com/wp-content/uploads/2023/01/1b6e442b20ce09b2cf19365e04a.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} className="btn btn-sm btn-primary">Read more...</a>
            </div>
</div>
      </div>
    )
  }
}

export default NewsItem
