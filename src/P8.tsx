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

import { useState, useCallback, useEffect, useMemo } from 'react';

// create a map and pass it to QuizList then set id, value when clicked.
// when submit button pressed then compare data and map.
// calculate the score and show it below
// add reset button and clear map
const QuizList = ({ data, setAnsMap }: { data: any; setAnsMap: any }) => {
  const { title, options, id } = data;

  const onClick = useCallback((e: any) => {
    const val = e.target.getAttribute('data-val');
    setAnsMap((prev: any) => {
      prev.set(id, val);
      return prev;
    });
  }, []);

  return (
    <div className="quiz">
      <div className="title">{title}</div>
      <div className="options">
        {options.map((v: any, i: number) => (
          <button className="button" onClick={onClick} data-val={v} key={i}>
            {v}
          </button>
        ))}
      </div>
    </div>
  );
};

export default () => {
  const [data, setData] = useState<any>([]);
  const [ansData, setAnsData] = useState<any>([]);
  const [ansMap, setAnsMap] = useState(new Map());
  const [score, setScore] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await (await fetch('./assets/p8.json')).json();

        let ansDataArr = [];
        for (const v of data) {
          ansDataArr.push(v.answer);
        }
        setAnsData([...ansDataArr]);
        setData(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const onClickSubmit = useCallback(() => {
    let score = 0;
    ansMap.forEach((v, i) => {
      if (v === ansData[i]) {
        score++;
      }
    });

    setScore(score);
  }, [ansData, ansMap]);

  const onClickReset = useCallback(() => {
    setAnsMap(new Map());
    setScore(-1);
  }, []);

  return (
    <>
      <div className="body">
        <div className="upper">
          {data.map((v: any, id: any) => (
            <QuizList data={v} setAnsMap={setAnsMap} key={id} />
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
      `}</style>
    </>
  );
};
