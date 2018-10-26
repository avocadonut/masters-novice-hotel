-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 26, 2018 at 04:57 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `roomlist`
--

-- --------------------------------------------------------

--
-- Table structure for table `roomname`
--

CREATE TABLE `roomname` (
  `id` int(11) NOT NULL,
  `roomnumber` int(50) NOT NULL,
  `roomtype` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roomname`
--

INSERT INTO `roomname` (`id`, `roomnumber`, `roomtype`, `status`) VALUES
(4, 101, 'Economy', 'Unavailable'),
(5, 102, 'Economy', 'Unavailable'),
(6, 201, 'Suite', 'Available'),
(7, 202, 'Suite', 'Available'),
(8, 301, 'Deluxe', 'Available'),
(9, 302, 'Deluxe', 'Available'),
(10, 105, 'Economy', ''),
(12, 106, 'Economy', ''),
(13, 203, 'Suite', ''),
(14, 205, 'Suite', 'Unavailable');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `roomname`
--
ALTER TABLE `roomname`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roomnumber` (`roomnumber`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `roomname`
--
ALTER TABLE `roomname`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
