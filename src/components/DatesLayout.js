import React from 'react';
import Events from './Events';
import moment from 'moment';

const DatesLayout = props => {
    return (
      <div className='col-12 col-md-12 horology-event-dates'>
        <div className='event-date' id={props.date}>
          <p className='date'>{props.date}</p><br />
          {props.items.map((item, index) => (
            props.date.includes(moment(item.datetime).format("ddd MMM D YYYY")) && <Events key={index} item={item} />
          ))}
        </div>
      </div>
    )
}

export default DatesLayout