import React, { useEffect, useState } from "react";

const User=({name})=>{
    const [count,setCount]= useState(0)
    const [count2,setCount2]= useState(1)

    useEffect(()=>{
    //  const timer=setInterval(()=>{
    //     console.log("dfunctionUuseEffect");
    //  },1000)  

    //  return ()=>{
    //     clearInterval(timer)
    //  }

    },[])

    let handle=()=>{  
      setCount(count+1)
      setCount2(count2+count)
    }
return (
    <>
    <div className='user-card'>
        <h1>{count}</h1>
        <h1>{count2}</h1>
        <button onClick={handle}>Click</button>
        <h1>Name: {name}</h1>
        <h3>Loation : Mumbai</h3>
        <h3>Contact : @sharad03</h3>
    </div>
    </>
)
}
export default User;
