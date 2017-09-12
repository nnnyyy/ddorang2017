-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: ddorang
-- ------------------------------------------------------
-- Server version	5.7.12-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account` (
  `id` varchar(20) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `sex` tinyint(4) DEFAULT '0',
  `email` varchar(100) DEFAULT NULL,
  `mobile_number` varchar(100) DEFAULT NULL,
  `status` int(11) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `idx_account_id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES ('23jae','이상재','*74B75AFA87EAE8D35E49EF4F99BD46E8B7C0453C',0,NULL,NULL,1),('88ssu','이수지','*65FE191CF62D09EEC5E1E45AAEBC8A57B9557295',1,NULL,NULL,1),('abiles','김성연','*F79FC385209B08F37C74C872CBBBCDE43220C340',0,NULL,NULL,1),('ak47','김정태','*3CD2C6C2D9CFDDCA999967FC093223C4F023A2C3',0,NULL,NULL,1),('appletim','박건희','*4F165EF28C696FBE101DC544289ED7F50AA52B66',0,NULL,NULL,1),('beavi','김민정4','*5BA7EEA31A68473C61912330EB4CD8890BA42880',1,NULL,NULL,1),('bobasinji','추성훈','*33527E0F962C120BF5198F87D2A8E736760C1CED',0,NULL,NULL,1),('brianyoo89','유환','*E3B87547BCE0F34F7102C0C957D419AC44755C88',0,NULL,NULL,1),('brucechae','채재영','*EFF1445A3244FF63DBCEF29DE4A9FF527806CE03',0,NULL,NULL,1),('bubiami','정춘희','*92F8DB3D354F0E3C1F1AEE96BF2548B3F70DAD40',1,NULL,NULL,1),('byungick','한병익','*EE6DD3913C9BDCB8B5279FB0E115618A85C32B7D',0,NULL,NULL,1),('choko115','배영배','*F0FFF47B93DCBA02B1FF172DF44F3392344044F0',0,NULL,NULL,1),('dantat04','최호영','*B96595BA4EBBB7ACDB9701E42C4DE9AF01705D5F',0,NULL,NULL,1),('deitrihi','김태훈','*051FBC3C47C4AE9BEC5ACC0B6D510825538E3239',0,NULL,NULL,1),('DeukyeolChoe','최득열','*BB60C6CF2C30C88D830C15DE58BBDEBA36FBDE03',0,NULL,NULL,1),('dmstar','박샛별','*5C7B360A9FEA78BC2F59220B6CEA97C105469F3C',1,NULL,NULL,1),('ehdrl84','전동기','*AFEE58DD268D40C701EF8D54F98D09280BD20A38',0,NULL,NULL,1),('einzero','진선웅','*BF7DD2E07E7C5E35F92480CE901A664A81C7D3B5',0,NULL,NULL,1),('eunice89','전아름2','*E82DF831F192F953EB4876130D404983EFD02CB4',1,NULL,NULL,1),('faxin','최화신','*C3E892FBB4606046304C0992A2449E54377342BF',1,NULL,NULL,1),('felicia','김수경','*61502134B9B75D75E4F8A40B97527F19B34ABEE6',1,NULL,NULL,1),('fullsleep','김진현','*F0E829A1D2151580BFF41C4B45ED63DCABF44F63',0,NULL,NULL,1),('genesis','장민석','*6FB516DA2CC258C65D603D97F6BBED5CBD4F5FA4',0,NULL,NULL,1),('hakbaby','김학수','*2F32041300FE6A75CB16F113677CB9829C28B98C',1,NULL,NULL,1),('hdmun','문희대','*75C4838084AE174BA14BE7AA04A10F5FE12FE9CC',0,NULL,NULL,1),('heyna83','박혜진','*356BC9DCDCB36CC8D180595400C475109D73C6BF',1,NULL,NULL,1),('hiswon','정원지2','*46A0CD9E4123C9F3554FB9917F7A28E1D320DB2C',0,NULL,NULL,1),('hyeonwooryu','유현우','*6DFD1BE107AA854794C34066F0C83E599B207233',0,NULL,NULL,1),('jsjeong','정주석','*33CB646904A0C907C54CA85089228E32D9CA253F',0,NULL,NULL,1),('k924ja','김정아4','*249A4478864197AA58D691DDB774F986332EBA3F',1,NULL,NULL,1),('kamosh23','장은경','*51C342632E57EA5CB565252E0FC2BACBE02A2B3F',1,NULL,NULL,1),('kangjin','강진','*07FEDE68E478374F793A9045A0C099BC16CF40FA',0,NULL,NULL,1),('kdang','김다영','*6491D19EDEBAF64C02DC8B142022E6684F14D205',1,NULL,NULL,1),('kimdh','김동현4','*FD1F0ED21FA20319C21314ED3D40013ED1D18AEF',0,NULL,NULL,1),('kimkhwa','김경화','*46AF902AD6C72A4F6EC4FB7CA1E289C4D1B962B1',1,NULL,NULL,1),('kirin','김은정','*2692E8A552DC737ABD2F4CE90A06C4A9367F6241',1,NULL,NULL,1),('lcy','이채영','*443AD25A319D17783540E49EB183EE3A0B5E66A7',1,NULL,NULL,1),('leejinsm','이진승','*D8DA13CDE02333025897169DEE9377B474F24296',0,NULL,NULL,1),('lrkim','김리라','*25EDECA5884A897664FC5AB95819B1496ACABD56',1,NULL,NULL,1),('metaflow','김용욱','*A53BA94FA163E2E650835627AF6177561291B4D2',0,NULL,NULL,1),('mjy8','서용석','*EE766557C99762312F3543D5A2BB2AF5A993B423',0,NULL,NULL,1),('moroo','이순한','*310181092997626868F2CB4894C9E2477FA6B867',0,NULL,NULL,1),('myk7878','김미연','*09550DE180A03CE306D1FD045912FB679C478908',1,NULL,NULL,1),('Nh.lee','이나혜','*6DF044C9C9F75D939B1A3634B2A4D88B5010D44A',1,NULL,NULL,1),('nnnyyy','왕예식','*1B4E763901C2F6C0D1B68DF81A9A345DB3E9E984',0,NULL,NULL,1),('oujin','오유진2','*DF0F962239CB8A1FCE1DD1E3A93A38FFE34120C2',1,NULL,NULL,1),('pgcck','최창규','*A275F4F3FE6BA0F3A227A044708E097F7F159DB2',0,NULL,NULL,1),('rionmk','윤민기','*F272154D4BF7E5739A5EA85D9A9B86ED89970092',0,NULL,NULL,1),('ruripang','김루리','*4D046589D3C54CE2883919620A18AC35BC6A8A1C',1,NULL,NULL,1),('ryuu','류태현','*A28E73A96C0B3B15D72CCC5263851EC01E6D7B58',0,NULL,NULL,1),('sangae','동상애','*5413ABBFC64E5A1B955832A2698FD3917C16953B',1,NULL,NULL,1),('sleepycat90','양혜림','*53E71268522034EC911A10DEE0DB0E8426BA4758',1,NULL,NULL,1),('soljishin','신솔지','*18241D77DCC7B7F7940718B1F9ED0F22F6076E89',1,NULL,NULL,1),('sono','이기영','*E651C549CD3714E33687C4B5158E9D1BA2BAFD66',0,NULL,NULL,1),('ssiksin','신동규','*B70A58B3EE389DB67078A51D8FA9D3AE9983CE01',0,NULL,NULL,1),('t2rtmch','최인경','*84F0C1476564A829AD130CF0FAB86CC85F57805A',0,NULL,NULL,1),('TheCJin','이창진','*BA084B5D245F5A1B9EBB708D1D1C97958623C33A',0,NULL,NULL,1),('tmdgns8108','채승훈','*EE85755B12BD1B8815D36E1610955CB3F7A6BDA4',0,NULL,NULL,1),('via8426','최대일','*D086864B0E3E0F41FF22C7698A3DCC5C8DC4A4A1',0,NULL,NULL,1),('vivienne','양수현','*E343866DFAE54862ED592D34F46136AA4B8C1161',0,NULL,NULL,1),('warwould','김현','*D49CB3AC312E71492A884F6A25517C8EFCCC76B2',0,NULL,NULL,1),('wm99sdw','신동휘','*DA91A4F41DF744D2F7D913970DBA9BF227EFAC55',0,NULL,NULL,1),('wwwthing','조희진','*3F1E8E430EB2F13D63522ACFD724A34F99FF445A',1,NULL,NULL,1),('x2break','권오석','*0703BA6A4FC6830C60EC9A479E3FF9B2F812AA85',0,NULL,NULL,1),('yw8712','박용우','*F1ED0A85C630C5FAA1413B4415C391638865F87A',0,NULL,NULL,1);
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `record`
--

