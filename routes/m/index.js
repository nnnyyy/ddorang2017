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
    empty_dict = {
        rank_average: [],
        rank_average2018: [],
        prev_rank: [],
        rank_maximum: [],
        rank_attendance: [],
        session: req.session.user_id
    };

    try {
        async.waterfall([
            function(cb) {
                cb(null, pool, empty_dict);
            },

            database.cb_ranking_average,
            database.cb_ranking_average2018,
            database.cb_prev_ranking,
            database.cb_ranking_maximum,
            database.cb_club_bowl_dates,
            database.cb_ranking_attendance,

            function (pool, data, cb) {
                cb(null, data);
            }
        ], function(err, ret) {
            res.render('m/ranking', ret);
        });
    }
    catch(err) {
        res.render('m/ranking', empty_dict);
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
