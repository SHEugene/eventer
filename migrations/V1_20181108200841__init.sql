CREATE TABLE `User` (
	`id` int (11) NOT NULL AUTO_INCREMENT,
	`name` nvarchar(255) NOT NULL,
	`surname` nvarchar(255) DEFAULT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) DEFAULT NULL,
	`city` nvarchar(255) DEFAULT NULL,
	`profilePhotoS3Key` varchar(255) DEFAULT NULL,
	`country` nvarchar(255) DEFAULT NULL,
	`DOB` date DEFAULT NULL,
	`authorisationType` enum('EMAIL','GOOGLE') DEFAULT 'EMAIL',
	`createdAt` datetime DEFAULT NULL,
	`updatedAt` datetime DEFAULT NULL,
	PRIMARY KEY (`id`)
);
