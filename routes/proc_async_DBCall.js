var express = require('express');
var router = express.Router();

var pool = require('../mysql/_Mysql').init();
var async = require('async');

/* GET home page. */
router.post('/insertscore', function(req, res, next) {
    var id = req.body.user_id;
    var reg_date = req.body.regdate;
    var score = req.body.score;
    console.log(id + ','+reg_date + ',' + score);
    try {
        pool.query('CALL InsertScoreIndividual(?,?,?,?)',[id, score,reg_date,0], function(err,rows,fields){
            if(err) {
                res.send({ret: -1});
                return;
            }

            res.send({ret: 0, id:id });
        });
    }
    catch(err) {
        res.send({ret: -1});
    }
});

router.post('/loadscore', function(req, res, next) {
    var id = req.body.user_id;
    var list = [];
    //console.log(id + ','+reg_date + ',' + score);
    try {
        pool.query("select DATE_FORMAT(regdate,'%Y-%m-%d') as regdate, id, score, place, sn from record_individual where id = '" + id + "' order by regdate desc, sn",function(err,rows,fields){
            if(err) {
                res.send({ret: -1});
                return;
            }

            for( var i = 0 ; i < rows.length ; ++i) {
                list.push({name:rows[i].id, regdate:rows[i].regdate, score:rows[i].score, place:rows[i].place, sn: rows[i].sn });
            }
            res.send({ret: 0, id:id, list:list });
        });
    }
    catch(err) {
        res.send({ret: -1});
    }
});

router.post('/deletescore', function(req, res, next) {
    var sn = req.body.score_sn;
    console.log('!!!!!');
    //console.log(id + ','+reg_date + ',' + score);
    try {
        pool.query("delete from record_individual where sn = '" + sn + "'",function(err,rows,fields){
            if(err) {
                res.send({ret: -1});
                return;
            }

            res.send({ret: 0 });
        });
    }
    catch(err) {
        res.send({ret: -1});
    }
});

router.post('/select_club_bowl_date', function(req, res, next) {
    var date = req.body.s_date;
    // date Çü½ÄÀº '2017-08-28'
    var list = [];
    try {
        pool.query("select a.name, avg(score) score from record r, account a where r.id = a.id and DATE_FORMAT(regdate, '%Y-%m-%d') = '"+ date +"' group by a.name order by score desc, a.id",function(err,rows,fields){
            if(err) {
                res.send({ret: -1});
                return;
            }

            for( var i = 0 ; i < rows.length ; ++i) {
                list.push({name:rows[i].name, score:rows[i].score });
            }
            res.send({ret: 0, date:date, list:list });
        });
    }
    catch(err) {
        res.send({ret: -1});
    }
});

module.exports = router;
