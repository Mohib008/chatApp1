import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='col-span-2 hidden mt-2 px-2
     lg:inline'>
    <div className='flex  items-center space-x-2
     bg-gray-100 p-3 rounded-full mt-2'>
      <SearchIcon className='h-5 w-5 text-gray-500' />
      <input 
        type="text" 
        placeholder='Search Twitter'
        className='flex-1 outline-none bg-transparent'
      />
    </div>
      <TwitterTimelineEmbed
      sourceType='profile'
      screenName='arsalamohib'
      options={{hight: 1000}} />
    </div>
  )
}

export default Widgets