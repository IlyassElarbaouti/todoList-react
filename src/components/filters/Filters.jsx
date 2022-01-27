import React, { Component } from 'react';
import './filters.css'

export default class Filters extends Component {
  render() {
      return (
        <div className="filters__container">
          <div className="filters">
            <span className="count">0 items left</span>
            <div className="filter__btns">
              <button className="all btn border">All</button>
              <button className="active btn">active</button>
              <button className="completed btn">completed</button>
            </div>
            <button className="delete-complete btn">clear completed</button>
          </div>
          <div className="overlays">
            <div className="overlay1 overlay"></div>
            <div className="overlay2 overlay"></div>
          </div>
        </div>
      );
  }
}