DROP TABLE IF EXISTS `record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `record` (
  `sn` bigint(20) NOT NULL AUTO_INCREMENT,
  `id` varchar(20) DEFAULT NULL,
  `regdate` datetime DEFAULT CURRENT_TIMESTAMP,
  `place` int(11) DEFAULT '0',
  `score` int(11) DEFAULT NULL,
  PRIMARY KEY (`sn`),
  KEY `idx_record_id` (`id`),
  KEY `idx_record_regdate` (`regdate`)
) ENGINE=InnoDB AUTO_INCREMENT=212 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `record`
--

LOCK TABLES `record` WRITE;
/*!40000 ALTER TABLE `record` DISABLE KEYS */;
INSERT INTO `record` VALUES (1,'kdang','2017-08-14 19:00:00',0,144),(2,'deitrihi','2017-08-14 19:00:00',0,115),(3,'abiles','2017-08-14 19:00:00',0,88),(4,'choko115','2017-08-14 19:00:00',0,79),(5,'ruripang','2017-08-14 19:00:00',0,73),(6,'fullsleep','2017-08-14 19:00:00',0,186),(7,'23jae','2017-08-14 19:00:00',0,104),(8,'kimdh','2017-08-14 19:00:00',0,129),(9,'Nh.lee','2017-08-14 19:00:00',0,94),(10,'TheCJin','2017-08-14 19:00:00',0,100),(11,'nnnyyy','2017-08-14 19:00:00',0,162),(12,'hdmun','2017-08-14 19:00:00',0,181),(13,'wm99sdw','2017-08-14 19:00:00',0,124),(14,'wwwthing','2017-08-14 19:00:00',0,102),(15,'sangae','2017-08-14 19:00:00',0,108),(16,'tmdgns8108','2017-08-14 19:00:00',0,133),(17,'appletim','2017-08-14 19:00:00',0,199),(18,'mjy8','2017-08-14 19:00:00',0,111),(19,'rionmk','2017-08-14 19:00:00',0,106),(20,'ssiksin','2017-08-14 19:00:00',0,137),(21,'bubiami','2017-08-14 19:00:00',0,133),(22,'myk7878','2017-08-14 19:00:00',0,90),(23,'genesis','2017-08-14 19:00:00',0,166),(24,'kdang','2017-08-14 20:00:00',0,113),(25,'deitrihi','2017-08-14 20:00:00',0,162),(26,'abiles','2017-08-14 20:00:00',0,92),(27,'choko115','2017-08-14 20:00:00',0,95),(28,'ruripang','2017-08-14 20:00:00',0,55),(29,'fullsleep','2017-08-14 20:00:00',0,134),(30,'23jae','2017-08-14 20:00:00',0,91),(31,'kimdh','2017-08-14 20:00:00',0,142),(32,'Nh.lee','2017-08-14 20:00:00',0,82),(33,'TheCJin','2017-08-14 20:00:00',0,133),(34,'nnnyyy','2017-08-14 20:00:00',0,118),(35,'hdmun','2017-08-14 20:00:00',0,110),(36,'wm99sdw','2017-08-14 20:00:00',0,146),(37,'wwwthing','2017-08-14 20:00:00',0,122),(38,'sangae','2017-08-14 20:00:00',0,102),(39,'tmdgns8108','2017-08-14 20:00:00',0,145),(40,'appletim','2017-08-14 20:00:00',0,126),(41,'mjy8','2017-08-14 20:00:00',0,167),(42,'rionmk','2017-08-14 20:00:00',0,155),(43,'ssiksin','2017-08-14 20:00:00',0,160),(44,'bubiami','2017-08-14 20:00:00',0,90),(45,'myk7878','2017-08-14 20:00:00',0,84),(46,'genesis','2017-08-14 20:00:00',0,211),(47,'kdang','2017-08-28 19:00:00',0,162),(48,'myk7878','2017-08-28 19:00:00',0,78),(49,'abiles','2017-08-28 19:00:00',0,114),(50,'kirin','2017-08-28 19:00:00',0,131),(51,'fullsleep','2017-08-28 19:00:00',0,114),(52,'deitrihi','2017-08-28 19:00:00',0,136),(53,'sangae','2017-08-28 19:00:00',0,99),(54,'kimdh','2017-08-28 19:00:00',0,177),(55,'hdmun','2017-08-28 19:00:00',0,137),(56,'appletim','2017-08-28 19:00:00',0,150),(57,'choko115','2017-08-28 19:00:00',0,80),(58,'ssiksin','2017-08-28 19:00:00',0,186),(59,'soljishin','2017-08-28 19:00:00',0,135),(60,'sleepycat90','2017-08-28 19:00:00',0,85),(61,'rionmk','2017-08-28 19:00:00',0,118),(62,'moroo','2017-08-28 19:00:00',0,151),(63,'leejinsm','2017-08-28 19:00:00',0,142),(64,'lcy','2017-08-28 19:00:00',0,67),(65,'genesis','2017-08-28 19:00:00',0,141),(66,'bubiami','2017-08-28 19:00:00',0,78),(67,'einzero','2017-08-28 19:00:00',0,89),(68,'tmdgns8108','2017-08-28 19:00:00',0,83),(69,'DeukyeolChoe','2017-08-28 19:00:00',0,138),(70,'faxin','2017-08-28 19:00:00',0,77),(71,'bobasinji','2017-08-28 19:00:00',0,96),(72,'nnnyyy','2017-08-28 19:00:00',0,161),(73,'x2break','2017-08-28 19:00:00',0,114),(74,'kdang','2017-08-28 20:00:00',0,130),(75,'myk7878','2017-08-28 20:00:00',0,83),(76,'abiles','2017-08-28 20:00:00',0,104),(77,'fullsleep','2017-08-28 20:00:00',0,122),(78,'deitrihi','2017-08-28 20:00:00',0,94),(79,'sangae','2017-08-28 20:00:00',0,92),(80,'kimdh','2017-08-28 20:00:00',0,151),(81,'hdmun','2017-08-28 20:00:00',0,123),(82,'appletim','2017-08-28 20:00:00',0,144),(83,'choko115','2017-08-28 20:00:00',0,86),(84,'ssiksin','2017-08-28 20:00:00',0,158),(85,'soljishin','2017-08-28 20:00:00',0,95),(86,'sleepycat90','2017-08-28 20:00:00',0,69),(87,'rionmk','2017-08-28 20:00:00',0,116),(88,'moroo','2017-08-28 20:00:00',0,135),(89,'leejinsm','2017-08-28 20:00:00',0,215),(90,'lcy','2017-08-28 20:00:00',0,106),(91,'genesis','2017-08-28 20:00:00',0,110),(92,'bubiami','2017-08-28 20:00:00',0,69),(93,'einzero','2017-08-28 20:00:00',0,155),(94,'tmdgns8108','2017-08-28 20:00:00',0,96),(95,'DeukyeolChoe','2017-08-28 20:00:00',0,163),(96,'faxin','2017-08-28 20:00:00',0,127),(97,'bobasinji','2017-08-28 20:00:00',0,136),(98,'nnnyyy','2017-08-28 20:00:00',0,136),(99,'x2break','2017-08-28 20:00:00',0,109),(156,'23jae','2017-09-11 19:00:00',0,87),(157,'DeukyeolChoe','2017-09-11 19:00:00',0,101),(158,'88ssu','2017-09-11 19:00:00',0,81),(159,'brucechae','2017-09-11 19:00:00',0,144),(160,'jsjeong','2017-09-11 19:00:00',0,142),(161,'myk7878','2017-09-11 19:00:00',0,67),(162,'bubiami','2017-09-11 19:00:00',0,106),(163,'kangjin','2017-09-11 19:00:00',0,119),(164,'hyeonwooryu','2017-09-11 19:00:00',0,109),(165,'nnnyyy','2017-09-11 19:00:00',0,145),(166,'x2break','2017-09-11 19:00:00',0,130),(167,'soljishin','2017-09-11 19:00:00',0,93),(168,'sleepycat90','2017-09-11 19:00:00',0,65),(169,'appletim','2017-09-11 19:00:00',0,151),(170,'mjy8','2017-09-11 19:00:00',0,113),(171,'bobasinji','2017-09-11 19:00:00',0,127),(172,'kirin','2017-09-11 19:00:00',0,71),(173,'oujin','2017-09-11 19:00:00',0,86),(174,'tmdgns8108','2017-09-11 19:00:00',0,114),(175,'pgcck','2017-09-11 19:00:00',0,135),(176,'fullsleep','2017-09-11 19:00:00',0,131),(177,'kdang','2017-09-11 19:00:00',0,107),(178,'wm99sdw','2017-09-11 19:00:00',0,116),(179,'hdmun','2017-09-11 19:00:00',0,150),(180,'sangae','2017-09-11 19:00:00',0,131),(181,'genesis','2017-09-11 19:00:00',0,161),(182,'brianyoo89','2017-09-11 19:00:00',0,89),(183,'yw8712','2017-09-11 19:00:00',0,94),(184,'23jae','2017-09-11 20:00:00',0,79),(185,'DeukyeolChoe','2017-09-11 20:00:00',0,119),(186,'88ssu','2017-09-11 20:00:00',0,88),(187,'brucechae','2017-09-11 20:00:00',0,172),(188,'jsjeong','2017-09-11 20:00:00',0,126),(189,'myk7878','2017-09-11 20:00:00',0,89),(190,'bubiami','2017-09-11 20:00:00',0,104),(191,'kangjin','2017-09-11 20:00:00',0,118),(192,'hyeonwooryu','2017-09-11 20:00:00',0,107),(193,'nnnyyy','2017-09-11 20:00:00',0,140),(194,'x2break','2017-09-11 20:00:00',0,109),(195,'soljishin','2017-09-11 20:00:00',0,104),(196,'sleepycat90','2017-09-11 20:00:00',0,66),(197,'appletim','2017-09-11 20:00:00',0,210),(198,'mjy8','2017-09-11 20:00:00',0,135),(199,'bobasinji','2017-09-11 20:00:00',0,147),(200,'kirin','2017-09-11 20:00:00',0,127),(201,'oujin','2017-09-11 20:00:00',0,64),(202,'tmdgns8108','2017-09-11 20:00:00',0,135),(203,'pgcck','2017-09-11 20:00:00',0,126),(204,'fullsleep','2017-09-11 20:00:00',0,173),(205,'kdang','2017-09-11 20:00:00',0,137),(206,'wm99sdw','2017-09-11 20:00:00',0,164),(207,'hdmun','2017-09-11 20:00:00',0,122),(208,'sangae','2017-09-11 20:00:00',0,113),(209,'genesis','2017-09-11 20:00:00',0,152),(210,'brianyoo89','2017-09-11 20:00:00',0,119),(211,'yw8712','2017-09-11 20:00:00',0,118);
/*!40000 ALTER TABLE `record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `record_individual`
--

