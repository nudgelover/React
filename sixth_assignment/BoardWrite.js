import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 라이브러리
import {Link, useNavigate, useParams, useLocation} from 'react-router-dom';
import axios from 'axios';
import {SERVERIP} from '../../CommonUtil';

function BoardWrite() {
  let {id} = useParams(); //보내는 쪽에서 json 객체로 보냄
  let history = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [user_id, setUserId] = useState('');
  const [contents, setContents] = useState('');

  useEffect(() => {
    console.log('id', id);

    async function loadData(id) {
      let results = await axios.get(SERVERIP + '/boardlist/view/' + id);
      setTitle(results.data.boardlist.title);
      setUserId(results.data.boardlist.user_id);
      setContents(results.data.boardlist.contents);
    }
    if (id !== 'undifined') loadData(id); //write가 아니고 view를 호출할 때
    //boardWrite 컴포넌트가 /board/write 일때는 undefined 가 오고 board/view/1 id에는 파라미터 값이 저장된다.
  }, []);

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const userIdChange = (e) => {
    setUserId(e.target.value);
  };
  const contentsChange = (e) => {
    setContents(e.target.value);
  };

  const postData = () => {
    const data = {title: title, user_id: user_id, contents: contents};
    const url = SERVERIP + '/boardlist/save';
    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        history('/board');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // 여기서 업데이트를 할때 id 값이 안들어옴
  const updateData = () => {
    const data = {title: title, id: id, contents: contents};
    const url = SERVERIP + '/boardlist/update';
    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        history('/board');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const currentPath = location.pathname;

  // 경로에 따라 제목을 설정합니다.
  let pageTitle;
  let btnTitle;
  if (currentPath === '/board/write') {
    pageTitle = '게시판 쓰기';
    btnTitle = (
      <Link
        style={{marginLeft: '10px'}}
        className='btn btn-warning'
        onClick={postData}
      >
        등록
      </Link>
    );
  } else if (currentPath.includes('/board/write/')) {
    pageTitle = '게시판 수정';
    btnTitle = (
      <Link
        style={{marginLeft: '10px'}}
        className='btn btn-warning'
        onClick={updateData}
      >
        수정
      </Link>
    );
  }

  return (
    <div>
      <div className='container' style={{marginTop: '80px'}}>
        {/* 주소가 /board/write * 일때는 개시판 쓰기/
      /board/write/id 인 경우에는 게시판 수정*/}

        {/* 가져온 제목을 출력합니다. */}
        <h2>{pageTitle}</h2>

        <table className='table table-hover ' style={{marginTop: '20px'}}>
          <tbody>
            <tr>
              <td>제목</td>
              <td>
                <div className='mb-3' style={{marginTop: '13px'}}>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='제목을 입력하세요'
                    value={title}
                    onChange={titleChange}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>작성자</td>
              <td>
                <div className='mb-3' style={{marginTop: '13px'}}>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='이름을 입력하세요'
                    value={user_id}
                    onChange={userIdChange}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <div className='mb-3' style={{marginTop: '13px'}}>
                  <textarea
                    className='form-control'
                    rows='5'
                    onChange={contentsChange}
                    value={contents}
                  ></textarea>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          className='container mt-3'
          style={{display: 'flex', justifyContent: 'right'}}
        >
          <Link to='/board' className='btn btn-warning'>
            돌아가기
          </Link>
          &nbsp;
          {btnTitle}
        </div>
      </div>
    </div>
  );
}

export default BoardWrite;
