import React, { useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import fetchMovie from '../../store/actions/fetchMovie';

export const MoviePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { movie, isLoading, error } = useSelector((state) => state.movie);

    useEffect(() => {
        dispatch(fetchMovie(id))
    }, [dispatch, id]);

    const {Title, Poster, Type, Year, Plot} = movie;

    return (
        <div className="w-full min-h-screen bg-white flex justify-center">
            <div className="border shadow-xl rounded-lg w-11/12 h-full pt-6 pb-10 px-4 m-4">
                {error && (
                    <div className="text-sm text-gray-400 flex justify-center items-center">
                        Sorry, movie is not available
                    </div>
                )}
                {isLoading ? (
                    <div className="text-sm text-gray-400 flex justify-center items-center">Loading..</div>
                ) :
                    (
                       <>
                           <div className="flex w-full md:w-1/2">
                               <img className="w-32 md:w-36 h-44 md:h-56 object-cover" src={Poster} alt={Title} />
                               <div className="flex flex-col px-5 md:pl-7 pt-4 md:pt-6">
                                   <h2 className="font-bold text-base md:text-lg text-blue-800 h-12 md:h-14 overflow-hidden">{Title}</h2>
                                   <div className="text-blue-700 font-light text-sm pt-2">{Type}</div>
                                   <div className="text-blue-600 font-light text-xs pt-2">{Year}</div>
                               </div>
                           </div>
                           <div className="py-6">
                               <p className="text-xs text-gray-400">{Plot}</p>
                           </div>
                       </>
                    )
                }
            </div>
        </div>
    );
};
