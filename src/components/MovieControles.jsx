import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState"

function MovieControles({ movie, type }) {
    const { removeMovieToWatchList, addMovieToWatched, moveToWatchList, removeToWatched } = useContext(GlobalContext);
    return (
        <div className="inner-card-controls">
            {type === 'watchList' && (
                <>
                    <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)} >
                        <i className="fa-fw far fa-eye"></i>

                    </button>
                    <button
                        className="ctrl-btn"
                        onClick={() => removeMovieToWatchList(movie.id)}

                    >
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}
            {type === "watched" &&
                (
                    <>
                        <button className="ctrl-btn" onClick={() => moveToWatchList(movie)} >
                            <i className="fa-fw far fa-eye-slash"></i>
                        </button>
                        <button className="ctrl-btn" onClick={() => removeToWatched(movie.id)} >
                            <i className="fa-fw fa fa-times"></i>

                        </button>
                    </>
                )
            }
        </div>
    )
}

export default MovieControles;
