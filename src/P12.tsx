/**
 * 
Question: Persistent Counter with localStorage

Create a simple React component that displays a counter. The counter should have two buttons:

    Increment - increases the counter by 1
    Decrement - decreases the counter by 1

The counter's value should persist across page reloads by using localStorage. When the page is reloaded, the component should retrieve the previous counter value from localStorage and display it.
Requirements

    When the counter is updated (by clicking the Increment or Decrement buttons), save the updated counter value to localStorage.
    On initial render, check if there’s a saved counter value in localStorage. If it exists, set the counter to this value; otherwise, initialize it to 0.
 */

import { useState, useEffect, useCallback } from 'react';

export default () => {
  const [count, setCount] = useState<number>(parseInt(localStorage.getItem('count') ?? '0'));

  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  const onClickIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);

  const onClickDecrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, [count]);

  return (
    <>
      <div className="body">
        <div className="header">{count}</div>
        <div className="footer">
          <button className="button" onClick={onClickIncrement}>
            Increment
          </button>
          <button className="button" onClick={onClickDecrement}>
            Decrement
          </button>
        </div>
      </div>
      <style>{`
      .body {
         display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: column;
         height: 100vh;
      }
      .header {
         font-size: 30px;
         font-weight: bold;
      }
      `}</style>
    </>
  );
};
