/**
 * https://www.reacterry.com/portal/challenges/reaction-time-game
 *
 * summary
 *  1. show button "Start Game"
 *  2. after click, show red box and change it to green in 1 to 6s
 *  3. if click red then show "You clicked too early!" under the button
 *  4. if click green then show "You took <time>ms!" under the button
 *
 * memo
 *  1.
 *   make <button> and <box>. use flag1 to show either.
 *  2.
 *   use useEffect and inside setTimeout(, random number 0 to 6000)
 *   inside timeout, change box color to green, use flag2. Also start timer using date component(state)
 *  3. check flag2 inside onClick and use flag3 to show "you clicked early,,"
 *  4. check flag2 inside onClick and use flag3 to show "~ms"
 */

import React, { useState, useCallback, useRef } from 'react';

const FAILED_MESSAGE = 'You clicked too early!';
export default () => {
  const [showButton, setShowButton] = useState(true);
  const [isGreen, setIsGreen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState(FAILED_MESSAGE);
  const [startTime, setStartTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const onClickButton = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    const rand = 1000 + Math.trunc(Math.random() * 6000);
    timerRef.current = setTimeout(() => {
      setIsGreen(true);
      setStartTime(Date.now());
    }, rand);

    setShowButton(false);
    setIsGreen(false);
    setShowMessage(false);
  }, []);

  const onClickBox = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (isGreen) {
      const time = Date.now() - startTime;
      setMessage(`You took ${time}ms!`);
    } else {
      setMessage(FAILED_MESSAGE);
    }

    setShowMessage(true);
    setShowButton(true);
  }, [isGreen, startTime]);

  return (
    <>
      <div className="body">
        {showButton ? (
          <button className="button" onClick={onClickButton}>
            Start Game
          </button>
        ) : (
          <div onClick={onClickBox} className={`box ${isGreen ? 'green' : 'red'}`}></div>
        )}
        {showMessage ? <div className="message">{message}</div> : <></>}
      </div>
      <style>
        {`
            .body {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                height: 100vh;
            }
            .message {
                font-size: 25px;
                font-weight: bold;
                margin-top: 20px;
            }
            .button {
                border-radius: 8px;
                border: white;
                background-color: black;
                color: white;
                padding: 10px 20px;
            }
            .box {
                width: 100px;
                height: 100px;
                background-color: red;
            }
            .red {
                background-color: red
            }
            .green {
                background-color: green
            }
        `}
      </style>
    </>
  );
};
