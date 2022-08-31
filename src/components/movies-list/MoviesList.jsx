import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MovieCard } from "../movie-card/MovieCard";
import fetchMovies from '../../store/actions/fetchMovies';

export const MoviesList = () => {
    const dispatch = useDispatch();
    const { movies, isLoading, error } = useSelector(
        (state) => state.movies
    );

    useEffect(() => {
        dispatch(
            fetchMovies()
        )
    }, [dispatch]);

    return (
        <div className="w-full bg-white flex justify-center">
            <div className="border shadow-xl rounded-lg w-11/12 h-full p-4 m-4">
                {isLoading && (
                    <div className="text-sm text-gray-400 flex justify-center items-center">Loading..</div>
                )}
                {error && (
                    <div className="text-sm text-gray-400 flex justify-center items-center">
                        Sorry, app is not available
                    </div>
                )}
                {movies.map(({Poster, Type, Title, Year, imdbID}) => (
                    <MovieCard
                        poster={Poster}
                        type={Type}
                        title={Title}
                        year={Year}
                        id={imdbID}
                    />
                ))}
            </div>
        </div>
    );
};


