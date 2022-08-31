import React from 'react';
import { Link } from 'react-router-dom';

export const PageNotFound = () => (
  <div className="bg-gray-200 flex w-full h-screen flex-col justify-center items-center">
    <div className="font-normal text-3xl text-blue-900">Page Not Found</div>
    <div className="text-6xl text-blue-900 drop-shadow my-4">404</div>
    <Link to='/'>
      <button className="text-gray-800 text-uppercase text-base">
        GO BACK TO HOME
      </button>
    </Link>
  </div>
);
