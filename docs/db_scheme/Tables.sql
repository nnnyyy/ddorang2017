use ddorang;

create table account 
(
	id varchar(20), -- 아이디 
    name varchar(20), -- 이름
	password varchar(100), -- 비번
	sex	tinyint default 0, -- 성별    
    email varchar(100), -- e-mail
    mobile_number varchar(100), -- 전화번호
    status int default 1, -- 상태 ( 0 : 탈퇴, 1 : 회원, 99 : admin )
    primary key (id)
);

create index idx_account_id on account (id);


create table record
(
	sn bigint auto_increment,
    id varchar(20), -- 사용자 id
    regdate datetime default now(), -- 등록한 날짜
    place int default 0, -- 장소 id
    score int, -- 점수
    primary key (sn)
);

create index idx_record_id on record (id);
create index idx_record_regdate on record (regdate);	