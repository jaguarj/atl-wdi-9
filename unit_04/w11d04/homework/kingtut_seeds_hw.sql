TRUNCATE TABLE USERS;
TRUNCATE TABLE TUTS;

ALTER SEQUENCE users_id_seq RESTART WITH 1;
ALTER SEQUENCE tuts_id_seq RESTART WITH 1;

INSERT INTO users(first_name, last_name, email, username, created_at, updated_at)
VALUES ('Josh','Seipel', '123@eat.me', 'Jaguarj', ' ', ' ');

INSERT INTO users(first_name, last_name, email, username, created_at, updated_at)
VALUES ('Jimmy','Jazz', 'jj@materials.io', 'JamMaster', ' ', ' ');

-- TUTS Data --

INSERT INTO tuts(user_id, name, link, created_at, updated_at)
VALUES (1, 'CSS Media Queries', 'https://responsivedesign.is/develop/browser-feature-support/media-queries-for-common-device-breakpoints/', ' ', ' ');

INSERT INTO tuts(user_id, name, link, created_at, updated_at)
VALUES (2, 'CSS Media Queries', 'https://responsivedesign.is/develop/browser-feature-support/media-queries-for-common-device-breakpoints/', ' ', ' ');






