DROP procedure IF exists CheckPassword;
DELIMITER $$
CREATE procedure CheckPassword(_id varchar(20), _pwd varchar(20))
BEGIN
	select * from account where id = _id and password = password(_pwd);
END$$
DELIMITER ;