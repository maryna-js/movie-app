import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as LikeIcon } from '../../icons/heart.svg';
import { ReactComponent as StarIcon } from '../../icons/star.svg';

export const MovieCard = ({
  title,
  type,
  year,
  poster,
  id
}) => {
  const [isActive, setIsActive] = useState(false)
  const toggleCollapse = () => {
    setIsActive((state) => !state)
  }
  return (
    <div
        key={id}
        className={`flex flex-col items-start border rounded w-full h-full my-4 h-auto ${isActive ? 'md:h-72' : 'md:h-36'}`}>
      <div className="flex flex-col md:flex-row justify-between items-center w-full relative">
        <div className="flex w-full md:w-1/2">
          <img className="w-20 md:w-24 h-32 md:h-36 object-cover" src={poster} alt={title} />
            <div className="flex flex-col px-5 md:pl-7 pt-4 md:pt-6">
              <h2 className="font-bold text-base md:text-lg text-blue-800 h-12 md:h-14 overflow-hidden">{title}</h2>
              <div className="text-blue-700 font-light text-sm pt-2">{type}</div>
              <div className="text-blue-600 font-light text-xs pt-2">{year}</div>
            </div>
        </div>
        <div className="w-full md:w-64 flex items-center justify-start md:justify-center px-1 py-2 md:p-4">
          <div className="mx-2"><LikeIcon className="w-4 md:w-8" /></div>
          <div className="text-sm md:text-lg font-medium text-blue-700 pl-2 md:pl-4">5.8 k</div>
          <div className="ml-4 md:ml-8"><StarIcon className="w-4 md:w-8" /></div>
          <div className="text-sm md:text-lg font-medium text-blue-700 pl-2 md:pl-4 ">4.30</div>
        </div>
        <button
            data-testid='collapse'
            className="text-blue-900 font-bold text-lg mr-6 absolute md:relative right-4 md:right-0 top-20 md:top-0"
            onClick={toggleCollapse}
        >
          {isActive ? '-' : '+'}
        </button>
      </div>
      {isActive && (
          <div data-testid='collapse-open' className="p-4 border-t border-gray-100 w-full mt-2">
            <h4 className="pt-2 pb-4 font-medium text-blue-800 text-sm">{title}</h4>
            <p className="text-xs text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
      )}
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  poster: PropTypes.string,
  id: PropTypes.string.isRequired,
};
