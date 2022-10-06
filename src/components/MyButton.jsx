import React from 'react'

const MyButton = ({text}) => {
  return (
    <button className="h-10 bg-red-500 text-white duration-500 px-6 py2 mx-4 hover:bg-black rounded">{text}</button>
  )
}

export default MyButton