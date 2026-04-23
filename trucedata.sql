-- MySQL schema for trucelofficiel
CREATE DATABASE IF NOT EXISTS `trucelofficiel`;
USE `trucelofficiel`;

-- Table structure for table `users`
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `FIRST_NAME` varchar(255) NOT NULL,
  `LAST_NAME` varchar(255) NOT NULL,
  `EMAIL` varchar(255) NOT NULL,
  `DOB` date NOT NULL,
  `SUD` date NOT NULL,
  `PASSWORD` varchar(100) NOT NULL,
  `CART` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table structure for table `user_saved`
DROP TABLE IF EXISTS `user_saved`;
CREATE TABLE `user_saved` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `USER_ID` int NOT NULL,
  `VARIANT` varchar(255) NOT NULL,
  `quantity` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`ID`),
  KEY `USER_ID` (`USER_ID`),
  CONSTRAINT `user_saved_ibfk_1` FOREIGN KEY (`USER_ID`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;