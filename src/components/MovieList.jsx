import React from "react";
import { Container } from "./MovieList.styled";

const MovieList = (props) => {
    return (
        <Container>
          <ul className="image-gallery">
        {props.movies.map((movie) => (
          <li className="movie_card" key={movie.id}>
            <h3>{movie.title}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={`${movie.title} Poster`}
            />
            <button className="overlay"  onClick={()=>props.handleFavourClick(movie)}>{props.button}</button>
          </li>
        ))}
        </ul>
      </Container>
    )
};
export default MovieList;