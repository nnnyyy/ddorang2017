DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertScoreIndividual`(_id varchar(20), _score int, _regdate datetime, _place int)
BEGIN
	insert into record_individual (id, score, regdate, place) values (_id, _score, _regdate, _place);
END$$
DELIMITER ;
