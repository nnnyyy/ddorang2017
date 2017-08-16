
query_sex_avg = "select sex, avg(score) avgscore " +
    "from account ac, record rc " +
    "where ac.id = rc.id and status > 0 " +
    "group by sex";

query_top_avg = "select name, avg(score) avgscore " +
                "from account ac, record rc " +
                "where ac.id = rc.id and status > 0 group by ac.id " +
                "order by avgscore " +
                "desc limit 5";

function get_query_club_record(user_id) {
    return " select ac.name, DATE_FORMAT(rc.regdate,'%Y-%m-%d') as regdate, rc.score, rc.place " +
        " from account ac, record rc " +
        " where ac.id = rc.id and ac.id = '" + user_id + "' " +
        " order by rc.regdate desc";
}

function get_query_individual_record(user_id) {
    return "select ac.name, DATE_FORMAT(rc.regdate,'%Y-%m-%d') as regdate, rc.score, rc.place " +
        " from account ac, record_individual rc " +
        " where ac.id = rc.id and ac.id = '" + user_id + "' " +
        " order by rc.regdate desc";
}

function get_query_club_average(user_id) {
    return "select avg(score) avg " +
        "from record " +
        "where id = '" + user_id + "'";
}

function get_query_individual_average(user_id) {
    return "select avg(score) avg " +
        "from record_individual " +
        "where id = '" + user_id + "'";
}

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

exports.cb_club_records = function (req, pool, data, next_callback) {
    sql_query = get_query_club_record(req.session.user_id);
    pool.query(sql_query, function (err, rows, ret) {
        if (err) {
            // Error 처리
        }

        records = []
        for (var i = 0; i < rows.length; ++i) {
            records.push({
                name: rows[i].name,
                regdate: rows[i].regdate,
                score: rows[i].score,
                place: rows[i].place
            });
        }

        data['club_record'] = records
        next_callback(null, req, pool, data);
    });
};

exports.cb_individual_records = function (req, pool, data, next_callback) {
    sql_query = get_query_individual_record(req.session.user_id);
    pool.query(sql_query, function (err, rows, ret) {
        if (err) {
            // Error 처리
        }

        records = [];
        for (var i = 0; i < rows.length; ++i) {
            records.push({
                name: rows[i].name,
                regdate: rows[i].regdate,
                score: rows[i].score,
                place: rows[i].place
            });
        }

        data['individual_record'] = records;
        next_callback(null, req, pool, data);
    });
};

exports.cb_club_average = function (req, pool, data, next_callback) {
    sql_query = get_query_club_average(req.session.user_id);
    pool.query(sql_query, function (err, rows, ret) {
        if (err) {
            // Error 처리
        }

        if (rows.length) {
            data['avg'] = rows[0].avg;
        }

        next_callback(null, req, pool, data);
    });
};


exports.cb_individual_average = function (req, pool, data, next_callback) {
    sql_query = get_query_individual_average(req.session.user_id);
    pool.query(sql_query, function (err, rows, ret) {
        if (err) {
            // Error 처리
        }

        if (rows.length) {
            data['avg_individual'] = rows[0].avg;
        }

        next_callback(null, req, pool, data);
    });
};

exports.cb_ranking_average = function (pool, data, next_callback) {
    sql_query = "SELECT name, AVG(score) avgscore, COUNT(rc.score) scorecnt " +
        "FROM account ac, record rc " +
        "WHERE ac.id = rc.id AND STATUS > 0 " +
        "GROUP BY ac.id " +
        "ORDER BY avgscore DESC ";
    pool.query(sql_query, function (err, rows, ret) {
        if (err) {
            // Error 처리
        }

        rank_average = []
        for (var i = 0; i < rows.length; ++i) {
            rank_average.push({
                name: rows[i].name,
                avgscore: rows[i].avgscore,
                scorecnt: rows[i].scorecnt
            });
        }

        data['rank_average'] = rank_average;
        next_callback(null, pool, data);
    });
};

exports.cb_ranking_maximum = function (pool, data, next_callback) {
    sql_query = "SELECT name, MAX(score) AS score " +
        "FROM account ac, record rc " +
        "WHERE ac.id=rc.id " +
        "GROUP BY name " +
        "ORDER BY MAX(score) DESC "
    pool.query(sql_query, function (err, rows, ret) {
        if (err) {
            // Error 처리
        }

        rank_maximum = []
        for (var i = 0; i < rows.length; ++i) {
            rank_maximum.push({
                name: rows[i].name,
                score: rows[i].score
            });
        }

        data['rank_maximum'] = rank_maximum;
        next_callback(null, pool, data);
    });
};

exports.cb_ranking_attendance = function (pool, data, next_callback) {
    sql_query = "SELECT name, COUNT(*) AS cnt " +
        "   FROM ( " +
        "   SELECT ac.name AS name, DATE_FORMAT(regdate, '%Y-%m-%d') AS regdate " +
        "   FROM account ac, record rc " +
        "   WHERE ac.id = rc.id " +
        "   GROUP BY ac.name, DATE_FORMAT(regdate, '%Y-%m-%d')) AS temp " +
        "GROUP BY name " +
        "ORDER BY COUNT(*) DESC";
    pool.query(sql_query, function (err, rows, ret) {
        if (err) {
            // Error 처리
        }

        rank_attendance = []
        for (var i = 0; i < rows.length; ++i) {
            rank_attendance.push({ name: rows[i].name, cnt: rows[i].cnt });
        }

        data['rank_attendance'] = rank_attendance
        next_callback(null, pool, data);
    });
};
