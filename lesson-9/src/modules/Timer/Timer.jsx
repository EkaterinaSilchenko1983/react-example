import { useState, useRef, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  //   const [timerId, setTimerId] = useState(0);

  const timerId = useRef(0); //  зберігає данні між рендерами, не перерендує компонент

  useEffect(() => {
    return () => reset();
  }, []);

  const start = () => {
    if (!timerId.current) {
      timerId.current = setInterval(() => {
        setTime((prevState) => prevState + 1);
      }, 1000);
    }
  };

  console.log(timerId);

  const stop = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  return (
    <div>
      <div>
        <button onClick={start} type="button">
          Start
        </button>
        <button onClick={stop} type="button">
          Stop
        </button>
        <button onClick={reset} type="button">
          Reset
        </button>
      </div>
      <div>{time}</div>
    </div>
  );
};

export default Timer;
