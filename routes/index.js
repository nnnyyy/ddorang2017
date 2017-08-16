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

            database.cb_sex_avg,
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

module.exports = router;


