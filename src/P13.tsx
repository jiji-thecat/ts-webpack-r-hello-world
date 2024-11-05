/**
 * https://devtools.tech/questions/s/how-to-create-a-loading-animation-or-frontend-coding-challenge-or-react-js-or-javascript---qid---8W49gsfYuifkYlgXgY46
 *
 * 各dotにアニメーションを付与する。アニメーションの付与方法は、@keyframes アニメーション名でできる。
 * 100%のときに、translate x: 0, y: -10pxを適用すると、アニメーションが100%に達した時点で、x, y方向に移動する。このとき、cssでは、webページの左上を(0,0)原点とするので、下方向に10px移動する。
 * これをdotのanimation propを使って適用させる。それぞれにdelayを入れたいので、nth-childを使って、animation-delay: 100msを使う
 * animation: ここは順番バラバラでも適用される
 *
 * 2024/11/03 明日また解く
 * 2024/11/05 明日また解く
 */

export default () => {
  return (
    <>
      <div className="body">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <style>
        {`
        .body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          }
        .dot{
          width: 50px;
          height: 50px;
          background-color: black;
          border-radius: 50%;
          margin: 10px;
          animation: 0.5s  alternate infinite bounce;
          }
        .dot:nth-child(2) {
          animation-delay: 100ms;
        }
        .dot:nth-child(3) {
          animation-delay: 200ms;
        }
        @keyframes bounce {
          100% {
            translate: 0 -10px;
          }
        }
        `}
      </style>
    </>
  );
};
