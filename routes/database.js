
exports.cb_account_total_count = function (pool, data, next_callback) {
    sql_query = "SELECT COUNT(*) AS account_total_count FROM account WHERE STATUS = 1";
    pool.query(sql_query, function (err, rows, ret) {
        if (err) {
            // Error 처리
        }

        if (rows.length) {
            data['account_total_count'] = rows[0].account_total_count
        }

        next_callback(null, pool, data);
    });
};

exports.cb_average_by_date = function (pool, data, next_callback) {
    sql_query = "SELECT DATE_FORMAT(regdate,'%Y-%m-%d') AS RegDateStr" +
        ", AVG(score) as avgscore, count(*) as counttotal " +
        "FROM record " +
        "GROUP BY DATE(regdate) " +
        "ORDER BY DATE(regdate) ASC " +
        "LIMIT 7";
    pool.query(sql_query, function (err, rows, ret) {
        if (err) {
            // Error 처리
        }

        avg_by_date = [];
        for (var i = 0; i < rows.length; ++i) {
            avg_by_date.push({
                Date: rows[i].RegDateStr,
                ScoreAvg: rows[i].avgscore,
                UserCount: rows[i].counttotal,
            });
        }

        if (rows.length) {
            data['avg_by_date'] = avg_by_date;
        }

        next_callback(null, pool, data);
    });
};

exports.cb_sex_avg = function (pool, data, next_callback) {
    sql_query = "SELECT sex, AVG(score) avgscore " +
        "FROM account ac, record rc " +
        "WHERE ac.id = rc.id AND STATUS > 0 " +
        "GROUP BY sex";
    pool.query(sql_query, function (err, rows, ret) {
        sex_avg = [];
        for (var i = 0; i < rows.length; ++i) {
            sex_avg.push({ sex: rows[i].sex, avg: rows[i].avgscore });
        }
        data['sex_avg'] = sex_avg;
        next_callback(null, pool, data);
    });
};

exports.cb_top_avg = function (pool, data, next_callback) {
    sql_query = "SELECT name, AVG(score) avgscore " +
        "FROM account ac, record rc " +
        "WHERE ac.id = rc.id AND STATUS > 0 " +
        "GROUP BY ac.id " +
        "ORDER BY avgscore  DESC " +
        "LIMIT 5";
    pool.query(sql_query, function (err, rows, ret) {
        top_avg = [];
        for (var i = 0; i < rows.length; ++i) {
            top_avg.push({ name: rows[i].name, avg: rows[i].avgscore });
        }
        data['top_avg'] = top_avg;
        next_callback(null, pool, data);
    });
};

exports.cb_total_avg = function (pool, data, next_callback) {
    sql_query = "SELECT AVG(score) as total_avg FROM record";
    pool.query(sql_query, function (err, rows, ret) {
        if (err) {
            // Error 처리
        }

        if (rows.length) {
            data['total_avg'] = rows[0].total_avg
        }

        next_callback(null, pool, data);
    });
};

exports.cb_club_records = function (req, pool, data, next_callback) {
    sql_query = "SELECT ac.name, DATE_FORMAT(rc.regdate,'%Y-%m-%d') AS regdate, rc.score, rc.place " +
        "FROM account ac, record rc " +
        "WHERE ac.id = rc.id AND ac.id = '" + req.session.user_id + "' " +
        "ORDER BY rc.regdate DESC";
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
    sql_query = "SELECT ac.name, DATE_FORMAT(rc.regdate,'%Y-%m-%d') AS regdate, rc.score, rc.place " +
        "FROM account ac, record_individual rc " +
        "WHERE ac.id = rc.id AND ac.id = '" + req.session.user_id + "' " +
        "ORDER BY rc.regdate DESC, sn";
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
    sql_query = "SELECT AVG(score) AS avg " +
        "FROM record " +
        "WHERE id = '" + req.session.user_id + "'";
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
    sql_query = "SELECT AVG(score) AS avg " +
        "FROM record_individual " +
        "WHERE id = '" + req.session.user_id + "'";
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
    sql_query = "SELECT name, AVG(score) AS avgscore, COUNT(rc.score) AS scorecnt " +
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

exports.cb_ranking_average2018 = function (pool, data, next_callback) {
    sql_query = "SELECT name, AVG(score) AS avgscore, COUNT(rc.score) AS scorecnt " +
        "FROM account ac, record rc " +
        "WHERE ac.id = rc.id AND STATUS > 0 AND rc.regdate > '2018-01-01' " +
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

        data['rank_average2018'] = rank_average;
        next_callback(null, pool, data);
    });
};

exports.cb_prev_ranking = function(pool, data, next_callback) {
    sql_query =   "select name, " +
                    "(@rank := @rank + 1) AS rank " +
                    "from " +
                    "(select name, avg(score) as score from account a, record b where a.id = b.id and regdate < '2018-04-09' group by a.id order by avg(score) desc) as a, " +
                    "(select @rank := 0 ) AS b order by a.score desc ";
    // 저 쿼리에 박혀있는 날짜는 나중에 자동화로 변경해야함.
    pool.query(sql_query, function (err, rows, ret) {
        if (err) {
            // Error 처리
        }

        prev_rank = []
        for (var i = 0; i < rows.length; ++i) {
            prev_rank.push({
                name: rows[i].name,
                rank: rows[i].rank,
            });
        }

        data['prev_rank'] = prev_rank;
        next_callback(null, pool, data);
    });

}

exports.cb_ranking_maximum = function (pool, data, next_callback) {
    sql_query = "SELECT name, MAX(score) AS score " +
        "FROM account ac, record rc " +
        "WHERE ac.id=rc.id " +
        "GROUP BY name " +
        "ORDER BY MAX(score) DESC ";
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

exports.cb_club_bowl_dates = function(pool, data, next_callback) {
    sql_query = "select DATE_FORMAT(regdate, '%Y-%m-%d') regdate from record group by DATE_FORMAT(regdate, '%Y-%m-%d')";
    pool.query(sql_query, function (err, rows, ret) {
        if (err) {
            // Error 처리
        }

        club_bowl_date = []
        for (var i = 0; i < rows.length; ++i) {
            club_bowl_date.push({name: rows[i].regdate});
        }

        data['club_bowl_date'] = club_bowl_date;
        next_callback(null, pool, data);
    });
}
