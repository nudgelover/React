var express = require('express');
var router = express.Router();

router.use('/score', function (req, res, next) {
  res.render('ajax/score');
});

router.use('/cal', function (req, res, next) {
  sname = req.query.sname;
  kor = parseInt(req.query.kor);
  eng = parseInt(req.query.eng);
  mat = parseInt(req.query.mat);
  sum = kor + eng + mat;
  avg = sum / 3;

  res.json({sum: sum, avg: avg});
  //res.send(`${sname}님의 총점은 ${sum}점이고 평균은 ${avg}점 입니다.`);
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('score');
});

module.exports = router;
