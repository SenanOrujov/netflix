import React from "react";
import SavedMovies from "../components/SavedMovies";

function Account() {
  return (
    <>
      <div className='w-full text-white'>
        <img
          className='absolute w-full h-[400px] object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/25285822-83f3-4aff-8c2d-301f9c6f685e/AZ-en-20240219-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='#'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8 '>
          <h1 className='text-3xl md:text:5xl font-bold'>My Movies </h1>
        </div>
      </div>
      <SavedMovies />
    </>
  );
}

export default Account;
