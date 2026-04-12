import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-dark text-light font-sans text-center">
      <h1 className="text-8xl m-0 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent font-bold">
        404
      </h1>
      <p className="text-xl opacity-70 mb-8 mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link 
        to="/myPortfolio" 
        className="px-8 py-4 bg-primary text-dark rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(121,255,255,0.3)]"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
