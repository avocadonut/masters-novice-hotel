-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 26, 2018 at 07:14 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";



--

CREATE TABLE `roomindex` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `pax` int(50) NOT NULL,
  `roomtype` varchar(50) NOT NULL,
  `roomnumber` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



INSERT INTO `roomindex` (`id`, `name`, `pax`, `roomtype`, `roomnumber`, `status`) VALUES
(1, 'Adrian Master Bente uno', 3, 'deluxe', '1401kim', 'active'),
(2, 'adiran', 0, 'Deluxe', 'budoy', ''),
(3, 'juan pedro', 90, 'Economy', '192u2', ''),
(4, 'adrio', 10, 'Suite', 'sdani213', ''),
(5, 'Petersss', 101, 'Economy', '101111', '');



CREATE TABLE `roomname` (
  `id` int(11) NOT NULL,
  `roomnumber` int(50) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


ALTER TABLE `roomindex`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `roomname`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `roomindex`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;


ALTER TABLE `roomname`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

