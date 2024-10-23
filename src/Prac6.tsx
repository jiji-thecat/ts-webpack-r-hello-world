import { useState, useRef, useEffect, useCallback } from 'react';

const ButtonComponent = ({ name }: { name: string }) => {
  return (
    <>
      <button>{name}</button>
      <style>{`
                    .blue {
                        background-color: blue;
                    }
                    .red {
                        background-color: red;
                    }
                `}</style>
    </>
  );
};

export default function CountryCapitalGame({}) {
  const data: any = { Germany: 'berlin', Japan: 'Tokyo' };

  const [country, setCountry] = useState<string[]>([]);
  const [capital, setCapital] = useState<string[]>([]);

  useEffect(() => {
    const countryArr = [];
    const capitalArr = [];

    for (const prop in data) {
      countryArr.push(prop);
      capitalArr.push(data[prop]);
    }

    setCountry(countryArr);
    setCapital(capitalArr);
  }, []);

  return country
    .map((val) => <ButtonComponent name={val} />)
    .concat(capital.map((val) => <ButtonComponent name={val} />));
}
// You can also use class components
// export default class CountryCapitalGame extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return <div>Your game component</div>;
//     }
// }
