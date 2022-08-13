import React, { useState, useEffect } from "react";

function App() {
  const [ time, setTime ] = useState(new Date());

  const refreshClock = React.useCallback(() => {
    setTime(new Date());
  }, [setTime]);
    
  

  useEffect(() => {
    const timerID = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, [refreshClock]);

  return <span>Time : {time.toLocaleTimeString()}</span>;
}

export default App;
