function showMessage(text) {
  //   if (text == undefined) {
  //     text = '반갑습니다.';
  //   }  => 이렇게 하기 보단 아래처럼 하자
  text = text || '반값습니다.';
  console.log(text);
}
showMessage(); //undefind
showMessage('안녕하세요?');
