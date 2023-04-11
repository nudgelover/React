import React from 'react';

function User({user}) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}
function UserList() {
  const cust = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ];

  return (
    <div>
      {cust.map((user) => (
        <User user={user} key={user.id} />
        //리액트에서 배열을 렌더링 할 때에는 key 라는 props 를 설정해야합니다. key 값은 각 원소들마다 가지고 있는 고유값으로 설정을 해야합니다. 지금의 경우엔 id 가 고유 값이지요.
        //key={index} 없어도 작동은 되는데 콘솔에 warning 뜸.
        //key 필요한 이유 사진에 잘 나와있음....
      ))}
    </div>
  );
}
export default UserList;
