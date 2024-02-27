import React, { useState, useEffect, useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const SavedMovies = () => {
  const sliderRef = useRef(null);

  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  console.log(movies);
  return (
    <>
      {" "}
      <h2 className='text-white font-bold md:text-xl p-4'>My Movies</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className='bg-white left-0 rounded-full opacity-50 hover:opacity-100 absolute cursor-pointer z-10 hidden group-hover:block'
        />
        <div
          ref={sliderRef}
          id={"slider"}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies.map((item) => (
            <div
              key={item.id}
              className='w-[160px] sm:w-[200px] lg:w-[280px] md:w-[240px] inline-block cursor-pointer relative p-2'
            >
              <img
                className='w-full h-auto block'
                src={`https://image.tmdb.org/t/p/w500/${item?.image}`}
                alt={item?.title}
              />
              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='white-space-normal text-xs md:text-sm flex justify-center items-center font-bold h-full text-center '>
                  {item?.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className='bg-white right-0 rounded-full opacity-50 hover:opacity-100 absolute cursor-pointer z-10 hidden group-hover:block'
        />
      </div>
    </>
  );
};

export default SavedMovies;
