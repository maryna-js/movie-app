import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MoviesList } from "../movies-list/MoviesList";
import { MoviePage } from "../movie-page/MoviePage";
import { PageNotFound } from '../page-not-found/PageNotFound';

export const RoutePaths = () => (

        <Routes>
            <Route exact path="/" element={<MoviesList />} />
            <Route
                path='/movie/:id'
                element={<MoviePage />}
            />
           <Route path='/404' element={<PageNotFound />} />
            <Route
                path="*"
                element={<Navigate to="/404" replace />}
            />
        </Routes>

);
