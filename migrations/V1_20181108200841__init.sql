CREATE TABLE `User` (
	`id` int (11) NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`surname` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) DEFAULT NULL,
	`city` varchar(255) DEFAULT NULL,
	`profilePhotoS3Key` varchar(255) DEFAULT NULL,
	`country` varchar(255) DEFAULT NULL,
	`DOB` date DEFAULT NULL,
	`authorisationType` enum('EMAIL','GOOGLE') DEFAULT 'EMAIL',
	PRIMARY KEY (`id`)
);
