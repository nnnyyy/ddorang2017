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

function empty_myinfo_data() {
    return {
        club_record: [],
        individual_record: [],
        avg: 0,
        avg_individual: 0
    };
}

router.get('/myinfo', function(req, res, next) {
    if(req.session.user_id) {
        // 로그인 한 상태
        try {
            async.waterfall([
                function(cb) {
                    cb(null, req, pool, empty_myinfo_data());
                },

                database.cb_club_records,
                database.cb_individual_records,
                database.cb_club_average,
                database.cb_individual_average,

                function(req, pool, data, cb) {
                    cb(null, data);
                }
            ], function(err, ret) {
                ret['session'] = req.session.user_id;
                res.render('m/myinfo', ret);
            });
        }
        catch(err) {
            empty_data = empty_myinfo_data();
            empty_data['session'] = req.session.user_id;
            res.render('m/myinfo', empty_data);
        }
    }
    else {
        empty_data = empty_myinfo_data();
        empty_data['session'] = req.session.user_id;
        res.render('m/myinfo', empty_data);
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
