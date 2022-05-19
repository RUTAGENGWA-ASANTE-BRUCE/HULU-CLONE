import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar ()
{
    return (
        <nav className='relative'>
            <div className='flex px-10 sm:px-20 text-2xl  whitespace-nowrap
            space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
                <Link to={"/Trending"}>
                    <h2 key={"trending"} className='cursor-pointer transition duration-100 transform hover:scale-125  hover:text-white active:text-red-500'>Trending</h2>
                </Link>

                <Link to={"/TopRated"}>
                    <h2 key={"Top Rated"} className='cursor-pointer transition duration-100 transform hover:scale-125  hover:text-white active:text-red-500'>Top Rated</h2>
                </Link>

                <Link to={"/Action"}>
                    <h2 key={"Action"} className='cursor-pointer transition duration-100 transform hover:scale-125  hover:text-white active:text-red-500'>Action</h2>
                </Link>

                <Link to={"/Comedy"}>
                    <h2 key={"Comedy"} className='cursor-pointer transition duration-100 transform hover:scale-125  hover:text-white active:text-red-500'>Comedy</h2>
                </Link>

                <Link to={"/Horror"}>
                    <h2 key={"Horror"} className='cursor-pointer transition duration-100 transform hover:scale-125  hover:text-white active:text-red-500'>Horror</h2>
                </Link>

                <Link to={"/Romance"}>
                    <h2 key={"Romance"} className='cursor-pointer transition duration-100 transform hover:scale-125  hover:text-white active:text-red-500'>Romance</h2>
                </Link>

                <Link to={"/Mystery"}>
                    <h2 key={"Mystery"} className='cursor-pointer transition duration-100 transform hover:scale-125  hover:text-white active:text-red-500'>Mystery</h2>
                </Link>

                <Link to={"Sci-Fi"}>
                    <h2 key={"Sci-Fi"} className='cursor-pointer transition duration-100 transform hover:scale-125  hover:text-white active:text-red-500'>Sci-Fi</h2>
                </Link>

                <Link to={"Western"}>
                    <h2 key={"Western"} className='cursor-pointer transition duration-100 transform hover:scale-125  hover:text-white active:text-red-500'>Westsern</h2>
                </Link>

                <Link to={"Animation"}>
                    <h2 key={"Animation"} className='cursor-pointer transition duration-100 transform hover:scale-125  hover:text-white active:text-red-500'>Animation</h2>
                </Link>

                <Link to={"TV Movie"}>
                    <h2 key={"TV_Movie"} className='cursor-pointer transition duration-100 transform hover:scale-125  hover:text-white active:text-red-500 last:pr-24' >TV Movie</h2>
                </Link>

            </div>
            <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12  ' />
        </nav>
    )
}
