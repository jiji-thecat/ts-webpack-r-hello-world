/**
 * 4. クラスの操作（classListを使う）

    目標: DOMのclassListを操作して、要素の表示状態やスタイルを動的に変更する練習。
    練習例: ボタンをクリックするたびに、要素にhiddenクラスを追加したり削除したりして、表示/非表示を切り替える。
 */
import { useState, useRef, useCallback, useEffect } from 'react';

/**
 * classlist.removeとかを使うのかと思ったけどそうではなく、classNameのところで、フラグ使って指定する。
 */
export default () => {
  const [isHidden, setIsHidden] = useState(false);

  const onClick = useCallback(() => {
    if (!isHidden) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, [isHidden]);

  return (
    <>
      <button onClick={onClick}>click me</button>
      <div className={isHidden ? 'foo' : 'foo hidden'}></div>
      <style>{`
        .foo { width: 50px; height: 50px; background-color: green; }
        .hidden {display: none}
    `}</style>
    </>
  );
};
