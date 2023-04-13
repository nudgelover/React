import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 라이브러리
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import {SERVERIP} from '../../CommonUtil';

function BoardView() {
  let {id} = useParams(); //보내는 쪽에서 json 객체로 보냄
  const [title, setTitle] = useState('');
  const [user_id, setUserId] = useState('');
  const [contents, setContents] = useState('');
  const [hit, setHit] = useState('');
  const [wdate, setWdate] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData(id) {
      const url = SERVERIP + '/boardlist/view/' + id;
      await axios
        .get(url)
        .then((res) => {
          setTitle(res.data.boardlist.title);
          setUserId(res.data.boardlist.user_id);
          setContents(res.data.boardlist.contents);
          setHit(res.data.boardlist.hit);
          setWdate(res.data.boardlist.wdate);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    loadData(id);
  }, []);

  return (
    <div className='container' style={{marginTop: '80px'}}>
      <h2>게시판 상세보기</h2>

      <table className='table table-hover ' style={{marginTop: '30px'}}>
        {loading ? (
          <b>Loading...</b>
        ) : (
          <tbody>
            <tr className='table-secondary'>
              <th>제목</th>
              <td colspan='5'>{title}</td>
            </tr>
            <tr>
              <th>작성자</th>
              <td>{user_id}</td>
              <th>작성일</th>
              <td>{wdate}</td>
              <th>조회수</th>
              <td>{hit}</td>
            </tr>
            <tr>
              <td colspan='6' className='table-secondary'>
                내용
              </td>
            </tr>
            <tr>
              <td colspan='6'>{contents}</td>
            </tr>
          </tbody>
        )}
      </table>

      <div
        className='container mt-3'
        style={{display: 'flex', justifyContent: 'right'}}
      >
        <Link to='/board' className='btn btn-warning'>
          돌아가기
        </Link>
        <Link
          to={`/board/write/${id}`}
          style={{marginLeft: '10px'}}
          className='btn btn-warning'
        >
          수정하기
        </Link>
      </div>
    </div>
  );
}

export default BoardView;
