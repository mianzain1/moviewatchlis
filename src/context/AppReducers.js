export default (state, action) => {
    switch (action.type) {
        case "Add_Movie_To_WatchList":
            return {
                ...state,
                watchList: [action.payload, ...state.watchList],
            };
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
                ...state,
                watchList: state.watchList.filter(movie => movie.id !== action.payload)
            }
        case "ADD_MOVIE_TO_WATCHED":
            return {
                ...state,
                watchList: state.watchList.filter(movie => movie.id !== action.payload.id),
                watched: [action.payload, ...state.watched],
            }
        case "MOVE_TO_WATCH_LIST":
            return {
                ...state,
                watched: state.watched.filter(movie => movie.id !== action.payload.id),
                watchList: [action.payload, ...state.watchList]
            }
        case "REMOVE_MOVIE_WATCHED":
            return {
                ...state,
                watched: state.watched.filter(movie => movie.id !== action.payload)
            };

    }
}