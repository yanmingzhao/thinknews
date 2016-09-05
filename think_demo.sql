-- phpMyAdmin SQL Dump
-- version 4.5.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-09-05 20:11:56
-- 服务器版本： 5.7.11
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `think_demo`
--

-- --------------------------------------------------------

--
-- 表的结构 `think_addlist`
--

CREATE TABLE `think_addlist` (
  `id` int(11) NOT NULL,
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `discribe` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `think_img`
--

CREATE TABLE `think_img` (
  `id` int(11) NOT NULL,
  `src` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `width` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `height` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `detail` varchar(500) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `think_img`
--

INSERT INTO `think_img` (`id`, `src`, `width`, `height`, `title`, `detail`) VALUES
(1, 'http://127.0.0.1:8360/static/upload/1473079628695QQ图片20160905170807.png', '270', '153', 'QQ图片20160905170807.png', '小码哥H5前端培训'),
(2, 'http://127.0.0.1:8360/static/upload/1473080141802QQ图片20160905170807.png', '270', '153', 'QQ图片20160905170807.png', '小码哥H5前端培训'),
(3, 'http://127.0.0.1:8360/static/upload/1473081053252QQ图片20160905170807.png', '270', '153', 'QQ图片20160905170807.png', '小码哥H5前端培训'),
(4, 'http://127.0.0.1:8360/static/upload/1473081053527图片1.png', '1717', '974', '图片1.png', '小码哥H5前端培训'),
(5, 'http://7xt80d.com1.z0.glb.clouddn.com/-BeJ-lBwXyWnW8iFKIG2FWed.jpg', '992', '420', '01.jpg', '小码哥H5前端培训'),
(6, 'http://7xt80d.com1.z0.glb.clouddn.com/sgfYHLHOUIvz65AR5HPEiFh8.jpg', '992', '420', '02.jpg', '小码哥H5前端培训'),
(7, 'http://7xt80d.com1.z0.glb.clouddn.com/Opo3iHZQaOLuhJ-WQmkQTDQ3.jpg', '992', '420', '01.jpg', '小码哥H5前端培训'),
(8, 'http://7xt80d.com1.z0.glb.clouddn.com/yTppDOc3x4oklWC3EXH0EOSG.jpg', '992', '420', '02.jpg', '小码哥H5前端培训'),
(9, 'http://7xt80d.com1.z0.glb.clouddn.com/S4j3PLnU4OFvu0R6-vjlGxab.jpg', '992', '420', '04.jpg', '小码哥H5前端培训'),
(10, 'http://7xt80d.com1.z0.glb.clouddn.com/-EqtXV2uaTqC9Jo8fyVee84V.jpg', '992', '420', '03.jpg', '小码哥H5前端培训'),
(11, 'http://7xt80d.com1.z0.glb.clouddn.com/vaF099gc6fClK59HYzLVe05E.jpg', '992', '420', '图片1.jpg', '小码哥H5前端培训'),
(12, 'http://7xt80d.com1.z0.glb.clouddn.com/p2eW1By3M4tqd6e2H-bIn22c.jpg', '992', '420', '05.jpg', '小码哥H5前端培训'),
(13, 'http://7xt80d.com1.z0.glb.clouddn.com/fRVFmNt9rnKG304etb-_PykD.jpg', '992', '420', '图片2.jpg', '小码哥H5前端培训'),
(14, 'http://7xt80d.com1.z0.glb.clouddn.com/3vlExsZ55VBFG68qoJSU3lvy.jpg', '992', '420', '图片3.jpg', '小码哥H5前端培训'),
(15, 'http://7xt80d.com1.z0.glb.clouddn.com/D8PZmHhujq15EKMhYJcIrL4m.jpg', '992', '420', '图片4.jpg', '小码哥H5前端培训'),
(16, 'http://7xt80d.com1.z0.glb.clouddn.com/pZm9574RNVg6btnRkwwyi2xj.jpg', '992', '420', '图片5.jpg', '小码哥H5前端培训'),
(17, 'http://7xt80d.com1.z0.glb.clouddn.com/H_fNSHcLAtVZRg-TnMThQGl8.jpg', '992', '420', '01.jpg', '小码哥H5前端培训'),
(18, 'http://7xt80d.com1.z0.glb.clouddn.com/m7qxiY1HXXC9WfmkAg1PgyJp.jpg', '992', '420', '02.jpg', '小码哥H5前端培训'),
(19, 'http://7xt80d.com1.z0.glb.clouddn.com/DZhFBtS0V6KosZyUm5ZXe2iE.jpg', '992', '420', '04.jpg', '小码哥H5前端培训'),
(20, 'http://7xt80d.com1.z0.glb.clouddn.com/1hJo6ubneUZpkvfHrF6d6ex5.jpg', '992', '420', '05.jpg', '小码哥H5前端培训'),
(21, 'http://7xt80d.com1.z0.glb.clouddn.com/I9b5-kSJWbbftiGXoD0ISpxe.jpg', '992', '420', '03.jpg', '小码哥H5前端培训'),
(22, 'http://7xt80d.com1.z0.glb.clouddn.com/KaEJHXOaSfIb9XkHAQPXSS5w.jpg', '200', '200', '1.jpg', '小码哥H5前端培训'),
(23, 'http://7xt80d.com1.z0.glb.clouddn.com/JioB_Bipnreh5fN0TmhZLYv6.jpg', '200', '200', '2.jpg', '小码哥H5前端培训'),
(24, 'http://7xt80d.com1.z0.glb.clouddn.com/vBMciKutTJeCEg33tBoJNZeR.jpg', '200', '200', '3.jpg', '小码哥H5前端培训'),
(25, 'http://7xt80d.com1.z0.glb.clouddn.com/j9PQms64EyTF9oDPF6GOdrvv.png', '23', '829', '360_nav_bg.png', '小码哥H5前端培训'),
(26, 'http://7xt80d.com1.z0.glb.clouddn.com/jGjI11q3J5yiJBJrTvcPRyMc.jpg', '180', '224', 'cat.jpg', '小码哥H5前端培训');

-- --------------------------------------------------------

--
-- 表的结构 `think_newtype`
--

CREATE TABLE `think_newtype` (
  `id` int(11) NOT NULL,
  `type` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `think_newtype`
--

INSERT INTO `think_newtype` (`id`, `type`) VALUES
(1, 'node'),
(2, 'javascript');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `think_addlist`
--
ALTER TABLE `think_addlist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `think_img`
--
ALTER TABLE `think_img`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `think_newtype`
--
ALTER TABLE `think_newtype`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `think_addlist`
--
ALTER TABLE `think_addlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- 使用表AUTO_INCREMENT `think_img`
--
ALTER TABLE `think_img`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- 使用表AUTO_INCREMENT `think_newtype`
--
ALTER TABLE `think_newtype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
