CREATE TABLE `EventUser` (
	`id` int (11) NOT NULL AUTO_INCREMENT,
	`EventId` int NOT NULL,
	`UserId` int NOT NULL,
	`createdAt` datetime DEFAULT NULL,
	`updatedAt` datetime DEFAULT NULL,
	PRIMARY KEY (`id`),
 	KEY `fk_event_user_user` (`UserId`),
  	KEY `fk_event_user_event` (`EventId`),
  	CONSTRAINT `fk_event_user_user` FOREIGN KEY (`UserId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  	CONSTRAINT `fk_event_user_event` FOREIGN KEY (`EventId`) REFERENCES `Event` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
