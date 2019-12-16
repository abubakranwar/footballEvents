import React from 'react';

const DateSelect = props => {
    return(
      <div>
        {props.eventDates.map((date, index) => (
            <button key={index} value={date} name={date} className={"date-button " + (props.checkedItems.includes(date) ? "active" : "")} onClick={props.handleClick}>
                {date}
            </button>
        ))}
      </div>
    )
}

export default DateSelect