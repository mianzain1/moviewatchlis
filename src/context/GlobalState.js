import { createContext, useReducer, useEffect, useLayoutEffect } from "react";
import AppReducers from "./AppReducers";

export const initialState = {
    watchList: localStorage.getItem('watchList') ? JSON.parse(localStorage.getItem('watchList')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
};

//create context

export const GlobalContext = createContext(initialState);

//actions

//Provider components

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducers, initialState)
    useEffect(() => {
        localStorage.setItem('watchList', JSON.stringify(state.watchList))
        localStorage.setItem('watched', JSON.stringify(state.watched))
    }, [state])
    const addMovieToWatchList = movie => {
        dispatch({ type: "Add_Movie_To_WatchList", payload: movie });
    }
    const removeMovieToWatchList = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
    }
    const addMovieToWatched = movie => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie })
    }
    const moveToWatchList = movie => {
        dispatch({ type: "MOVE_TO_WATCH_LIST", payload: movie })
    }
    const removeToWatched = id => {
        dispatch({ type: "REMOVE_MOVIE_WATCHED", payload: id })
    }

    return (
        <GlobalContext.Provider value={{
            watchList: state.watchList,
            watched: state.watched,
            addMovieToWatchList,
            removeMovieToWatchList,
            addMovieToWatched,
            moveToWatchList,
            removeToWatched
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
