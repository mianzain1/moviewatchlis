import { useState } from "react"
import ResultCard from "./ResultCard";

export const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const key = "c969c9637160935cb2ac664fa4aa94ca";
    const handleChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value)
        console.log(query);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setResults(data.results);
                } else {
                    setResults([]);
                }
            });
    };
    return (
        <div className='add-page'>
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text" placeholder='search for a movie' value={query} onChange={handleChange} />
                    </div>
                    {results.length > 0 && (
                        <ul className="results">
                            {results.map((movie) => (
                                <li key={movie.id}>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
};
