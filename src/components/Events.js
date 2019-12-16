import React from 'react';

const Events = props => {
    return (
      <a href="/" className="col-12 col-md-4">
        <div className="event-bx">
          <p className="category">event</p>
          <p className="title">{props.item.title}</p>
          <p className="time">{props.item.time_display}</p>
        </div>
      </a>
    );
}

export default Events