import React, { useState } from "react";

export const SearchMovies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovie] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=17303e2091c9dfd694d3c01a2d8a54b8&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      setMovie(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold text-center mb-6">Search Movies</h1>

        <form
          className="grid w-full max-w-2xl md:grid-cols-[auto,1fr,auto] md:gap-4 md:items-center"
          onSubmit={searchMovies}
        >
          <label
            htmlFor="query"
            className="text-[1.2rem] uppercase mb-[0.2rem] text-gray-700 tracking-wide md:mb-0 text-center"
          >
            Movie Name
          </label>

          <input
            type="text"
            name="query"
            id="query"
            placeholder="enter movie name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="text-[1.6rem] px-8 rounded-full border border-gray-300 mb-4 md:mb-0 leading-[2.8rem] focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="bg-black/75 text-white py-2 px-8 rounded-full text-[1.4rem] border border-black/75 cursor-pointer transition-colors duration-200 hover:bg-black/85"
          >
            Search
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4"
            >
              <img
                className="rounded-lg mb-4 w-50 h-auto"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + " poster"}
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  {movie.original_title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  <small>Release Date: {movie.release_date}</small>
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <small>Rating: {movie.vote_average}</small>
                </p>
                <p className="text-sm text-gray-700 line-clamp-3">
                  {movie.overview}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
