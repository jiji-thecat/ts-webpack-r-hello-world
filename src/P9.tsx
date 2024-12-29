/**
 * 10と書いてあるボタンを用意。そのボタンが押されたらカウントダウンが始まる。
 * ボタンを押されるたびにカウントダウンはリセットされる。
 *
 */

import { useState, useEffect, useCallback, useRef } from 'react';
const TIME = 10000;

/**
 * ---
 * refを使う理由：refでidを保管することで、refを更新をしてもrerenderが走らない。stateでidを管理しようとするとrerenderが走り、パフォーマンス悪くなる。
 * refはmutable objectだけど、ref.currentはimmutable object.
 *
 * ポイントは、idRef.currentにsetIntervalのidを入れておく。
 * setIntervalの中では、setCountを実行するが、その中で、もしprev<=0の場合、alertを出したいので、clearIntervalをする。countはdefaultに戻したいので、
 * TIMEを返す。
 * もしprev>0の場合は、ただcountを減らしたいだけなので、prev-1000をする。
 * setIntervalは、intervalごとにコードを実行する関数のため、timeに1000を指定して、1秒ごとにcountを計算する。
 *
 * またボタンを押されたら、タイマーリセットとある。onClickでは、idRef.currentがあれば、クリック２度目以降なので、タイマーをリセットする。
 * clearIntervalして、setCount(TIME)を実行する。このあとに上記で述べた、setInterval〜の実装がまた繰り返される。
 */
export default () => {
  const idRef = useRef<NodeJS.Timeout | null>(null);
  const [count, setCount] = useState(TIME);

  const onClick = useCallback(() => {
    if (idRef.current) {
      clearInterval(idRef.current);
      setCount(TIME);
    }

    idRef.current = setInterval(() => {
      setCount((prev) => {
        if (prev <= 0 && idRef.current) {
          clearInterval(idRef.current);
          alert("time's up");
          return TIME;
        }

        return prev - 1000;
      });
    }, 1000);
  }, []);

  return (
    <>
      <div className="body">
        <button onClick={onClick}>{Math.trunc(count / 1000)}</button>
      </div>
      <style>
        {`
          .body{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
        `}
      </style>
    </>
  );
};
