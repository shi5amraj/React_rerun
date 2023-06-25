import React from 'react'
import { useState,useEffect } from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(10);

    useEffect(() => {
      const intervalId = setInterval(() => {

        
        setTimer((prevTimer) => (prevTimer<=0)?10: prevTimer - 1);

      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    return (
          <div style={{textAlign:"center"}}>
          <h1>Please Wait Poll Loading</h1>
        <h1>Waiting Time: {timer}</h1>
      </div>
    );
}

export default Timer;