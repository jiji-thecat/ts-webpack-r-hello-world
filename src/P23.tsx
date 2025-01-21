import React from 'react';

export default function Formatter({ text, value, config }: { text: any; value: any; config: any }) {
  return (
    <>
      <div data-testid="text">{text}</div>
      <div data-testid="value">{value}</div>
      <div>{config.max}</div>
      <div>{config.min}</div>
    </>
  );
}
