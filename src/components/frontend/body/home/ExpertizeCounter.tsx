"use client";
import React, { useEffect, useState } from 'react'

const ExpertizeCounter = ({item}: {item: {title: string, counter: number}})  => {
    const [count, setCount] = useState(0);

   
    useEffect(() => {
        const interval = setInterval(() => {
          setCount((prevCount) => (prevCount < item.counter ? prevCount + 1 : prevCount));
        }, item.counter/1000); // Updates every 100ms (you can adjust the speed)
        console.log("hello");
        return () => clearInterval(interval); // Clean up the interval on component unmount
      }, []);
    
   
  return (
    <div>
        <h1 className="text-5xl text-white text-center font-bold mb-1"> {count} </h1>
        <p className="text-center font-bold text-white"> {item.title} </p>
    </div>
  )
}

export default ExpertizeCounter
 