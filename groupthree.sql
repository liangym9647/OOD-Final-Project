/*
Navicat MySQL Data Transfer

Source Server         : happy
Source Server Version : 50622
Source Host           : 127.0.0.1:3306
Source Database       : groupthree

Target Server Type    : MYSQL
Target Server Version : 50622
File Encoding         : 65001

Date: 2022-04-13 12:01:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for activity
-- ----------------------------
DROP TABLE IF EXISTS `activity`;
CREATE TABLE `activity` (
  `floorClimbing` varchar(255) DEFAULT NULL,
  `step` varchar(255) DEFAULT NULL,
  `distance` varchar(255) DEFAULT NULL,
  `userName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for doctor
-- ----------------------------
DROP TABLE IF EXISTS `doctor`;
CREATE TABLE `doctor` (
  `doctorName` varchar(255) DEFAULT NULL,
  `doctorType` varchar(255) DEFAULT NULL,
  `doctorTime` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `doctorId` varchar(255) DEFAULT NULL,
  `userName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for medicine
-- ----------------------------
DROP TABLE IF EXISTS `medicine`;
CREATE TABLE `medicine` (
  `medicineName` varchar(255) DEFAULT NULL,
  `medicineTime` varchar(255) DEFAULT NULL,
  `medicineDosage` varchar(255) DEFAULT NULL,
  `medicineId` varchar(255) DEFAULT NULL,
  `medicineFrequency` varchar(255) DEFAULT NULL,
  `userName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `COVIDResult` varchar(255) DEFAULT NULL,
  `News` varchar(255) DEFAULT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `Date` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for restaurant
-- ----------------------------
DROP TABLE IF EXISTS `restaurant`;
CREATE TABLE `restaurant` (
  `restaurantName` varchar(255) DEFAULT NULL,
  `restaurantTime` varchar(255) DEFAULT NULL,
  `restaurantCount` int(11) NOT NULL AUTO_INCREMENT,
  `tableNumber` varchar(255) DEFAULT NULL,
  `aroundTime` varchar(255) DEFAULT NULL,
  `userName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`restaurantCount`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for risk
-- ----------------------------
DROP TABLE IF EXISTS `risk`;
CREATE TABLE `risk` (
  `riskpercentage` varchar(255) DEFAULT NULL,
  `risklevel` varchar(255) DEFAULT NULL,
  `userName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for symptom
-- ----------------------------
DROP TABLE IF EXISTS `symptom`;
CREATE TABLE `symptom` (
  `Feverfrequency` varchar(255) DEFAULT NULL,
  `Sneezingfrequency` varchar(255) DEFAULT NULL,
  `severity` varchar(255) DEFAULT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `Coughfrequency` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for takeout
-- ----------------------------
DROP TABLE IF EXISTS `takeout`;
CREATE TABLE `takeout` (
  `Name` varchar(255) DEFAULT NULL,
  `Distance` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `userName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for travel
-- ----------------------------
DROP TABLE IF EXISTS `travel`;
CREATE TABLE `travel` (
  `travelDestination` varchar(255) DEFAULT NULL,
  `travelBegin` datetime DEFAULT NULL,
  `travelEnd` datetime DEFAULT NULL,
  `travelLong` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for trip
-- ----------------------------
DROP TABLE IF EXISTS `trip`;
CREATE TABLE `trip` (
  `DateTime` varchar(255) DEFAULT NULL,
  `Location` varchar(255) DEFAULT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `lat` varchar(255) DEFAULT NULL,
  `lng` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userName` varchar(255) NOT NULL,
  `passWord` varchar(255) NOT NULL,
  `realName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
