import React from "react";
import { SearchMovies } from "./components/SearchMovies";

const App = () => {
  return (
    <div className="justify-items-center align-center">
      <h1 className="text-3xl font-bold text-red-400 text-center p-7">
        React Movie Search
      </h1>
      <SearchMovies />
    </div>
  );
};

export default App;
