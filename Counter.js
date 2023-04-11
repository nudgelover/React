import react, {useState} from 'react';

function Counter() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  const xChange = (e) => {
    setX(e.target.value);
  };
  const yChange = (e) => {
    setY(e.target.value);
  };
  const add = () => {
    setZ(parseInt(x) + parseInt(y));
  };

  const sub = () => {
    setZ(parseInt(x) - parseInt(y));
  };

  return (
    <div>
      x : <input type='number' onChange={xChange} />
      <br />
      y : <input type='number' onChange={yChange} />
      <br />
      <h1>{z}</h1>
      <button style={{margin: '10px'}} type='button' onClick={add}>
        더하기
      </button>
      <button type='button' onClick={sub}>
        빼기
      </button>
    </div>
  );
}
export default Counter;
