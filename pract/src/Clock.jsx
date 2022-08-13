import React, { useState, useEffect } from "react";

function Clock() {
  const { time, setTime } = useState(new Date());

  function refreshClock() {
    setTime(new Date());
  }

  useEffect(() => {
    const TimerID = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(TimerID);
    };
  }, []);

  return <div>Time : {time.toLocaleTimeString()}</div>;
}

export default Clock;
