import React from 'react';

function Hello({color, name, isSpecial}) {
  return (
    <div style={{color}}>
      {/* {isSpecial ? <b>*</b> : null} */}
      {/* 삼항연산자 : isSpecial 값이 true 라면 <b>*</b> 를, 그렇지 않다면 null 을 보여주도록 했습니다*/}
      {/* 그러나 지금처럼 내용이 달라지는게 아닌 단순히 특정조건에 따라 보여주고 안보여주고 일땐 &&연산자가 더 간편 */}
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '회원님',
};
export default Hello;
