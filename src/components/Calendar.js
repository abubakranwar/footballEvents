import React from 'react';
import Dates from './Dates';

const Calendar = () => {
    return (
      <section className="calendar-events">
        <div className="container">
          <div className="row title">
              <div className="col-md-12 col-lg-12">
                  <h2 className="section-title">EVENT CALENDAR</h2>
              </div>
          </div>
          <div className="desktop-only horology-events">
            <div className="row">
                <Dates />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Calendar