/**
 * 10と書いてあるボタンを用意。そのボタンが押されたらカウントダウンが始まる。
 * ボタンを押されるたびにカウントダウンはリセットされる。
 *
 */

import { useState, useEffect, useCallback, useRef } from 'react';
const TIME = 10000;

/**
 * refを使う理由：refでidを保管することで、refを更新をしてもrerenderが走らない。stateでidを管理しようとするとrerenderが走り、パフォーマンス悪くなる。
 * refはmutable objectだけど、ref.currentはimmutable object.
 */
export default () => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [timer, setTimer] = useState(TIME);

  const onClick = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      setTimer(TIME);
    }

    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0 && timerRef.current) {
          clearTimeout(timerRef.current);
          alert("Time's up!");
          return TIME;
        }

        return prev - 1000;
      });
    }, 1000);
  }, []);

  return (
    <>
      <div className="body">
        <div>{timer / 10 ** 3}</div>
        <button onClick={onClick}>{TIME / 10 ** 3}</button>
      </div>
      <style>{`
        .body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
        }
      `}</style>
    </>
  );
};
