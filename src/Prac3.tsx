/**
 * 3. useEffectを使ってDOM操作をトリガー

    目標: useEffectフックを使ってコンポーネントがマウントまたはアップデートされた際にDOMを操作する練習。
    練習例: コンポーネントの初回レンダリング時にDOMの特定の部分にアニメーションを追加。
 */
import { useState, useRef, useCallback, useEffect } from 'react';

// elementはidを付与して、document.getElementByIdで取得する。型指定はany
// styleをいじるときは、element.style.transformなどのようにアクセスする。
export default () => {
  useEffect(() => {
    const element = document.getElementById('animateMe') as any;
    element.style.transition = 'transform 1s ease';
    element.style.transform = 'translateY(0)';

    return () => {
      element.style.transform = 'translateY(-100px)';
    };
  }, []);

  return (
    <div id="animateMe" style={{ transform: 'translateY(-100px)' }}>
      Hello, I will animate on mount!
    </div>
  );
};
