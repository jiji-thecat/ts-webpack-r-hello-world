/**
 * React Intermediate Challenge: Dynamic Form with Validation

Problem Statement:

Create a dynamic form component in React where users can add multiple input fields. Each input field represents a "tag" (like a category or keyword), and the form should allow the following functionalities:

    Add a New Tag: The user should be able to type a tag name in an input field and add it to a list of tags by pressing "Enter" or clicking an "Add" button.

    Remove a Tag: Each tag in the list should have a delete button that allows the user to remove it.

    Validation Rules:
        Tags must be unique, with no duplicates allowed in the list.
        Tags cannot be empty or whitespace.
        Limit the number of tags to 10.

    Submit the Form: The form should have a submit button that becomes enabled only when there is at least one valid tag in the list. When the form is submitted, log the list of tags to the console.

Requirements:

    Use functional components and React hooks (useState, useEffect).
    Do not use any libraries for form handling or validation.
    Render real-time feedback for validation errors (like "Tag cannot be empty," "Tag already exists," etc.).
 */

import { useState, useEffect, useMemo, useCallback, useRef } from 'react';

const ALERT_DUPULICATE = 'YOU CANNOT SUBMIT DUPULICATE TAG';
const ALERT_EMPTY = 'YOU CANNOT SUBIT EMPTY TAG';
const ALERT_LIMIT = 'YOUR TAG IS UP TO LIMIT';
const LIMIT = 10;
//
export default () => {
  const [data, setData] = useState(new Set());
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClickSubmit = useCallback(() => {
    if (inputRef.current) {
      if (data.size >= LIMIT) {
        alert(ALERT_LIMIT);
        return;
      }
      if (inputRef.current.value === '') {
        alert(ALERT_EMPTY);
        return;
      }
      if (data.has(inputRef.current.value)) {
        alert(ALERT_DUPULICATE);
        return;
      }

      const newData = new Set(data);
      newData.add(inputRef.current.value);
      setData(newData);
      inputRef.current.value = '';
    }
  }, [data]);

  const listItems = useMemo(() => {
    const list: string[] = [];
    data.forEach((v: any) => {
      list.push(v);
    });
    return list;
  }, [data]);

  const onClickTag = useCallback(
    (e: any) => {
      const tag = e.target.getAttribute('data-tag');
      if (data.has(tag)) {
        const newData = new Set(data);
        newData.delete(tag);
        setData(newData);
      }
    },
    [data]
  );

  return (
    <>
      <div className="body">
        <div className="header">
          <input ref={inputRef}></input>
          <button onClick={onClickSubmit}>Add</button>
        </div>
        <div className="footer">
          {listItems.map((v, idx) => (
            <div className="tag" onClick={onClickTag} data-tag={v} key={idx}>
              {v}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .body{
            display: flex;
            height: 100vh;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
        }
        .header {
            margin-top: 10px;
        }
        .footer {
            display: flex;
            flex-direction: row;
            margin-top: 10px;
        }
        .tag {
            margin-right: 10px;
            padding: 8px;
            border: 1px solid gray;
            background-color: aqua;
        }
      `}</style>
    </>
  );
};
