import styled from "styled-components";

export const CalendarContainer = styled.div`
    
    max-width: 200px;
    margin: auto;
    margin-top: 20px;
    background-color: blue;
    padding: 10px;
    border-radius: 3px;
    
    .visited{
        background-color:black;
        color:white;
    }
    
    .custom-calendar .react-calendar__navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .react-calendar__navigation__label {
            font-weight: bold;
        }

        .react-calendar__navigation__arrow {
            font-size: 2rem;
           
        }
        
    }
    
    
 
       
`;