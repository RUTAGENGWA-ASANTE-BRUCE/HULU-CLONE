import React from 'react'
import { ThumbUpIcon } from '@heroicons/react/outline'

function Thumbnail ()
{
    return (
        <div className='group cursor-pointer p-2 transition duration-200 ease-in tranform sm:hover:scale-105 hover:z-50'>

            <img className='flex sm:w-screen'
                src='https://tse1.mm.bing.net/th?id=OIP.CX6yS_TFiP11pYNtVPPacwHaEK&pid=Api&P=0&w=279&h=157'
                width={1080} height={1920} alt='' />
            <div className='p-2'>
                <p className='truncate max-w-md'>
                    An image is represented by its dimensions (height and width) based on the number of pixels. For example, if the dimensions of an image are 500 x 400 (width x height), the total number of pixels in the image is 200000. This pixel is a point on the image that takes on a specific shade, opacity or color.
                </p>
                <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>Image Original Name</h2>
                <p className='flex items-center opacity-0 group-hover:opacity-100 '>
                    {new Date().toDateString()}{"  "}
                    <ThumbUpIcon className='h-5 mx-2' />{" "}
                    3949
                </p>

            </div>
        </div>
    )
}

export default Thumbnail
