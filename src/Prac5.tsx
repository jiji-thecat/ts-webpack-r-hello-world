/**
 * 5. フォームの操作

    目標: フォームの要素に対してDOM操作を行い、フォームの値を取得、バリデーション、サブミットなどを練習。
    練習例: ボタンをクリックしてフォームの入力値を取得し、alertで表示する。
 */

import { useState, useRef, useCallback, useEffect } from 'react';

// idをinputに指定して、document.getElementById(id)して、alert(element.value)でもできるけど、今回はrefを使う。
// refを使うことで要素に簡単にアクセスできるので、これを使う。
export default () => {
  const inputRef = useRef(null) as any;
  const onClick = useCallback(() => {
    alert(inputRef.current.value);
  }, []);

  return (
    <>
      <input ref={inputRef}></input>
      <button onClick={onClick}>click me</button>
    </>
  );
};
