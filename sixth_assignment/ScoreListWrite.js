import React, {useState} from 'react';
import axios from 'axios';
function ScoreListWrite() {
  const [stu_name, setStuName] = useState('');
  const [kor, setKor] = useState('');
  const [eng, seteng] = useState('');
  const [mat, setmat] = useState('');

  const stuNameChange = (e) => {
    setStuName(e.target.value);
  };

  const korChange = (e) => {
    setKor(e.target.value);
  };
  const engChange = (e) => {
    seteng(e.target.value);
  };
  const matChange = (e) => {
    setmat(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:9090/score/save', {
        stu_name: stu_name,
        kor: kor,
        eng: eng,
        mat: mat,
      })
      .then((res) => {
        console.log(res.data.result);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>성적 계산기</h3>
        이름 : <input type='text' onChange={stuNameChange}></input>
        <br />
        국어: <input type='number' onChange={korChange}></input>
        <br />
        영어: <input type='number' onChange={engChange}></input>
        <br />
        수학: <input type='number' onChange={matChange}></input>
        <br />
        <button>추가</button>
      </form>
    </div>
  );
}
export default ScoreListWrite;
