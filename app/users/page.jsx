import React from 'react'
import Link from 'next/link';

const Users =async () => {

  const data =await fetch('https://jsonplaceholder.typicode.com/users')
  const response = await data.json();
  console.log(response);
  return (
    <>
    <h1 className='text-center text-2xl'>Users</h1>
    <div className='flex flex-col gap-5 mx-[10rem] mt-0'>{response.map (item => {
      return <div key={item.id} className='border border-black rounded p-5'>
        <h1>{item.name}</h1>
        <Link href = {`/users/${item.id}`}>
        <button className="btn btn-primary">Show more...</button></Link>

      </div>
      
    })}</div>

    </>
    

      
      
  )
}

export default Users