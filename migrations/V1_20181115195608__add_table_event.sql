CREATE TABLE `Event` (
	`id` int (11) NOT NULL AUTO_INCREMENT,
	`AuthorId` int NOT NULL,
	`EventPlaceId` int NOT NULL,
	`type` enum('OPEN','CLOSED') DEFAULT 'OPEN',
	`title` nvarchar(255) NOT NULL,
	`description` nvarchar(255) DEFAULT NULL,
	`maxPeople` int DEFAULT NULL,
	`reason` nvarchar(255) DEFAULT NULL,
	`startedTime` datetime DEFAULT NULL,
	`createdAt` datetime DEFAULT NULL,
	`updatedAt` datetime DEFAULT NULL,
	PRIMARY KEY (`id`),
 	KEY `fk_event_event_place` (`EventPlaceId`),
  	KEY `fk_event_user` (`AuthorId`),
  	CONSTRAINT `fk_event_user` FOREIGN KEY (`AuthorId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  	CONSTRAINT `fk_event_event_place` FOREIGN KEY (`EventPlaceId`) REFERENCES `EventPlace` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
