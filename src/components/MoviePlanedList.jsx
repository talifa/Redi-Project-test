import React from "react";
import { ContainerPlaned } from "./MoviePlanedList.styled";

const MoviePlanedList = (props) => {
    return (
       
        <ContainerPlaned>
         <h2>Watch list:</h2>
        
        <div className="film-list">
        <ul>
          {
          props.filmplaned.map((film) => (
            <li className="film-li" key={film.id}>
              <strong>{film.title}</strong> 
            <p>{film.dates}</p>
            
            </li>
          ))}
          
        </ul>
      
      </div>
      <div className="button-wrapper">
      <button onClick={()=>props.planFavorMovies()}>{props.button}</button>
      <button onClick={()=>props.handlePage()}>Next Popular Movies</button>
      </div>
      </ContainerPlaned>
      
    )
};
export default MoviePlanedList;