import {useState} from 'react';

export default function Exercise1() {
  const [data1, setData1] = useState('');
  const [result1, setResult1] = useState(false);

  async function fetchExercise1() {
    const res = await fetch('/api/users');
    const data = await res.json();
    setData1(JSON.stringify(data, null, 4));
    setResult1(false);
  }
  function loading() {
    setResult1('...loading');
  }
  return (
    <>
      <h2>Exercise 1</h2>
      <button
        onClick={() => {
          setResult1(true);
          loading();
          fetchExercise1();
        }}
      >
        Load all Users from example data by api/users
      </button>
      <pre>{result1}</pre>
      <pre>{data1}</pre>
    </>
  );
}
