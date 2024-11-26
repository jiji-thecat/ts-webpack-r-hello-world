/**
 * ### React Challenge: "Auto-Save Notes with Search and Filter"

**Objective**  
Create a note-taking component in React where users can add, edit, and delete notes. Each note should auto-save to `localStorage` after every edit, and users should be able to search and filter through their notes.

**Requirements**
1. **Note-Taking Functionality**:
   - Implement a form where users can add a new note with a title and content.
   - Each note should be editable, and any edits should be saved automatically to `localStorage`.
   - Allow users to delete notes.

2. **Auto-Save**:
   - The application should save each note to `localStorage` immediately after it’s created or edited.
   - When the page is refreshed, notes should persist by loading from `localStorage`.

3. **Search and Filter**:
   - Implement a search bar that filters notes based on the content of the note or the title.
   - Users should be able to filter notes by creation date or edit date in ascending or descending order.

4. **Clear All**:
   - Provide a "Clear All" button to delete all notes from both the UI and `localStorage`.

5. **Component Structure**:
   - Use multiple components (e.g., `Note`, `NoteList`, `NoteEditor`) to keep the code modular.

**Design Constraints**:
- Use only React hooks (`useState`, `useEffect`) for managing state and persistence with `localStorage`.
- Do not use any external libraries except for basic styling if desired.

**Bonus Challenge**  
Implement an "Undo" feature that allows the user to undo the last deletion.

creation | search

tab = ["creation", "search"]


- creation page
-- input area title
-- inpute area content
-- post button

- data(title, content, date)
- json to string

- search page
-- date filter asc, dsc
-- edit each note(input)
-- clear all button
-- get the note list from local storage render each from list

 */

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

const TABS = ['Create', 'Search'];
const CREATE_TAB = 0;
const SEARCH_TAB = 1;

const SearchComponent = () => {
  return <>SearchComponent</>;
};

//const dataArr = [{ date: '', title: '', content: '' }];
// Save it on localstorage
const CreateComponent = () => {
  const [data, setData] = useState<string>(localStorage.getItem('data') ?? '[]');
  const inputTitleRef = useRef<HTMLInputElement | null>(null);
  const inputContentRef = useRef<HTMLInputElement | null>(null);

  const onClickPost = useCallback(() => {
    if (inputTitleRef.current && inputContentRef.current) {
      const date = new Date();
      const newData = {
        date: date.getTime(),
        title: inputTitleRef.current.value,
        content: inputContentRef.current.value,
      };

      /*      const currentData = JSON.parse(data).push(newData);
      localStorage.setItem('data', JSON.stringify(currentData));
      setData(currentData);
      */
    } else {
      return;
    }

    inputTitleRef.current.value = '';
    inputContentRef.current.value = '';
  }, []);

  return (
    <div className="createBody">
      <input ref={inputTitleRef} className="input title"></input>
      <input ref={inputContentRef} className="input content"></input>
      <button onClick={onClickPost}>Post</button>
    </div>
  );
};

export default () => {
  const [tabs, setTabs] = useState([]);
  const [selectTab, setSelectTab] = useState(0);

  const ContentComponent = useMemo(() => {
    switch (selectTab) {
      case SEARCH_TAB:
        return <SearchComponent />;
      case CREATE_TAB:
      default:
        return <CreateComponent />;
    }
  }, [selectTab]);

  const onClickPost = useCallback((e: any) => {
    const index = e.target.getAttribute('data-index');
    setSelectTab(parseInt(index));
  }, []);

  //  console.log(localStorage.getItem('data'));
  return (
    <>
      <div className="body">
        <div className="header">
          {TABS.map((v, i) => (
            <button onClick={onClickPost} key={i} data-index={i}>
              {v}
            </button>
          ))}
        </div>
        <div className="footer">{ContentComponent}</div>
      </div>
      <style>
        {`
            .body {
               display: flex;
               flex-direction: column;
               height: 100vh;
            }
            .header {
            }
         `}
      </style>
    </>
  );
};
