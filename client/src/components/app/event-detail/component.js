import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export class component extends React.Component {
  static propTypes = {
    event: PropTypes.shape({
      date: PropTypes.string,
      location: PropTypes.string,
      title: PropTypes.string
    }),
    getEvents: PropTypes.func
  };

  render() {
    return (
      <div>
        <h1>event detail page</h1>
        {/* <div className="event-detail">
          <div className="title">
            {console.log('AHHHHAHAHAHHAHAHA', this.props.event)}
            <h3>{this.props.event.title}</h3>
          </div>
          <div className="location">
            <h3>{this.props.event.location}</h3>
          </div>
        </div> */}
      </div>
    );
  }
}