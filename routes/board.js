let express = require('express');
let router = express.Router();
let commonDB = require('./commonDB');

/* GET home page. */

router.get('/', async function (req, res, next) {
  let sql = `select id,title,writer,contents,hit,date_format(wdate,'%Y-%m-%d') wdate from tb_board`;

  let results = await commonDB.mysqlRead(sql, []);

  res.render('board/board_list', {boardList: results});
});

router.use('/view/:id', async function (req, res, next) {
  let id = req.params.id;
  let sql = `select id,title,writer,contents,hit,date_format(wdate,'%Y-%m-%d') wdate from tb_board where id=${id}`;
  let results = await commonDB.mysqlRead(sql, []);
  res.render('board/board_view', {item: results[0], id});
  //                              //키, 값 (여기선 배열로 받아와야한다는 것을 기억하자!)
});

router.use('/write', function (req, res, next) {
  res.render('board/board_write');
});

router.use('/save', async function (req, res, next) {
  let title = req.body.title;
  let writer = req.body.writer;
  let contents = req.body.contents;
  let sql = ` INSERT INTO tb_board(title, writer, contents, wdate)
  VALUES('${title}','${writer}','${contents}',NOW());`;
  await commonDB.mysqlRead(sql, []);

  res.redirect('/board/');
});

router.use('/delete', async function (req, res, next) {
  console.log(req.body);
  let id = req.body['board-id'];
  let sql = `DELETE FROM tb_board WHERE id=${id}`;
  await commonDB.mysqlRead(sql, []);

  res.redirect('/board/');
});
module.exports = router;
