import {useState} from 'react';

export default function Exercise2() {
  const [data2, setData2] = useState('');
  const [id, setId] = useState('');
  const [result1, setResult1] = useState(false);

  function loading() {
    setResult1('...loading');
  }
  async function fetchExercise2(id) {
    if (id) {
      const res = await fetch(`/api/users/${id}`);
      const data = await res.json();
      setResult1(false);

      return setData2(JSON.stringify(data, null, 4));
    }
    setData2('No User found, please an ID');
    setResult1(false);
  }

  return (
    <>
      <h2>Exercise 2</h2>
      <p>Example id: 627257b4461fbc9fe665a14e</p>
      <form>
        <label htmlFor="id">Enter id:</label>
        <input
          id="id"
          name="id"
          value={id}
          onChange={event => setId(event.target.value)}
          style={{marginBottom: '1em'}}
        />
      </form>
      <button
        onClick={() => {
          setResult1(true);
          loading();

          fetchExercise2(id);
        }}
      >
        Load example Data from api/users/[id]
      </button>
      <pre>{result1}</pre>
      <pre>{data2}</pre>
    </>
  );
}
