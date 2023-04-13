var express = require('express');
var router = express.Router();
let commonDB = require('./commonDB');
/* GET home page. */
router.get('/list', async function (req, res, next) {
  let sql = `SELECT id,stu_name,kor,eng,mat FROM score 
  `;
  let results = await commonDB.mysqlRead(sql, []);
  res.json(results);
});

router.post('/save', async function (req, res, next) {
  try {
    let stu_name = req.body.stu_name;
    let kor = req.body.kor;
    let eng = req.body.eng;
    let mat = req.body.mat;

    let sql = `  INSERT INTO score(stu_name,kor,eng,mat)
              VALUES(?,?,?,?)`;

    await commonDB.mysqlRead(sql, [stu_name, kor, eng, mat]);
    res.json({result: 'success'});
  } catch (e) {
    console.log(e);
    res.json({result: 'fail'});
  }
});

router.use('/delete', async function (req, res, next) {
  try {
    let id = req.body.id;
    let sql = `DELETE FROM score WHERE id=${id}`;
    await commonDB.mysqlRead(sql, []);
    res.json({result: 'success'});
  } catch (e) {
    console.log(e);
    res.json({result: 'fail'});
  }
});
module.exports = router;
