/**
 * 
 * React でフォームの入力値を管理する際に、refを使う方法と、value と onChange を使って状態を管理する方法（「制御されたコンポーネント」）の2つの方法があります。どちらが適切かは、具体的な用途や開発スタイルに依存しますが、それぞれのメリットとデメリットを説明します。
1. value と onChange を使う方法（制御されたコンポーネント）

import React, { useState } from 'react';

function MyComponent() {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    console.log(input); // ボタン押されたときの処理
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

メリット

    状態管理が簡単: React の状態（useState）で入力値を管理できるため、状態が一元管理され、バグが減ります。値の変更がコンポーネントの状態に反映されるので、デバッグが容易です。
    React の流儀に従っている: Reactでは、フォーム要素の値をReactの状態で管理することが推奨されています。これにより、フォームの制御が容易になります。
    バリデーションや入力値の加工が簡単: onChange で入力値をリアルタイムで処理し、バリデーションを加えたり、入力内容を変更することができます。

デメリット

    パフォーマンス: 入力するたびにステートが更新され、再レンダリングが発生します。これが大規模なフォームではパフォーマンスに影響を与えることがあります。しかし、通常のアプリケーションでは問題になることは少ないです。

2. ref を使う方法（非制御コンポーネント）

import React, { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef();

  const handleSubmit = () => {
    console.log(inputRef.current.value); // ボタン押されたときの処理
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

メリット

    シンプル: 状態管理を行わないため、非常に簡単に値を取得できます。Reactのステート更新を避けたい場合や、非常に軽量な操作を行いたい場合に有効です。
    パフォーマンス: 状態更新による再レンダリングが発生しないため、パフォーマンス上のメリットがある場合があります。特に大きなフォームや頻繁なレンダリングが求められるケースでは有効です。

デメリット

    状態管理がしづらい: 入力値を直接取得するため、フォームの状態管理が難しく、入力内容に基づく他の処理をするのが難しくなります。
    バリデーションや入力の変更が難しい: onChange イベントなどでリアルタイムのバリデーションや入力値の変更を行いたい場合、refでは難しくなります。
    Reactの流儀に従っていない: Reactでは、入力値を状態として管理することが推奨されており、ref を使うと React の「制御されたコンポーネント」の哲学から外れます。

どちらを選ぶべきか？

    制御されたコンポーネント（value と onChange） を使用するのが一般的には推奨されます。なぜなら、Reactの状態管理とレンダリングの仕組みを活かし、コンポーネントの一貫性とバグの防止に役立つからです。
    非制御コンポーネント（ref） は、フォームの状態管理が複雑になる場合や、パフォーマンスが最優先される場合（例えば、大量の入力フィールドがある場合）に使うと良いでしょう。

結論

    小さなフォームやシンプルなケース：value と onChange を使って制御されたコンポーネントを使う方が良い。
    フォームの状態管理が不要で、軽量化が求められる場合：ref を使って非制御コンポーネントにするのが良い。

一般的には、value と onChange を使う方法が推奨されることが多いです。
 */

// search and filter
import { useState, useEffect, useCallback, useRef } from 'react';

const optionArr = ['Original', 'Ascend', 'Descend'];
const ORIGINAL = 0;
const ASCEND = 1;
const DESCEND = 2;

const dataArr = [
  'apple',
  'peach',
  'banana',
  'cheese',
  'strawberry',
  'orange',
  'fish',
  'pork',
  'beaf',
  'beans',
  'chicken cold',
  'chicken hot',
  'chicken spicy',
];

export default () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [data, setData] = useState([...dataArr]);
  const [currentOption, setCurrentOption] = useState(ORIGINAL);

  const onClick = useCallback(() => {
    if (inputRef.current) {
      if (inputRef.current.value === '') {
        setData([...dataArr]);
        setCurrentOption(ORIGINAL);
      } else {
        const keyword = inputRef.current.value;
        const newData = [];

        for (const str of dataArr) {
          if (str.includes(keyword)) {
            newData.push(str);
          }
        }

        setData(newData);

        inputRef.current.value = '';
      }
    }
  }, []);

  const onChange = useCallback(
    (e: any) => {
      const selectId = parseInt(e.target.value);
      const newData = [...data];

      switch (selectId) {
        case ASCEND:
          newData.sort();
          break;
        case DESCEND:
          newData.sort().reverse();
          break;
        default:
          break;
      }

      setData(newData);
      setCurrentOption(selectId);
    },
    [data]
  );

  return (
    <>
      <div className="body">
        <div className="header">
          <input type="search" ref={inputRef} />
          <button onClick={onClick}>Search</button>
          <select value={currentOption} onChange={onChange}>
            {optionArr.map((v, i) => (
              <option value={i} key={i}>
                {v}
              </option>
            ))}
          </select>
        </div>
        <div className="footer">
          {data.map((v, i) => (
            <div key={i}>{v}</div>
          ))}
        </div>
      </div>
      <style></style>
    </>
  );
};
