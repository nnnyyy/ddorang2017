var express = require('express');
var router = express.Router();

var pool = require('../mysql/_Mysql').init();
var async = require('async');

/* GET home page. */
router.post('/', function(req, res, next) {
    var id = req.body.user_id;
    var reg_date = req.body.regdate;
    var score = req.body.score;
    //console.log(id + ','+reg_date + ',' + score);
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

module.exports = router;
