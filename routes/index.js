var express = require('express');
var router = express.Router();

var pool = require('../mysql/_Mysql').init();
var async = require('async');
var database = require('./database.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    try {
        async.waterfall([
            function(cb) {
                cb(null, pool, {});
            },

            database.cb_account_total_count,
            database.cb_sex_avg,
            database.cb_total_avg,
            database.cb_top_avg,
            database.cb_ranking_maximum,

            function(pool, data, cb) {
                rank_maximum = data['rank_maximum'];
                data['score_max'] = rank_maximum[0].score;
                data['rank_maximum'] = rank_maximum.slice(0, 5);
                cb(null, data);
            }
        ], function(err, ret) {
            res.render('index', {data: ret, session: req.session.user_id });
        });
    }
    catch(err) {
        res.render('index', { session: req.session.user_id });
    }
});

router.post('/', function (req, res) {
    try {
        req_name = req.body['request'];
        if (req_name == 'avg_by_date') {
            async.waterfall([
                function(cb) {
                    cb(null, pool, {});
                },

                database.cb_average_by_date,

                function(pool, data, cb) {
                    cb(null, data);
                }
            ], function(err, ret) {
                res.send({
                    name: req_name,
                    res_data: ret['avg_by_date']
                });
            });
        }
    }
    catch(err) {
      res.send('POST request to the homepage');
    }
});

module.exports = router;