DROP TABLE IF EXISTS `record_individual`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `record_individual` (
  `sn` bigint(20) NOT NULL AUTO_INCREMENT,
  `id` varchar(20) DEFAULT NULL,
  `regdate` datetime DEFAULT CURRENT_TIMESTAMP,
  `place` int(11) DEFAULT '0',
  `score` int(11) DEFAULT NULL,
  PRIMARY KEY (`sn`),
  KEY `idx_record_id` (`id`),
  KEY `idx_record_regdate` (`regdate`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `record_individual`
--

LOCK TABLES `record_individual` WRITE;
/*!40000 ALTER TABLE `record_individual` DISABLE KEYS */;
INSERT INTO `record_individual` VALUES (1,'deitrihi','2017-07-24 00:00:00',0,100),(2,'deitrihi','2017-07-24 00:00:00',0,100),(16,'kimdh','2017-08-16 00:00:00',0,124),(21,'x2break','2017-08-16 00:00:00',0,108),(22,'x2break','2017-08-16 00:00:00',0,124),(23,'kimdh','2017-08-16 00:00:00',0,109),(24,'x2break','2017-08-16 00:00:00',0,116),(25,'kimdh','2017-08-16 00:00:00',0,140),(26,'x2break','2017-08-16 00:00:00',0,103),(27,'kimdh','2017-08-16 00:00:00',0,140),(28,'x2break','2017-08-16 00:00:00',0,151),(29,'kimdh','2017-08-16 00:00:00',0,191),(39,'kimdh','2017-08-21 00:00:00',0,131),(40,'kimdh','2017-08-21 00:00:00',0,128),(41,'kimdh','2017-08-21 00:00:00',0,137),(42,'x2break','2017-09-05 00:00:00',0,148),(43,'kimdh','2017-09-06 00:00:00',0,138),(44,'x2break','2017-09-06 00:00:00',0,140),(45,'kimdh','2017-09-06 00:00:00',0,125),(46,'kimdh','2017-09-06 00:00:00',0,165),(47,'x2break','2017-09-06 00:00:00',0,148),(50,'kimdh','2017-09-06 00:00:00',0,100),(51,'88ssu','2017-09-11 00:00:00',0,81),(53,'88ssu','2017-09-11 00:00:00',0,88);
/*!40000 ALTER TABLE `record_individual` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-09-12 10:07:49
