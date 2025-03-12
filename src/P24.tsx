import React, { useState, useCallback } from 'react';

const employee = [
  { id: 0, name: 'Yamada', position: 'Engineer', salary: 1000 },
  { id: 1, name: 'Sato', position: 'HR', salary: 2000 },
  { id: 2, name: 'Tanaka', position: 'CTO', salary: 3000 },
];

const AddComponent = () => {
  return (
    <tr>
      <td>
        <input type="text"></input>
      </td>
      <td>
        <input type="text"></input>
      </td>
      <td>
        <input type="number"></input>
      </td>
      <button>Save</button>
    </tr>
  );
};

const RowComponent = ({ name, position, salary }: { name: string; position: string; salary: number }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{position}</td>
      <td>
        {salary}
        <input type="number"></input>
      </td>

      <button>Save</button>
    </tr>
  );
};

export default () => {
  const [data, setData] = useState(employee);

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
              <RowComponent key={id} name={v.name} position={v.position} salary={v.salary} />
            ))}
            <AddComponent />
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
