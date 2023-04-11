import React, {useState} from 'react';

function Counter() {
  const [number, setNumber] = useState(0);
  // useState 를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출해줌
  // 이 함수를 호출해주면 배열이 반환되는데,
  // 여기서 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수
  const onIncrease = () => {
    //setNumber(number + 1);
    //이걸 함수형으로 바꿔보자
    setNumber((prevNumber) => prevNumber + 1);
  };
  const ondecrease = () => {
    //setNumber(number - 1);
    setNumber((prevNumber) => prevNumber - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={ondecrease}>-1</button>
    </div>
  );
}
export default Counter;
