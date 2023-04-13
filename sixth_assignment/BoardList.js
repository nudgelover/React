import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 라이브러리
import {Link} from 'react-router-dom';
import axios from 'axios';
import {SERVERIP} from '../../CommonUtil';

function BoardList() {
  const [boardList, setBoardList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const url = SERVERIP + '/boardlist/list';
      await axios
        .get(url)
        .then((res) => {
          setBoardList(res.data);
          setLoading(false);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    loadData();
  }, []);

  return (
    <div className='container mt-3'>
      <div className='container' style={{marginTop: '80px'}}>
        <h2>게시판 목록{SERVERIP}</h2>

        <div className='input-group mb-3' style={{marginTop: '20px'}}>
          <button
            type='button'
            className='btn btn-warning dropdown-toggle bg-warning'
            data-bs-toggle='dropdown'
          >
            선택하세요
          </button>
          <ul className='dropdown-menu '>
            <li>
              <a className='dropdown-item' href='#'>
                제목
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                내용
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                제목+내용
              </a>
            </li>
          </ul>
          <input type='text' className='form-control' placeholder='Search' />
          <button className='btn btn-secondary' type='submit'>
            Go
          </button>
        </div>

        <table className='table table-hover ' style={{textAlign: 'center'}}>
          <thead className='table-secondary'>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>조회수</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <b>Loading...</b>
            ) : (
              boardList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <Link to={'/board/view/' + item.id}>{item.title}</Link>
                    </td>
                    <td>{item.user_id}</td>
                    <td>{item.hit}</td>
                    <td>{item.wdate}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        <ul className='pagination  justify-content-center'>
          <li className='page-item disabled '>
            <a className='page-link' href='#'>
              first
            </a>
          </li>
          <li className='page-item disabled'>
            <a className='page-link' href='#'>
              Previous
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              1
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              2
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              3
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              4
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              5
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              Next
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              last
            </a>
          </li>
        </ul>

        <div
          className='container mt-3'
          style={{display: 'flex', justifyContent: 'right'}}
        >
          <Link to='/board/write' className='btn btn-warning'>
            글쓰기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BoardList;
