// express 가져오기
const express = require('express');
// express를 사용한 app 선언
const app = express();

// 익스프레스의 라우팅 예시

// app.get('/', (req, res) => {
//   res.send('hello world !');
// });

// app.get('/about', (req, res) => {
//   res.send('this is all about express !');
// });

// 익스프레스 미들웨어 예시

const checkAuth = (req, res, next) => {
  console.log('she has admin permission !');
  next();
};

const token = 'token이에요!';

const checkToken = (req, res, next) => {
  if (token) {
    next();
  } else {
    res.send("you don't have token");
  }
};

const getUser = (req, res) => {
  console.log('here is user info !');
  res.send('here is user info !');
};

app.get('/users', checkAuth, checkToken, getUser);

// 포트 열어주자
app.listen(5000, () => {
  console.log('server is on 5000');
});
