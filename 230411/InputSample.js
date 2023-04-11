import React, {useState, useRef} from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const nameInput = useRef();
  const {name, nickname} = inputs; // 비구조화 할당을 통해 값 추출
  const onChange = (e) => {
    const {value, name} = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      //리액트 상태에서 객체를 수정해야 할 때에는 inputs[name] = value; 이런식으로 직접 수정하면 안됨. 이렇게 하면 값을 바꿔도 리렌더링 되지 않음.
      // 리액트에서 객체를 업데이트하게 될 때에는 기존 객체를 직접 수정하면 안되고, 새로운 객체를 만들어서, 새 객체에 변화를 주어야 됩니다.
      ...inputs, // spread 문법, 객체의 모든 내용을 펼쳐서 기존객체를 복사해줌.
      // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name='name'
        placeholder='이름'
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name='nickname'
        placeholder='닉네임'
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
