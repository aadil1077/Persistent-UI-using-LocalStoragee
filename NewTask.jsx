import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[375px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='text-white text-sm bg-red-600 px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-white text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold '>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='mt-1'>
                <button className='bg-blue-500 py-1 px-2 text-sm'>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask