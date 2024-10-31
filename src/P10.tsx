/**
 * Problem: Creating a Filtered To-Do List

Build a To-Do List with filtering capabilities using React.
Requirements

    Add To-Dos: Users can add a new To-Do item by typing into a text input and clicking the “Add” button.
    Toggle To-Do Completion: Each To-Do item should have a checkbox that allows the user to toggle between "completed" and "incomplete."
    Filter To-Do List:
        Add three filter buttons: “All,” “Completed,” and “Incomplete.” When clicked, these buttons filter the list to show all tasks, only completed tasks, or only incomplete tasks, respectively.
    Delete To-Dos: Each To-Do should have a “Delete” button to remove it from the list.

UI Requirements

    Display the list of To-Dos on the screen.
    Include an input field and an “Add” button at the top for adding new To-Dos.
    Place filter buttons (All, Completed, Incomplete) above the list to control which items are displayed.
    
    2024/10/31１時間で解けた。
 */

import { useState, useRef, useEffect, useCallback, InputHTMLAttributes } from 'react';

// array = [{check: true, summary: this is a todo}, {check: false, summary: todo second}];
// when all is pressed, list array
// when complete is pressed list only checked

interface TodoData {
  check: boolean;
  summary: string;
}

interface onClickDelete {
  id: number;
}

interface onClickTodo {
  isChecked: boolean;
  id: number;
}

const TodoComponent = ({
  data,
  onChangeCallback,
  onDeleteCallback,
  id,
}: {
  data: TodoData;
  onChangeCallback: ({ isChecked, id }: onClickTodo) => void;
  onDeleteCallback: ({ id }: onClickDelete) => void;
  id: number;
}) => {
  const { check, summary } = data;

  const onChange = useCallback(() => {
    onChangeCallback({ isChecked: !check, id });
  }, [onChangeCallback]);

  const onClickDelete = useCallback(() => {
    onDeleteCallback({ id });
  }, [onDeleteCallback]);

  return (
    <div className="todoItem">
      <input type="checkbox" onChange={onChange} checked={check} />
      {summary}
      <button onClick={onClickDelete}>Delete</button>
    </div>
  );
};

const BUTTONS = ['All', 'Completed', 'Incomplete'];
const FILTERS = { ALL: 0, COMPLETED: 1, INCOMPLETE: 2 };

export default () => {
  const [data, setData] = useState<(TodoData | null)[]>([]);
  const [filter, setFilter] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {}, []);

  const onClickSubmit = useCallback(() => {
    if (inputRef.current) {
      const newArr = [...data];
      newArr.push({ check: false, summary: inputRef.current.value });
      setData(newArr);
      inputRef.current.value = '';
    }
  }, [data]);

  const onClickTodo = useCallback(
    ({ isChecked, id }: onClickTodo) => {
      const arr = [...data];
      arr[id]!.check = isChecked;

      setData(arr);
    },
    [data]
  );

  const onClickFilter = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.getAttribute('data-val');
    setFilter(parseInt(value!));
  }, []);

  const onClickDelete = useCallback(
    ({ id }: onClickDelete) => {
      const newArr = [...data];
      newArr[id] = null;
      setData(newArr.filter((v) => v !== null));
    },
    [data]
  );

  return (
    <>
      <div className="body">
        <div className="header">
          <input type="text" ref={inputRef} />
          <button onClick={onClickSubmit}>Submit</button>
        </div>
        <div className="header buttons">
          {BUTTONS.map((v, idx) => (
            <button onClick={onClickFilter} data-val={idx} key={idx}>
              {v}
            </button>
          ))}
        </div>
        {data.map((v: any, idx: any) => {
          if (filter === FILTERS.COMPLETED && !v.check) {
            return null;
          } else if (filter === FILTERS.INCOMPLETE && v.check) {
            return null;
          }

          return (
            <TodoComponent
              data={v}
              onChangeCallback={onClickTodo}
              onDeleteCallback={onClickDelete}
              id={idx}
              key={idx}
            />
          );
        })}
      </div>
      <style>{`
        .body {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            height: 100vh;
            flex-direction: column;
        }
        button {
            margin-left: 6px;
        }
        .header.buttons {
            display: flex;
            justify-content: center;
            margin: 10px auto;
        }
        .todoItem {
            margin-top: 5px;
        }
        `}</style>
    </>
  );
};
