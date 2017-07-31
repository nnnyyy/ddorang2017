/**
 * Created by nnnyyy-dev on 2014-06-19.
 */
var _pool;
var DBMan = {}

DBMan.init = function() {
    _pool = require('./_DBPool').createMysqlPool();
}

DBMan.query = function( sql, args, callback ) {
    _pool.acquire(function(err,db) {
        if( err ) {
            console.error('[sql error] ' + err.stack );
            return;
        }

        db.query(sql, args, function(err, res ) {
            _pool.release(db);
            callback(err,res);
        })
    })
}

DBMan.shutdown = function() {
    _pool.destroyAllNow();
}

exports.init = function() {
    if( !!_pool ) {
        return exports;
    }else {
        DBMan.init();
        exports.insert = DBMan.query;
        exports.update = DBMan.query;
        exports.delete = DBMan.query;
        exports.query = DBMan.query;
        return exports;
    }
}

