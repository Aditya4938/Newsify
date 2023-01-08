import React, { Component } from 'react'
import loading from './loading.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="container text-center">
        <img src={loading} alt="loading" srcset="" />
        </div>
      </div>
    )
  }
}
