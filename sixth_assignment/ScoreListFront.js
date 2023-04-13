//백엔드서버로 부터 데이터 가져온다
//axios 설치 필요 npm install axios
import React, {useState, useEffect} from 'react';
import axios from 'axios';
function ScoreListFront() {
  const [studendtList, setStudendtList] = useState([]);
  //useState함수가 값을 초기화를 해주면 해당 값을 저장할 변수와 해당값을 변경하는 함수를 반환함, [] -> 배열을 저장할 변수반환, 배열값을 변환할 함수주소
  //첫번째 매개변수 - mount 될때, update 될때, unmount 될때 호출된다
  //[]- 변수: 변수들이 바뀔 때 호출된다
  const [loading, setLoading] = useState(false); //데이터를 수신하면 true로 바뀐다.

  useEffect(() => {
    //서버에서 데이터를 불러온다.
    axios
      .get('http://localhost:9090/score/list')
      .then((res) => {
        setStudendtList(res.data);
        setLoading(true);
      })
      .catch((res, status, error) => {
        console.log(status);
      });
  }, []);

  const onDelete = (e, index) => {
    e.preventDefault();
    axios
      .post('http://localhost:9090/score/delete', {
        id: studendtList[index].id,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <table>
        <tr>
          <td>번호</td>
          <td>이름</td>
          <td>국어</td>
          <td>영어</td>
          <td>수학</td>
          <td>총점</td>
          <td>평균</td>
        </tr>
        {loading === true
          ? studendtList.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td> {/* index따로주기 */}
                  <td>{item.stu_name}</td>
                  <td>{item.kor}</td>
                  <td>{item.eng}</td>
                  <td>{item.mat}</td>
                  <td>
                    {parseInt(item.kor) +
                      parseInt(item.eng) +
                      parseInt(item.mat)}
                  </td>
                  <td>
                    {(
                      (parseInt(item.kor) +
                        parseInt(item.eng) +
                        parseInt(item.mat)) /
                      3
                    ).toFixed(2)}
                  </td>
                  <td>
                    <button onClick={(e) => onDelete(e, index)}>delete</button>
                  </td>
                </tr>
              );
            })
          : ''}
      </table>
    </>
  );
}

export default ScoreListFront;
