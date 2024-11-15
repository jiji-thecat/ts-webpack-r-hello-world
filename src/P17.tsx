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
