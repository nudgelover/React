import react, {useState} from 'react';

function Score() {
  const [name, setName] = useState('');
  const [kor, setKor] = useState(0);
  const [eng, setEng] = useState(0);
  const [mat, setMat] = useState(0);
  const [sum, setSum] = useState(0);
  const [avg, setAvg] = useState(0);

  const nameCng = (e) => {
    setName(e.target.value);
  };
  const korCng = (e) => {
    setKor(e.target.value);
  };
  const engCng = (e) => {
    setEng(e.target.value);
  };
  const matCng = (e) => {
    setMat(e.target.value);
  };

  const cal = () => {
    setSum(parseInt(kor) + parseInt(eng) + parseInt(mat));
    setAvg((parseInt(kor) + parseInt(eng) + parseInt(mat)) / 3);
  };

  const reset = () => {
    setName('');
    setKor('');
    setMat('');
    setEng('');
    setSum(0);
    setAvg(0);
  };

  return (
    <div>
      이름 : <input type='text' value={name} onChange={nameCng} />
      <br />
      국어 : <input type='number' value={kor} onChange={korCng} />
      <br />
      영어 : <input type='number' value={eng} onChange={engCng} />
      <br />
      수학 : <input type='number' value={mat} onChange={matCng} />
      <br />
      <br />
      <button style={{margin: '10px'}} type='button' onClick={cal}>
        결과 확인
      </button>
      <button type='button' onClick={reset}>
        초기화
      </button>
      <p>
        {name}님의 합계는 {sum}이고 평균은{avg}입니다.
      </p>
    </div>
  );
}
export default Score;
