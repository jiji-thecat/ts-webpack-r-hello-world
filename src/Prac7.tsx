/**
 * Create a Countdown Timer App.

In this app, the user inputs time (minutes and seconds), and when they press the start button, a countdown begins. When the time reaches 0, an alert is displayed, and the countdown result remains visible on the screen until the reset button is pressed.

Requirements:

    The user should be able to input minutes and seconds through a form. v
    When the start button is pressed, the countdown begins. v
    When the countdown reaches 0, an alert should pop up saying "Time's up!". v
    While the timer is running, the input fields and the start button should be disabled. v
    Once the countdown is finished, the user should be able to press a reset button to reset the timer. After resetting, the input fields become active again, allowing the user to set new time. v

Optional Features:

    Add a "Pause" button that allows the user to pause and resume the countdown.
    Display a list of previous countdowns after resetting.
 */

import { useState, useEffect, useRef, useCallback } from 'react';

const CountdownTimer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Convert minutes and seconds into milliseconds
  const getMiliSec = (min: number, sec: number) => {
    return (min * 60 + sec) * 1000;
  };

  // Start the countdown
  const startCountdown = useCallback(() => {
    const totalMilliseconds = getMiliSec(minutes, seconds);
    setCount(totalMilliseconds);
    setIsRunning(true);
    setIsFinished(false);
  }, [minutes, seconds]);

  // Reset the timer
  const resetCountdown = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsRunning(false);
    setIsFinished(false);
    setCount(0);
    setMinutes(0);
    setSeconds(0);
  };

  // Pause the countdown
  const pauseCountdown = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsRunning(false);
  };

  // Update the timer every second
  useEffect(() => {
    if (isRunning && count > 0) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount <= 1000) {
            clearInterval(intervalRef.current!);
            setIsRunning(false);
            setIsFinished(true);
            alert("Time's up!");
            return 0;
          }
          return prevCount - 1000;
        });
      }, 1000);
    }

    // Cleanup on unmount or when isRunning changes
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, count]);

  // Display remaining minutes and seconds
  const remainingMinutes = Math.floor(count / 1000 / 60);
  const remainingSeconds = Math.floor((count / 1000) % 60);

  return (
    <div style={styles.container}>
      <div style={styles.timerDisplay}>
        <span>{remainingMinutes}</span> min <span>{remainingSeconds}</span> sec
      </div>
      <div style={styles.form}>
        <input
          type="number"
          min="0"
          value={minutes}
          disabled={isRunning}
          onChange={(e) => setMinutes(Number(e.target.value))}
          placeholder="Minutes"
          style={styles.input}
        />
        <input
          type="number"
          min="0"
          value={seconds}
          disabled={isRunning}
          onChange={(e) => setSeconds(Number(e.target.value))}
          placeholder="Seconds"
          style={styles.input}
        />
        <button onClick={startCountdown} disabled={isRunning || count === 0}>
          Start
        </button>
        <button onClick={resetCountdown} disabled={isRunning}>
          Reset
        </button>
        <button onClick={pauseCountdown} disabled={!isRunning}>
          Pause
        </button>
      </div>
      {isFinished && <p style={styles.alert}>Time's up!</p>}
    </div>
  );
};

// CSS styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  timerDisplay: {
    fontSize: '2em',
    marginBottom: '1em',
  },
  form: {
    display: 'flex',
    gap: '1em',
    alignItems: 'center',
  },
  input: {
    padding: '0.5em',
    fontSize: '1em',
  },
  alert: {
    color: 'red',
    fontSize: '1.5em',
    marginTop: '1em',
  },
};

export default CountdownTimer;

// import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// const MilliComponent = ({ min, sec }: { min: number | undefined; sec: number | undefined }) => {
//   if (min === undefined || sec === undefined) {
//     return null;
//   }

//   return (
//     <>
//       <div className="count min">{min}</div> min
//       <div className="count sec">{sec}</div> sec
//     </>
//   );
// };

// const getMiliSec = (min: number) => {
//   return min * 60 * 10 ** 3;
// };

// export default () => {
//   const [count, setCount] = useState(-1);
//   const [isDisabled, setIsDisabled] = useState(false);
//   const [isResetPressed, setIsResetPressed] = useState(false);
//   const minRef = useRef<any>(0);
//   const secRef = useRef<any>(0);

//   useEffect(() => {
//     if (count === 0) {
//       if (!isResetPressed) {
//         alert("Time's up!");
//       }
//     }
//   }, [isResetPressed, count]);

//   const onClickStart = useCallback(() => {
//     setIsResetPressed(false);

//     if (minRef.current && secRef.current) {
//       const mili =
//         getMiliSec(minRef.current.value === '' ? 0 : minRef.current.value) +
//         (secRef.current.value === '' ? 0 : secRef.current.value * 10 ** 3);
//       setCount(mili);
//       setIsDisabled(true);

//       const id = setInterval(() => {
//         setCount((prev) => {
//           if (prev === 0) {
//             clearInterval(id);
//             return 0;
//           }

//           return prev - 1000;
//         });
//       }, 1000);
//     }
//   }, []);

//   const onClickReset = useCallback(() => {
//     setIsDisabled(false);
//     setCount(0);
//     setIsResetPressed(true);
//     minRef.current.value = '';
//     secRef.current.value = '';
//   }, [minRef.current, secRef.current]);

//   const obj = useMemo(() => {
//     if (count >= 0) {
//       const min = Math.floor(count / 10 ** 3 / 60);
//       const sec = Math.floor((count / 10 ** 3) % 60);
//       return { min, sec };
//     }
//     return { min: 0, sec: 0 };
//   }, [count]);

//   return (
//     <>
//       <div className="body">
//         <div className="countParent">
//           <MilliComponent min={obj.min} sec={obj.sec} />
//         </div>
//         <div className="formParent">
//           <div className="input min">
//             <input disabled={isDisabled} ref={minRef}></input>min
//           </div>
//           <div className="input sec">
//             <input disabled={isDisabled} ref={secRef}></input>sec
//           </div>
//           <div className="button" onClick={onClickStart}>
//             <button disabled={isDisabled}>Start</button>
//           </div>
//           <div className="button reset" onClick={onClickReset}>
//             <button disabled={!isDisabled}>Reset</button>
//           </div>
//         </div>
//       </div>
//       <style>
//         {`
//         .body {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           flex-direction: column;
//           height: 100vh;
//         }
//         .countParent {
//           flex: 1;
//           display: flex;
//           justify-content: center;
//           align-items: flex-end;
//           margin-bottom: 20px;
//         }
//         .formParent {
//           flex: 1;
//           display: flex;
//           justify-content: center;
//           align-items: flex-start;
//           flex-direction: row;
//         }
//         .input {
//           margin-right: 10px;
//         }
//         .count.sec {
//           margin-left: 10px;
//         }
//         .button {
//           margin-right: 10px;
//         }
//       `}
//       </style>
//     </>
//   );
// };
