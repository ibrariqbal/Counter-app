import React from 'react'

export default function Counter({count, Increment,Decrement}) {
  return (
    <>
    <div className='h-[200px] w-[300px] bg-white rounded-lg mt-10 mx-auto'>
          <div className='flex flex-col gap-5'>
            <h1 className='mt-5 text-center text-3xl font-bold'>Counter App</h1>
             <h2 className='text-center text-xl'>Count = {count}</h2>
             <div className='flex gap-5 justify-center'>
             <button onClick={Increment} className='ml-2 rounded-md bg-orange-500 text-white px-4 py-2 cursor-pointer font-bold hover:bg-red-900'>Increment</button>
             <button onClick={Decrement} className='ml-2 rounded-md bg-green-500 text-white px-4 py-2 cursor-pointer font-bold  hover:bg-blue-900'>Decrement</button>
             </div>
          </div>
         </div> 
      </>
  )
}
