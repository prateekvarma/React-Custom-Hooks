import { useState, useEffect } from "react";

const useCounter = (countForward) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countForward) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countForward]);

  return counter; //As exception that applied to custom hooks - you can retuen values
};

export default useCounter;
