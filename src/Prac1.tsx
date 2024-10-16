/**
 * 1. useRefを使った要素へのアクセス

    目標: ReactのuseRefフックを使って、特定のDOM要素にアクセスし、その要素に対して操作を行う練習。
    練習例: ボタンをクリックすると、入力フィールドに自動的にフォーカスを移す機能を作成する。
 */

import { useState, useRef, useCallback } from 'react';

/**
 * onClickを押したら、refのfocus()を呼び出す。
 * useRefの型定義はanyにしておく。
 */
export default () => {
  let inputRef = useRef<any>(null);
  const onClick = useCallback(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={onClick}>press me</button>
    </div>
  );
};
