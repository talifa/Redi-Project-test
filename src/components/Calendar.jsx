import React from 'react';
import Calendar from 'react-calendar';
import { CalendarContainer } from './Calendar.styled';

const MyCalendar = (props) => {
    return (
        <CalendarContainer>
            
            <Calendar
            onChange={props.onChange}
            value={props.value}
                className="custom-calendar"
                tileClassName={({ date }) => {
                    if (props.value.includes(date.toDateString())) {
                      return 'visited'; 
                    }
                  }}
            />
            
        </CalendarContainer>
    );
};
export default MyCalendar;