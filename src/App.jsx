import { useEffect, useState } from "react"

import MovieCard from "./MovieCard"
import "./App.css"
import searchIcon from "./search.svg"

const API_URL = "http://www.omdbapi.com?apikey=c83680c4"

// const movie1 = {
//   Title: "Batman: The Animated Series",
//   Year: "1992–1995",
//   imdbID: "tt0103359",
//   Type: "series",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
// }

function App() {
  const [movies, setMovies] = useState([])

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies("Batman")
  }, [])
  return (
    <div className="app">
      <h1>Movie Directory</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src={searchIcon} alt="search" onClick={() => {}} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  )
}

export default App
