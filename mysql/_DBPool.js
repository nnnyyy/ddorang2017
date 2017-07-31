/**
 * Created by nnnyyy-dev on 2014-06-19.
 */
/**
 * Created by nnnyyy-dev on 2014-06-19.
 */
var generic_pool = require('generic-pool');
var mysql = require('mysql');

var database = 'ddorang';
var mysqlUser = 'root';
var mysqlPw = '!Ss1980819';

var func_pool = function() {
    return generic_pool.Pool({
        name: 'mysql',
        create: function(cb) {
            var config = {
                host: 'localhost',
                port: '3306',
                user: mysqlUser,
                password: mysqlPw,
                database: database
            }
            var client = mysql.createConnection(config);
            client.connect(function(error){
                if(error){
                    console.log(error);
                }
                cb(error, client);
            });
        },
        destroy: function(client) {
            client.end();
        },
        min: 7,
        max: 10,
        idleTimeoutMillis : 300000,
        log : false
    });
}

process.on('exit', function() {
    pool.drain(function() {
        pool.destroyAllNow();
    })
})

module.exports.createMysqlPool = func_pool;