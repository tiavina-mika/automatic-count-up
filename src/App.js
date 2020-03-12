import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    if (count < 100) {
      setCount(count + 1);
    }

  }, 100);
  if (count === 100) {
    console.log('finished')
  }
  return <h1>{count}</h1>;
}

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default App;
