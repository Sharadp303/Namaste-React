import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='p-2 my-2 text-center font-bold text-2xl'>Contact Us</h1>
      <form>
        <input className="p-2 m-2 border border-black" type="text" placeholder='Name' />
        <input  className="p-2 m-2 border border-black"type="text" placeholder='Message' />
        <button className="p-2 m-2 border border-black bg-slate-400 rounded-lg">Submit</button>
      </form>
    </div>
  )
}

export default Contact