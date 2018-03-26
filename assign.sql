-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2018 at 07:53 AM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assign`
--

-- --------------------------------------------------------

--
-- Table structure for table `call`
--

CREATE TABLE `call` (
  `id` int(10) NOT NULL,
  `question` varchar(100) NOT NULL,
  `answer` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `call`
--

INSERT INTO `call` (`id`, `question`, `answer`) VALUES
(1, 'break fast?', 'n'),
(2, 'medicians?', 'taken'),
(3, 'break fast?', 'n'),
(4, 'medicians?', 'taken'),
(5, 'break fast?', 'n'),
(6, 'medicians?', 'taken');

-- --------------------------------------------------------

--
-- Table structure for table `calldetails`
--

CREATE TABLE `calldetails` (
  `subqueid` int(10) NOT NULL,
  `subquestion` varchar(100) NOT NULL,
  `answer` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `calldetails`
--

INSERT INTO `calldetails` (`subqueid`, `subquestion`, `answer`) VALUES
(1, 'work?', 'done'),
(2, 'work?', 'done'),
(3, 'work?', 'done');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `call`
--
ALTER TABLE `call`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `calldetails`
--
ALTER TABLE `calldetails`
  ADD PRIMARY KEY (`subqueid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `call`
--
ALTER TABLE `call`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `calldetails`
--
ALTER TABLE `calldetails`
  MODIFY `subqueid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
