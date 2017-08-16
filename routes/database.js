
query_sex_avg = "select sex, avg(score) avgscore " +
    "from account ac, record rc " +
    "where ac.id = rc.id and status > 0 " +
    "group by sex";

query_top_avg = "select name, avg(score) avgscore " +
                "from account ac, record rc " +
                "where ac.id = rc.id and status > 0 group by ac.id " +
                "order by avgscore " +
                "desc limit 5";

function get_sex_avg_list(rows) {
    sex_avg = [];
    for (var i = 0; i < rows.length; ++i) {
        sex_avg.push({ sex: rows[i].sex, avg: rows[i].avgscore });
    }
    return sex_avg;
}

function get_top_avg_list(rows) {
    top_avg = [];
    for (var i = 0; i < rows.length; ++i) {
        top_avg.push({ name: rows[i].name, avg: rows[i].avgscore });
    }
    return top_avg;
}

exports.cb_sex_avg = function (pool, data, next_callback) {
    pool.query(query_sex_avg, function (err, rows, ret) {
        data['sex_avg'] = get_sex_avg_list(rows)
        next_callback(null, pool, data);
    });
};

exports.cb_top_avg = function (pool, data, next_callback) {
    pool.query(query_top_avg, function (err, rows, ret) {
        data['top_avg'] = get_top_avg_list(rows)
        next_callback(null, pool, data);
    });
};
