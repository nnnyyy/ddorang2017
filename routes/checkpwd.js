var express = require('express');
var router = express.Router();

var pool = require('../mysql/_Mysql').init();
var async = require('async');

/* GET home page. */
router.post('/', function(req, res, next) {
    var id = req.body.user_id;
    var pwd = req.body.user_pwd;
    var return_url = req.body.return_url;
    console.log('id: ' + id + ",pw:" + pwd);
    try {
        pool.query('CALL CheckPassword(?,?)',[id, pwd], function(err,rows,fields){
            if(err) {
                res.send({ret: -1});
                return;
            }

            if(rows[0].length == 0) {
                res.send({ret: -1});
                return;
            }

            req.session.user_id = id;
            res.send({ret: 0, id:id, pwd: pwd, return_url: return_url });
        });
    }
    catch(err) {
        res.send({ret: -1});
    }

});

module.exports = router;
