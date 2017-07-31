DROP procedure IF exists InsertScore;
DELIMITER $$
CREATE procedure InsertScore(_id varchar(20), _score int, _regdate datetime, _place int)
BEGIN
	insert into record (id, score, regdate, place) values (_id, _score, _regdate, _place);
END$$
DELIMITER ;