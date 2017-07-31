var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '!Ss1980819',
    database: 'ddorang'
});

var async = require('async');

/* DB SP 사용 예
 pool.query('CALL CreateAccount(?,?,?,?)',['nnnyyy2', '왕예식', '1234', 0], function(err, rows, fields){
 if(err) throw err;
 console.log("DBSuccess");
 })
* */

/* GET home page for mobile. */
router.get('/', function(req, res, next) {
    req.session.user_id = 'nnnyyy';
    var sex_avg = [];
    var top_avg = [];
    try {
        async.waterfall([
            function(cb) {
                pool.query("select sex, avg(score) avgscore from account ac, record rc where ac.id = rc.id and status > 0 group by sex", function(err, rows, ret ){
                    for( var i = 0 ; i < rows.length ; ++i) {
                        sex_avg.push({sex:rows[i].sex, avg:rows[i].avgscore });
                    }
                    console.log(sex_avg);
                    cb(null, 'next');
                });
            },
            function(arg, cb) {
                pool.query("select name, avg(score) avgscore from account ac, record rc where ac.id = rc.id and status > 0 group by ac.id order by avgscore desc limit 5", function(err, rows, ret ){
                    for( var i = 0 ; i < rows.length ; ++i) {
                        top_avg.push({name:rows[i].name, avg:rows[i].avgscore });
                    }
                    console.log(top_avg);
                    cb(null, 'next');
                });
            },
            function(arg, cb) {

                cb(null, 'done');
            }
        ], function(err,ret) {
            res.render('m/index', { data: {sex_avg:sex_avg, top_avg:top_avg}, session: req.session.user_id});
        });
    }
    catch(err) {
        res.render('m/index', { session: req.session.user_id });
    }
});

router.get('/myinfo', function(req, res, next) {
    var data = [];
    try {
        pool.query("select id, name from account where status > 0", function(err, rows, ret ){

            if(err) {
                // Error 처리
            }

            for( var i = 0 ; i < rows.length ; ++i) {
                data.push({id:rows[i].id, name:rows[i].name });
            }

            res.render('m/myinfo', { data:data, session: req.session.user_id });
        });
    }
    catch(err) {
        res.render('m/myinfo', { data:data, session: req.session.user_id });
    }
});

router.get('/logout', function(req,res,next){
    console.log(req.session.user_id);
    req.session.destroy();
    res.clearCookie('ddorang');
    res.send('Good');
});

module.exports = router;
