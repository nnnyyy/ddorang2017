var express = require('express');
var router = express.Router();

var pool = require('../../mysql/_Mysql').init();
var async = require('async');
var database = require('../database.js');

/* DB SP 사용 예
 pool.query('CALL CreateAccount(?,?,?,?)',['nnnyyy2', '왕예식', '1234', 0], function(err, rows, fields){
 if(err) throw err;
 console.log("DBSuccess");
 })
* */


/* GET home page for mobile. */
router.get('/', function(req, res, next) {
    try {
        async.waterfall([
            function(cb) {
                cb(null, pool, {});
            },

            database.cb_sex_avg,
            database.cb_top_avg,

            function(pool, data, cb) {
                cb(null, data);
            }
        ], function(err, ret) {
            res.render('m/index', {data: ret, session: req.session.user_id });
        });
    }
    catch(err) {
        res.render('m/index', { session: req.session.user_id });
    }
});

router.get('/myinfo', function(req, res, next) {
    var data = [];
    var data_individual = [];
    var avg = 0;
    var avg_individual = 0;
    if(req.session.user_id) {
        // 로그인 한 상태
        try {

            async.waterfall([
                function(cb) {
                    pool.query("select ac.name, DATE_FORMAT(rc.regdate,'%Y-%m-%d') as regdate, rc.score, rc.place from account ac, record rc where ac.id = rc.id and ac.id = '"+ req.session.user_id +"' order by rc.regdate desc", function(err, rows, ret ){

                        if(err) {
                            // Error 처리
                        }

                        for( var i = 0 ; i < rows.length ; ++i) {
                            data.push({name:rows[i].name, regdate:rows[i].regdate, score:rows[i].score, place:rows[i].place });
                        }
                        cb(null,'next');
                    });
                },
                function(arg, cb) {
                    pool.query("select ac.name, DATE_FORMAT(rc.regdate,'%Y-%m-%d') as regdate, rc.score, rc.place from account ac, record_individual rc where ac.id = rc.id and ac.id = '"+ req.session.user_id +"' order by rc.regdate desc, sn", function(err, rows, ret ){

                        if(err) {
                            // Error 처리
                        }

                        for( var i = 0 ; i < rows.length ; ++i) {
                            data_individual.push({name:rows[i].name, regdate:rows[i].regdate, score:rows[i].score, place:rows[i].place });
                        }
                        cb(null,'next');
                    });
                },
                function(arg, cb) {

                    pool.query("select avg(score) avg from record where id = '"+ req.session.user_id +"'", function(err, rows, ret ){

                        if(err) {
                            // Error 처리
                        }

                        if(rows.length) {
                            avg = rows[0].avg;
                        }

                        cb(null, 'next');
                    });
                },
                function(arg, cb) {

                    pool.query("select avg(score) avg from record_individual where id = '"+ req.session.user_id +"'", function(err, rows, ret ){

                        if(err) {
                            // Error 처리
                        }

                        if(rows.length) {
                            avg_individual = rows[0].avg;
                        }

                        cb(null, 'done');
                    });
                }
            ], function(err,ret) {
                res.render('m/myinfo', { data: data, data_individual:data_individual, avg:avg, avg_individual:avg_individual, session: req.session.user_id});
            });
        }
        catch(err) {
            res.render('m/myinfo', { data:[], data_individual:[], avg:0, avg_individual:0, session: req.session.user_id });
        }
    }
    else {
        res.render('m/myinfo', { data:[], data_individual:[], avg:0, avg_individual:0, session: req.session.user_id });
    }
});

router.get('/ranking', function(req, res, next) {
    var data = [];
    var data_max = [];
    var data_attend = [];
    var avg = 0;

    try {
        //
        async.waterfall([
            function(cb) {
                pool.query("select name, avg(score) avgscore, count(rc.score) scorecnt from account ac, record rc where ac.id = rc.id and status > 0 group by ac.id order by avgscore desc", function(err, rows, ret ){

                    if(err) {
                        // Error 처리
                    }

                    for( var i = 0 ; i < rows.length ; ++i) {
                        data.push({name:rows[i].name, avgscore:rows[i].avgscore, scorecnt: rows[i].scorecnt });
                    }
                    cb(null,'next');
                });
            },
            function(arg, cb) {
                pool.query("select name, max(score) as score from account ac, record rc where ac.id=rc.id group by name order by max(score) desc", function(err, rows, ret ){

                    if(err) {
                        // Error 처리
                    }

                    for( var i = 0 ; i < rows.length ; ++i) {
                        data_max.push({name:rows[i].name, score:rows[i].score });
                    }
                    cb(null,'next');
                });
            },
            function(arg, cb) {

                pool.query("select name, count(*) as cnt from (select ac.name as name, date_format(regdate, '%Y-%m-%d') as regdate from account ac, record rc where ac.id = rc.id group by ac.name, date_format(regdate, '%Y-%m-%d')) as temp group by name order by count(*) desc", function(err, rows, ret ){

                    if(err) {
                        // Error 처리
                    }

                    for(var i = 0 ; i < rows.length ; ++i) {
                        data_attend.push({name: rows[i].name, cnt: rows[i].cnt});
                    }

                    cb(null, 'done');
                });
            }
        ], function(err,ret) {
            res.render('m/ranking', { data: data, data_max:data_max, data_attend:data_attend, session: req.session.user_id});
        });
    }
    catch(err) {
        res.render('m/ranking', { data:[],data_max:[], data_attend:[], session: req.session.user_id });
    }
});

router.get('/input_score', function(req,res,next){
    res.render('m/inputscore', { data:[], session: req.session.user_id });
});

router.get('/login', function(req,res,next){
    res.render('m/login', { data:[], session: req.session.user_id });
});

router.get('/logout', function(req,res,next){
    //console.log(req.session.user_id);
    req.session.destroy();
    res.redirect('back');
});

module.exports = router;
