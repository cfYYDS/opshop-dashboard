import React from 'react'
import {IoBagHandle} from 'react-icons/io5'
const DashboardStatsGrid = () => {
  return (
    <div className='flex gap-4'>
        <BoxWrapper>
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
                <IoBagHandle className="texst-2xl text-white"/>
            </div>
            <div className='pl-4'>
                <span className='texst-sm text-gray-500 font-light'>Total Sales</span>
                <div className='flex items-center'>
                    <strong className='text-xl text-gray-700 font-semibold'>$34525.60</strong>
                    <span className='text-sm text-green-500 pl-2'>+234</span>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
                <IoBagHandle className="texst-2xl text-white"/>
            </div>
            <div className='pl-4'>
                <span className='texst-sm text-gray-500 font-light'>Total Sales</span>
                <div className='flex items-center'>
                    <strong className='text-xl text-gray-700 font-semibold'>$34525.60</strong>
                    <span className='text-sm text-green-500 pl-2'>+234</span>
                </div>
            </div>
            </BoxWrapper>
            <BoxWrapper>
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
                <IoBagHandle className="texst-2xl text-white"/>
            </div>
            <div className='pl-4'>
                <span className='texst-sm text-gray-500 font-light'>Total Sales</span>
                <div className='flex items-center'>
                    <strong className='text-xl text-gray-700 font-semibold'>$34525.60</strong>
                    <span className='text-sm text-green-500 pl-2'>+234</span>
                </div>
            </div>
            </BoxWrapper>

            <BoxWrapper>
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
                <IoBagHandle className="texst-2xl text-white"/>
            </div>
            <div className='pl-4'>
                <span className='texst-sm text-gray-500 font-light'>Total Sales</span>
                <div className='flex items-center'>
                    <strong className='text-xl text-gray-700 font-semibold'>$34525.60</strong>
                    <span className='text-sm text-green-500 pl-2'>+234</span>
                </div>
            </div>
            </BoxWrapper>

           </div>
  )
}

export default DashboardStatsGrid
function BoxWrapper({children}){
    return(
        <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>

    )

}