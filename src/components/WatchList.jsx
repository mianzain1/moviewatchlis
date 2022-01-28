import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

export const WatchList = () => {
  const { watchList } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watch List</h1>
        </div>
        {watchList.length > 0 ? (
          <div className="movie-grid">
            {watchList.map((movie) => (
              <MovieCard movie={movie} type="watchList" />
            ))}
          </div>
        ) : (
          <h2 className='no-movies'> No Movies in your Watch List</h2>
        )}
      </div>
    </div>
  )
};
