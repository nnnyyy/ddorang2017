DROP procedure IF exists CreateAccount;
DELIMITER $$
CREATE procedure CreateAccount(_id varchar(20), _name varchar(20), _pwd varchar(20), _sex int, _status int)
BEGIN
	insert into account (id, name, password, sex, status) values (_id,_name, password(_pwd),_sex, _status);
END$$
DELIMITER ;