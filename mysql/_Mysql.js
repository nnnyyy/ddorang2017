/**
 * Created by nnnyyy-dev on 2014-06-19.
 */
var mysql = require('mysql');
var _pool;
var DBMan = {}

DBMan.init = function() {
    _pool = mysql.createPool({
        connectionLimit: 10,
        host: '52.79.205.198',
        user: 'root',
        password: 's1980819',
        database: 'ddorang'
    });

}

exports.init = function() {
    if( !!_pool ) {
        return _pool;
    }else {
        DBMan.init();
        return _pool;
    }
}

