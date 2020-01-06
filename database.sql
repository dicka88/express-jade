-- Adminer 4.2.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

CREATE DATABASE `node` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `node`;

DROP TABLE IF EXISTS `accounts`;
CREATE TABLE `accounts` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(125) NOT NULL,
  `role` int(11) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `accounts` (`user_id`, `username`, `password`, `role`) VALUES
(2,	'admin',	'$2b$13$7VRI9PnYDYoBQGOoKM6t.eI4bNnUTt7SXPcAXjbDTR.iqROnTwGIO',	1),
(3,	'admina',	'$2b$13$7VRI9PnYDYoBQGOoKM6t.eI4bNnUTt7SXPcAXjbDTR.iqROnTwGIO',	1),
(8,	'a',	'0cc175b9c0f1b6a831c399e269772661',	1);

-- 2020-01-06 08:22:01
