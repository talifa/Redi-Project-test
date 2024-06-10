import axios from "axios";
import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Calendar from 'react-calendar';
// import { DatePicker } from 'antd';

import MovieHeading from "./components/MovieHeading";
import MovieList from "./components/MovieList";
import SearchQuery from "./components/SearchQuery";

import MyCalendar from "./components/Calendar";
import { Wrapper } from "./components/MovieList.styled";
import MoviePlanedList from "./components/MoviePlanedList";
import { Header } from "./components/SearchQuery.styled";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [favour, setFavour] = useState([]);
  const [filmplaned, setFilmplaned] = useState([]);
  const [selectedDate, setSelectedDate] = useState([]);
  const [pageNumber, setpageNumber] = useState(1);

  const searchMovies = async (searchValue) => {
    try {
      const apiKey = "4aa539255aa0c2506cf45806a15a8a0a&language=en-US";
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${apiKey}`
      );
      console.log(response.data.results.length);
      if (response.data.results.length !== 0) {
        setMovies(response.data.results);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const popularMovies = async (pageNumber) => {
    try {
      const apiKey = "4aa539255aa0c2506cf45806a15a8a0a&language=en-US";
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNumber}`
      );
      console.log(response.data.results);
      if (response.data.results) {
        setMovies(response.data.results);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    popularMovies(pageNumber);
  }, [pageNumber]);

  useEffect(() => {
    searchMovies(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFav = JSON.parse(localStorage.getItem("react-movie-favorites"));
    console.log(movieFav);
    if (movieFav && movieFav.length !== 0) {
      setFavour(movieFav);
    }
  }, []);

  useEffect(() => {
    const movieDate = JSON.parse(localStorage.getItem("react-date-favorites"));
    if (movieDate && movieDate.length !== 0) {
      setFilmplaned(movieDate);
    }
  }, []);

  const handlePage = () => {
    setpageNumber((prevPage) => prevPage + 1);
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-favorites", JSON.stringify(items));
  };
  const saveToLocalStorageDate = (items) => {
    localStorage.setItem("react-date-favorites", JSON.stringify(items));
  };

  const addFavourMovie = (movie) => {
    if (favour.includes(movie)) {
      return favour;
    }
    const newFavourList = [...favour, movie];
    console.log(newFavourList);
    setFavour(newFavourList);
    saveToLocalStorage(newFavourList);
  };

  const planFavourMovies = () => {
    const filmsWithDates = favour.map((film, index) => ({
      ...film,
      dates: selectedDate[index],
    }));
    setFilmplaned(filmsWithDates);
    saveToLocalStorageDate(filmsWithDates);
  };

  const removeFavourMovie = (movie) => {
    const newFavourList = favour.filter((favorite) => favorite.id !== movie.id);
    setFavour(newFavourList);
    saveToLocalStorage(newFavourList);
    saveToLocalStorageDate(newFavourList);
  };

  const addDate = (date) => {
    const newDateList = [...selectedDate, date.toDateString()].sort(
      (a, b) => new Date(a) - new Date(b)
    );
    console.log(newDateList);
    setSelectedDate(newDateList);
    saveToLocalStorageDate(newDateList);
  };

  return (
    <Wrapper>
      <Header>
        <MovieHeading heading="Online Cinema" />
        <MyCalendar onChange={addDate} value={selectedDate} />
        <SearchQuery
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </Header>

      <MoviePlanedList
        filmplaned={filmplaned}
        handlePage={handlePage}
        button="make my watch list"
        planFavorMovies={planFavourMovies}
      />

      <MovieList
        movies={movies}
        button="add to favourites"
        handleFavourClick={addFavourMovie}
      />

      <MovieHeading heading="Favourites" />

      <MovieList
        movies={favour}
        button="delete"
        handleFavourClick={removeFavourMovie}
      />
    </Wrapper>
  );
};

export default App;
