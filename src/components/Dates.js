import React, { useState, useEffect } from 'react';
import DateSelect from './DatesSelect'
import DatesLayout from './DatesLayout'
import moment from 'moment';
import eventData from '../event_data';

const Dates = () => {

    const [eventDates, setEventDates] = useState([]);
    const [checkedItems, setCheckedItems] = useState(["Thu Nov 21 2019", "Sat Nov 23 2019"]);

    useEffect(() => {
      const datesOfEvents = []
      eventData.map((item) => (
        !datesOfEvents.includes(moment(item.datetime).format("ddd MMM D YYYY")) && (datesOfEvents.push(moment(item.datetime).format("ddd MMM D YYYY")))
      ))
      setEventDates(datesOfEvents)
    }, []);
    
    const handleClick = e => {
      const item = e.target.name;
      let checkedArray = [...checkedItems];
      if(!checkedArray.includes(item)){
          e.target.classList.add("active");
          setCheckedItems(checkedArray.concat(item))
      }else{
          e.target.classList.remove("active");
          checkedArray = checkedArray.filter(dates => dates !== e.target.name);
          setCheckedItems(checkedArray)
      }
    }
    
    return(
      <div>
        <DateSelect eventDates={eventDates} checkedItems={checkedItems} handleClick={handleClick}/>
        {eventDates.map((date, index) => (
          checkedItems.includes(date) && <DatesLayout date={date} items={eventData} key={index}/>
        ))}
      </div>
    )
  }

  export default Dates