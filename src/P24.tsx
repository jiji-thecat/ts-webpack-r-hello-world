import React, { useState, useCallback, useEffect, useMemo } from 'react';

const employee = [
  { id: 0, name: 'Yamada', position: 'Engineer', salary: 1000 },
  { id: 1, name: 'Sato', position: 'HR', salary: 2000 },
  { id: 2, name: 'Tanaka', position: 'CTO', salary: 3000 },
];

const AddComponent = ({
  onUpdateData,
}: {
  onUpdateData: ({ name, position, salary }: { name: string; position: string; salary: string }) => void;
}) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');

  const isSaveDisabled = useMemo(() => name === '' || position === '' || salary === '', [name, position, salary]);

  const onChangeName = (e: any) => {
    setName(e.target.value);
  };

  const onChangePosition = (e: any) => {
    setPosition(e.target.value);
  };

  const onChangeSalary = (e: any) => {
    setSalary(e.target.value);
  };

  const onClickSave = () => {
    onUpdateData({ name, position, salary });
    setName('');
    setPosition('');
    setSalary('');
  };

  return (
    <tr>
      <td>
        <input type="text" value={name} onChange={onChangeName}></input>
      </td>
      <td>
        <input type="text" value={position} onChange={onChangePosition}></input>
      </td>
      <td>
        <input type="number" value={salary} onChange={onChangeSalary}></input>
      </td>
      <td>
        <button disabled={isSaveDisabled} onClick={onClickSave}>
          Save
        </button>
      </td>
    </tr>
  );
};

/**
 * 子では、一部を更新するだけ、なので、見た目のstateとかそういうのを管理する。
 * データその物を更新する場合は親の関数を呼び出す。
 */

const RowComponent = ({
  name,
  id,
  position,
  salary,
  updateSalary,
}: {
  name: string;
  id: number;
  position: string;
  salary: number;
  updateSalary: (id: number, salary: number) => void;
}) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);
  const [salaryInput, setSalaryInput] = useState(salary);

  const onClickSalary = () => {
    setIsInputVisible(true);
  };

  const onClickSave = () => {
    updateSalary(id, salaryInput);
    setIsInputVisible(false);
    setIsSaveDisabled(true);
  };

  const onChangeSalaryInput = (e: any) => {
    const newSalary = e.target.value;
    setSalaryInput(newSalary);

    if (newSalary && parseInt(newSalary) !== salary) {
      setIsSaveDisabled(false);
    } else {
      setIsSaveDisabled(true);
    }
  };

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{position}</td>
        <td onClick={onClickSalary}>
          {!isInputVisible && salary}
          {isInputVisible && <input type="number" value={salaryInput} onChange={onChangeSalaryInput}></input>}
        </td>
        <td>
          <button disabled={isSaveDisabled} onClick={onClickSave}>
            Save
          </button>
        </td>
      </tr>
    </>
  );
};

interface dataObject {
  id: number;
  name: string;
  position: string;
  salary: number;
}

/**
 * idを使ってデータを更新する。親で。
 */
export default () => {
  const [data, setData] = useState<dataObject[]>(employee);

  const updateSalary = (id: number, salary: number) => {
    const newData = [...data];
    const current = newData.find((v) => v.id === id);
    current!.salary = salary;

    setData(newData);
  };

  const onUpdateData = ({ name, position, salary }: { name: string; position: string; salary: string }) => {
    const newData = [...data, { id: data.length, name, position, salary: parseInt(salary) }];
    setData(newData);
  };

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {data.map((v, id) => (
              <RowComponent
                key={id}
                id={v.id}
                name={v.name}
                position={v.position}
                salary={v.salary}
                updateSalary={updateSalary}
              />
            ))}
            <AddComponent onUpdateData={onUpdateData} />
          </tbody>
        </table>
      </div>
      <style>
        {`
            .body {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                height: 100vh;
            }
            table, th, td {
                border: 1px solid;
            }
        `}
      </style>
    </>
  );
};
