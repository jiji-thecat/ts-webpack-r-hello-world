/**
 * tab creation
 */

import React, { useState, useCallback } from 'react';

const tabArr = [
  { id: 0, title: 'Tab0', content: 'this is tab 0' },
  { id: 1, title: 'Tab1', content: 'this is tab 1' },
  { id: 2, title: 'Tab2', content: 'this is tab 2' },
];

export default () => {
  const [activeTab, setActiveTab] = useState(0);

  const onClick = useCallback((e: any) => {
    const id = e.target.getAttribute('data-id');
    setActiveTab(parseInt(id));
  }, []);

  return (
    <>
      <div className="body">
        <div className="header">
          {tabArr.map((v, i) => (
            <button className="button" onClick={onClick} data-id={v.id} key={i}>
              {v.title}
            </button>
          ))}
        </div>
        <div className="footer">{tabArr.find((v) => v.id === activeTab)!.content}</div>
      </div>
      <style>
        {`
        .body{
            display: flex;
            align-items: center;
            height: 100vh;
            flex-direction: column;
        }
        `}
      </style>
    </>
  );
};
