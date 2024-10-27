/**
 * 
### **Create a Quiz App with React**

**App Objective**: Create an interactive quiz application where users can select answers to multiple-choice questions. At the end of the quiz, users see their score, which they can reset to try the quiz again.

#### Requirements:

1. **Display Questions and Answers**:
   - Render a series of multiple-choice questions (you can hardcode 3-5 questions for simplicity).
   - Each question should have 3-4 answer options in button form.

2. **Select an Answer**:
   - When an answer button is clicked, highlight it to show selection.
   - The user should only be able to select one answer per question.

3. **Submit and Score**:
   - After answering all questions, the user can submit the quiz.
   - Show the user's score, calculated by comparing their answers with correct ones.

4. **Reset Quiz**:
   - Include a "Reset" button to allow the user to retake the quiz.
   - Reset should clear all selected answers and score.

#### Optional Features:

1. **Review Mode**:
   - After finishing the quiz, allow users to see which questions they got wrong.

2. **Timer for Each Question**:
   - Add a timer to limit the time users have to answer each question (e.g., 30 seconds per question).

 */

import { useState, useCallback, useEffect, useMemo, useRef } from 'react';

// count from TIME to 0
// When button is pressed then reset to default
const Timer = ({ duration, id, timerCallback }: { duration: number; id: number; timerCallback: () => void }) => {
  const [time, setTime] = useState(duration);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      timerCallback();
      setTime(duration);
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev <= 0 && intervalRef.current) {
            clearInterval(intervalRef.current);
            timerCallback();
            return 0;
          }

          return prev - 1000;
        });
      }, 1000);
    }
  }, [id]);

  return <div className="timer">{time / 10 ** 3} sec / quiz</div>;
};

// create a map and pass it to QuizList then set id, value when clicked.
// when submit button pressed then compare data and map.
// calculate the score and show it below
// add reset button and clear map
const QuizList = ({
  data,
  selectAnsArr,
  setSelectAnsArr,
  isSubmit,
}: {
  data: any;
  selectAnsArr: number[];
  setSelectAnsArr: any;
  isSubmit: boolean;
}) => {
  const { title, options, id, answer } = data;

  const onClick = useCallback((e: any) => {
    const val = e.target.getAttribute('data-key');

    setSelectAnsArr((prev: any) => {
      let newArr = [...prev]; // immutable を保持するために、object stateを更新する場合は新しく作り直す。{...prev, foo: hoge} のように。
      newArr[id] = parseInt(val);
      return newArr;
    });
  }, []);

  return (
    <div className="quiz">
      <div className="title">{title}</div>
      <div className="options">
        {options.map((v: any, i: number) => {
          let className = 'button';
          className += selectAnsArr[id] === i ? ' clicked' : '';
          return (
            <button className={className} onClick={onClick} data-key={i} key={i}>
              {v}
            </button>
          );
        })}
      </div>
      {isSubmit && selectAnsArr[id] !== answer && <div className="answer">{options[answer]}</div>}
    </div>
  );
};

export default () => {
  /**
   * {id: 0, title: "what is .."}
   */
  const [data, setData] = useState<any>([]);
  // ansData = [1, 1, 2, 3...]
  const [ansData, setAnsData] = useState<any>([]);
  // selectAnsArr = [-1, -1, 4, 5];
  const [selectAnsArr, setSelectAnsArr] = useState<number[]>([]);
  const [score, setScore] = useState(-1);
  //  const [falseIdArr, setFalseIdArr] = useState<number[]>([]);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await (await fetch('./assets/p8.json')).json();

        let ansDataArr = [];
        for (const v of data) {
          ansDataArr.push(v.answer);
        }
        setAnsData([...ansDataArr]);
        setSelectAnsArr(new Array(data.length).fill(-1));
        setData(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const onClickSubmit = useCallback(() => {
    let score = 0;
    selectAnsArr.forEach((v, i) => {
      if (v === ansData[i]) {
        score++;
      }
    });

    setScore(score);
    setIsSubmit(true);
  }, [ansData, selectAnsArr]);

  const onClickReset = useCallback(() => {
    setSelectAnsArr(new Array(data.length).fill(-1));
    setScore(-1);
    setIsSubmit(false);
  }, []);

  return (
    <>
      <div className="body">
        <div className="upper">
          {data.map((v: any, id: any) => (
            <QuizList
              data={v}
              selectAnsArr={selectAnsArr}
              setSelectAnsArr={setSelectAnsArr}
              isSubmit={isSubmit}
              key={id}
            />
          ))}
        </div>
        <div className="footer">
          <button className="button submit" onClick={onClickSubmit}>
            Submit
          </button>
          <button className="button reset" onClick={onClickReset}>
            Reset
          </button>
        </div>
        {score >= 0 && (
          <div className="score">
            {score}/{data.length}
          </div>
        )}
      </div>
      <style>{`
         .body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
         }
         .upper {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
         }
         .button {
            margin-left: 10px;
         }
         .button.clicked {
            background-color: aqua;
         }
         .button.notClicked {
            pointer-events: none;
         }
         .quiz {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
         }
         .footer {
            margin-bottom: 10px;
         }
         .score {
            font-size: xx-large;
            font-weight: bold;
         }
         .answer {
            margin-left: 10px;
            font-size: 27px;
            color: red;
         }
      `}</style>
    </>
  );
};
