/**
 * 2. イベントリスナーの追加・削除

    目標: DOM要素に対してaddEventListenerやremoveEventListenerを使い、特定のアクションに基づいてDOMの操作を行う方法を理解する。
    練習例: スクロール時に要素の色を変える。コンポーネントのマウント時にイベントリスナーを追加し、アンマウント時に削除する。
 */

import { useState, useRef, useCallback, useEffect } from 'react';

/**
 * window.eventlistenerのスクロールイベントに対してハンドルスクロールのイベントを登録する。
 * イベントが発生したら背景の色を変える。
 * アンマウント時（useEffectのreturn）で登録解除する。
 */
export default () => {
  const handleScroll = useCallback(() => {
    document.body.style.backgroundColor = 'green';
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <div style={{ height: '200vh' }}>Scroll to change background color</div>;
};
