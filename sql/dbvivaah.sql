-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 09, 2018 at 04:12 PM
-- Server version: 5.5.24-log
-- PHP Version: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `dbvivaah`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbladministrator`
--

CREATE TABLE IF NOT EXISTS `tbladministrator` (
  `IdAdministrator` int(11) NOT NULL AUTO_INCREMENT,
  `AdministratorName` varchar(100) NOT NULL,
  `PhoneNumber` varchar(20) NOT NULL,
  `EMailId` varchar(100) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Status` int(11) NOT NULL,
  PRIMARY KEY (`IdAdministrator`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tblcandidatefamilydetails`
--

CREATE TABLE IF NOT EXISTS `tblcandidatefamilydetails` (
  `IdFamilyDetails` int(11) NOT NULL AUTO_INCREMENT,
  `IdFamilyType` int(11) NOT NULL,
  `FatherName` varchar(100) NOT NULL,
  `FatherOccupation` varchar(50) NOT NULL,
  `MotherName` varchar(100) NOT NULL,
  `MotherOccupation` varchar(50) NOT NULL,
  `TotalSisters` int(11) NOT NULL,
  `MarriedSisters` int(11) NOT NULL,
  `TotalBrothers` int(11) NOT NULL,
  `MarriedBrothers` int(11) NOT NULL,
  `Address` varchar(250) NOT NULL,
  `PhoneNumber` varchar(20) NOT NULL,
  `IdPersonalDetails` int(11) NOT NULL,
  PRIMARY KEY (`IdFamilyDetails`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tblcandidatepersoneldetails`
--

CREATE TABLE IF NOT EXISTS `tblcandidatepersoneldetails` (
  `IdPersonalDetails` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) NOT NULL,
  `IdGender` int(11) NOT NULL,
  `MobileNumber` varchar(20) NOT NULL,
  `DOB` date NOT NULL,
  `Email` varchar(30) NOT NULL,
  `ProfilePicPath` varchar(50) NOT NULL,
  `IdMaritalStatus` int(11) NOT NULL,
  `Height` double NOT NULL,
  `IdEatingHabit` int(11) NOT NULL,
  `IdMotherTongue` int(11) NOT NULL,
  `IdDrinkingHabit` int(11) NOT NULL,
  `IdSmokingHabit` int(11) NOT NULL,
  `PhysicalDisabilities` varchar(100) NOT NULL,
  `AboutMe` varchar(150) NOT NULL,
  `IdReligion` int(11) NOT NULL,
  `IdCaste` int(11) NOT NULL,
  `IdSubCaste` int(11) NOT NULL,
  `IdGothra` int(11) NOT NULL,
  `IdNakshatra` int(11) NOT NULL,
  `IdRashi` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`IdPersonalDetails`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tblcandidateprofessionaldetails`
--

CREATE TABLE IF NOT EXISTS `tblcandidateprofessionaldetails` (
  `IdProfessionalDetails` int(11) NOT NULL AUTO_INCREMENT,
  `IdQualification` int(11) NOT NULL,
  `IdEmployement` int(11) NOT NULL,
  `Occupation` varchar(50) NOT NULL,
  `MothtlyIncome` int(11) NOT NULL,
  `WorkLocation` varchar(50) NOT NULL,
  `OfficeAddress` varchar(250) NOT NULL,
  `IdPersonalDetails` int(11) NOT NULL,
  PRIMARY KEY (`IdProfessionalDetails`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tblcaste`
--

CREATE TABLE IF NOT EXISTS `tblcaste` (
  `IdCaste` int(11) NOT NULL AUTO_INCREMENT,
  `CasteName` varchar(50) NOT NULL,
  `IdReligion` int(11) NOT NULL,
  PRIMARY KEY (`IdCaste`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=23 ;

--
-- Dumping data for table `tblcaste`
--

INSERT INTO `tblcaste` (`IdCaste`, `CasteName`, `IdReligion`) VALUES
(11, 'Adaviyar', 1),
(12, 'Brahmin', 1),
(13, 'Lingayath', 1),
(14, 'Shetty', 1),
(21, 'Banjara', 2),
(22, 'Abdal', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbldrinkinghabit`
--

CREATE TABLE IF NOT EXISTS `tbldrinkinghabit` (
  `IdDrinkingHabit` int(11) NOT NULL,
  `DrinkingHabitName` varchar(20) NOT NULL,
  PRIMARY KEY (`IdDrinkingHabit`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbldrinkinghabit`
--

INSERT INTO `tbldrinkinghabit` (`IdDrinkingHabit`, `DrinkingHabitName`) VALUES
(101, 'Soft Drinks'),
(102, 'Hot Drinks');

-- --------------------------------------------------------

--
-- Table structure for table `tbleatinghabit`
--

CREATE TABLE IF NOT EXISTS `tbleatinghabit` (
  `IdEatingHabit` int(11) NOT NULL,
  `EatingHabitName` varchar(20) NOT NULL,
  PRIMARY KEY (`IdEatingHabit`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbleatinghabit`
--

INSERT INTO `tbleatinghabit` (`IdEatingHabit`, `EatingHabitName`) VALUES
(111, 'Vegetarian'),
(112, 'Non Vegetarian');

-- --------------------------------------------------------

--
-- Table structure for table `tbleducationalqualifications`
--

CREATE TABLE IF NOT EXISTS `tbleducationalqualifications` (
  `IdQualification` int(11) NOT NULL AUTO_INCREMENT,
  `QualificationName` varchar(15) NOT NULL,
  PRIMARY KEY (`IdQualification`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tbleducationalqualifications`
--

INSERT INTO `tbleducationalqualifications` (`IdQualification`, `QualificationName`) VALUES
(1, 'MCA'),
(2, 'MBA');

-- --------------------------------------------------------

--
-- Table structure for table `tblemployementtypes`
--

CREATE TABLE IF NOT EXISTS `tblemployementtypes` (
  `IdEmployement` int(11) NOT NULL AUTO_INCREMENT,
  `EmployementType` varchar(50) NOT NULL,
  PRIMARY KEY (`IdEmployement`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=106 ;

--
-- Dumping data for table `tblemployementtypes`
--

INSERT INTO `tblemployementtypes` (`IdEmployement`, `EmployementType`) VALUES
(101, 'Buisness'),
(102, 'IT Corporate Employee'),
(103, 'Army'),
(104, 'Navy'),
(105, 'Scientist');

-- --------------------------------------------------------

--
-- Table structure for table `tblfamilytype`
--

CREATE TABLE IF NOT EXISTS `tblfamilytype` (
  `IdFamilyType` int(11) NOT NULL,
  `FamilyType` varchar(20) NOT NULL,
  PRIMARY KEY (`IdFamilyType`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblfamilytype`
--

INSERT INTO `tblfamilytype` (`IdFamilyType`, `FamilyType`) VALUES
(1, 'Nuclear Family'),
(2, 'Joint Family'),
(3, 'Extended Family');

-- --------------------------------------------------------

--
-- Table structure for table `tblgender`
--

CREATE TABLE IF NOT EXISTS `tblgender` (
  `IdGender` int(11) NOT NULL,
  `GenderName` varchar(20) NOT NULL,
  PRIMARY KEY (`IdGender`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblgender`
--

INSERT INTO `tblgender` (`IdGender`, `GenderName`) VALUES
(101, 'Male'),
(102, 'Female');

-- --------------------------------------------------------

--
-- Table structure for table `tblgothra`
--

CREATE TABLE IF NOT EXISTS `tblgothra` (
  `IdGothra` int(11) NOT NULL AUTO_INCREMENT,
  `GothraName` varchar(50) NOT NULL,
  PRIMARY KEY (`IdGothra`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tblgothra`
--

INSERT INTO `tblgothra` (`IdGothra`, `GothraName`) VALUES
(1, 'Kaushika'),
(2, 'Vasishta');

-- --------------------------------------------------------

--
-- Table structure for table `tblmaritalstatus`
--

CREATE TABLE IF NOT EXISTS `tblmaritalstatus` (
  `IdMaritalStatus` int(11) NOT NULL,
  `StatusName` varchar(20) NOT NULL,
  PRIMARY KEY (`IdMaritalStatus`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblmaritalstatus`
--

INSERT INTO `tblmaritalstatus` (`IdMaritalStatus`, `StatusName`) VALUES
(1001, 'Never Married'),
(1002, 'Widowed'),
(1003, 'Divorced'),
(1004, 'Awaiting Divorce');

-- --------------------------------------------------------

--
-- Table structure for table `tblmatchedprofiles`
--

CREATE TABLE IF NOT EXISTS `tblmatchedprofiles` (
  `IdMatchedProfile` int(11) NOT NULL AUTO_INCREMENT,
  `IdMaleCandidate` int(11) NOT NULL,
  `IdFemaleCandidate` int(11) NOT NULL,
  `MaleProfileViewStatus` int(11) NOT NULL,
  `FemaleProfileViewStatus` int(11) NOT NULL,
  `AcceptanceStatus` int(11) NOT NULL,
  `MarriageStatus` int(11) NOT NULL,
  PRIMARY KEY (`IdMatchedProfile`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tblmothertonguelanguages`
--

CREATE TABLE IF NOT EXISTS `tblmothertonguelanguages` (
  `IdLanguage` int(11) NOT NULL AUTO_INCREMENT,
  `LanguageName` varchar(50) NOT NULL,
  PRIMARY KEY (`IdLanguage`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=103 ;

--
-- Dumping data for table `tblmothertonguelanguages`
--

INSERT INTO `tblmothertonguelanguages` (`IdLanguage`, `LanguageName`) VALUES
(101, 'Kannada'),
(102, 'Konkani');

-- --------------------------------------------------------

--
-- Table structure for table `tblnakshatra`
--

CREATE TABLE IF NOT EXISTS `tblnakshatra` (
  `IdNakshatra` int(11) NOT NULL AUTO_INCREMENT,
  `NakshatraName` varchar(50) NOT NULL,
  PRIMARY KEY (`IdNakshatra`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=128 ;

--
-- Dumping data for table `tblnakshatra`
--

INSERT INTO `tblnakshatra` (`IdNakshatra`, `NakshatraName`) VALUES
(101, 'Ashwini'),
(102, 'Bharani'),
(103, 'Krittika'),
(104, 'Rohini'),
(105, 'Mrigashirsha'),
(106, 'Ardra'),
(107, 'Punarvasu'),
(108, 'Pushya'),
(109, 'Ashlesha'),
(110, 'Magha'),
(111, 'Purva Phalguni'),
(112, 'Uttara Phalguni'),
(113, 'Hasta'),
(114, 'Chitta'),
(115, 'Swathi'),
(116, 'Vishakha'),
(117, 'Anuradha'),
(118, 'Jyeshta'),
(119, 'Mula'),
(120, 'Purvashada'),
(121, 'Uttarashada'),
(122, 'Shravana'),
(123, 'Dhanishta'),
(124, 'Shatabhisha'),
(125, 'Purva Bhadrapada'),
(126, 'Uttara Bhadrapada'),
(127, 'Revati');

-- --------------------------------------------------------

--
-- Table structure for table `tblpartnerpreferencerequests`
--

CREATE TABLE IF NOT EXISTS `tblpartnerpreferencerequests` (
  `IdPartnerPreferences` int(11) NOT NULL AUTO_INCREMENT,
  `IdGender` int(11) NOT NULL,
  `MinAge` int(11) NOT NULL,
  `MaxAge` int(11) NOT NULL,
  `IdMaritalStatus` int(11) NOT NULL,
  `MinHieght` int(11) NOT NULL,
  `MaxHeight` int(11) NOT NULL,
  `IdEatingHabit` int(11) NOT NULL,
  `IdDrinkingHabit` int(11) NOT NULL,
  `IdSmokingHabit` int(11) NOT NULL,
  `IdMotherTongue` int(11) NOT NULL,
  `IdReligion` int(11) NOT NULL,
  `IdCaste` int(11) NOT NULL,
  `IdSubCaste` int(11) NOT NULL,
  `IdGothra` int(11) NOT NULL,
  `IdNakshatra` int(11) NOT NULL,
  `IdRashi` int(11) NOT NULL,
  `IdQualification` int(11) NOT NULL,
  `IdEmployement` int(11) NOT NULL,
  `MyExpectation` varchar(150) NOT NULL,
  `IdPersonalDetails` int(11) NOT NULL,
  PRIMARY KEY (`IdPartnerPreferences`),
  UNIQUE KEY `DrinkingHabit` (`IdDrinkingHabit`),
  UNIQUE KEY `DrinkingHabit_2` (`IdDrinkingHabit`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tblrashi`
--

CREATE TABLE IF NOT EXISTS `tblrashi` (
  `IdRashi` int(11) NOT NULL AUTO_INCREMENT,
  `RashiName` varchar(50) NOT NULL,
  PRIMARY KEY (`IdRashi`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=113 ;

--
-- Dumping data for table `tblrashi`
--

INSERT INTO `tblrashi` (`IdRashi`, `RashiName`) VALUES
(101, 'Mesha-Aries'),
(102, 'Vrishabha-Taurus'),
(103, 'Mithuna-Gemini'),
(104, 'Karka-Cancer'),
(105, 'Simha-Leo'),
(106, 'kanya-Virgo'),
(107, 'Tula-Libra'),
(108, 'Vrischika-Scorpio'),
(109, 'Dhanu-Saggitarius'),
(110, 'Makara-Capricorn'),
(111, 'Kumbha-Aquarius'),
(112, 'Meena-Pisces');

-- --------------------------------------------------------

--
-- Table structure for table `tblreligion`
--

CREATE TABLE IF NOT EXISTS `tblreligion` (
  `IdReligion` int(11) NOT NULL AUTO_INCREMENT,
  `ReligionName` varchar(50) NOT NULL,
  PRIMARY KEY (`IdReligion`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `tblreligion`
--

INSERT INTO `tblreligion` (`IdReligion`, `ReligionName`) VALUES
(1, 'Hinduism'),
(2, 'Islam'),
(3, 'Christianity'),
(4, 'Sikhism'),
(5, 'Buddhism'),
(6, 'Jain');

-- --------------------------------------------------------

--
-- Table structure for table `tblsmokinghabit`
--

CREATE TABLE IF NOT EXISTS `tblsmokinghabit` (
  `IdSmokingHabit` int(11) NOT NULL,
  `SmokingHabit` varchar(20) NOT NULL,
  PRIMARY KEY (`IdSmokingHabit`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblsmokinghabit`
--

INSERT INTO `tblsmokinghabit` (`IdSmokingHabit`, `SmokingHabit`) VALUES
(1, 'Yes'),
(2, 'No');

-- --------------------------------------------------------

--
-- Table structure for table `tblsubcaste`
--

CREATE TABLE IF NOT EXISTS `tblsubcaste` (
  `IdSubCaste` int(11) NOT NULL AUTO_INCREMENT,
  `SubCasteName` varchar(50) NOT NULL,
  `IdCaste` int(11) NOT NULL,
  PRIMARY KEY (`IdSubCaste`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=115 ;

--
-- Dumping data for table `tblsubcaste`
--

INSERT INTO `tblsubcaste` (`IdSubCaste`, `SubCasteName`, `IdCaste`) VALUES
(111, 'Daivagna Brahmin', 12),
(112, 'Havyak', 12),
(113, 'Veerashaiva Banajiga', 13),
(114, 'Veerashaiva Panchamasali', 13);

-- --------------------------------------------------------

--
-- Table structure for table `tbluseraccount`
--

CREATE TABLE IF NOT EXISTS `tbluseraccount` (
  `userId` int(20) NOT NULL AUTO_INCREMENT,
  `userName` varchar(30) NOT NULL,
  `userEmail` varchar(30) NOT NULL,
  `userPhone` varchar(12) NOT NULL,
  `userPwd` varchar(15) NOT NULL,
  `userDob` date NOT NULL,
  `userGender` varchar(10) NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Dumping data for table `tbluseraccount`
--

INSERT INTO `tbluseraccount` (`userId`, `userName`, `userEmail`, `userPhone`, `userPwd`, `userDob`, `userGender`) VALUES
(1, 'sanket', 'sanket@gmail.com', '9738511861', 'abcde', '2017-11-28', 'male'),
(2, 'prasad', 'prasadshet1@gmail.com', '9738511861', 'manora', '2017-11-28', 'undefined'),
(3, 'praveen', 'praveenkumardg@gmail.com', '9856471214', 'fsdjfksd', '2017-11-07', 'undefined'),
(4, 'manohar', 'adasnm,d', '786554', 'xcscmn', '2017-11-15', 'male'),
(5, 'saraswati', 'jnsfjn', '4564654', 'mnc smnc', '2017-11-14', 'female'),
(6, 'ratna', 'bsdn', '452354', 'nvmv', '2017-11-20', 'female'),
(7, 'arun', 'mnscb', '8945343', 'nxcbnm', '1990-10-28', 'male'),
(8, 'vilas', 'vilas', '44445', 'vm,v,', '2017-11-13', 'male'),
(10, 'varun', 'sdss', '8465', 'nxcm,mn', '2017-11-20', 'male'),
(11, 'vachana', 'vcvjkx', '798654', 'nbmbc,', '2017-12-13', 'female'),
(12, 'nandini', 'ndsscnnm', '534545', 'bsmncbSJC', '2017-12-12', 'female'),
(13, 'sindu', 'nmnkj', '535435', 'bmnbm', '2017-12-13', 'female'),
(14, 'renuka', 'nandinimr@gmail.com', '9874546545', 'mnnohaea', '0000-00-00', 'Female'),
(15, 'Praveen', 'praveen@gmail.com', '9535341740', 'jjjhsdfj', '0000-00-00', 'Male');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
