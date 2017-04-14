DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tuts;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(255),
	last_name VARCHAR (255),
	email VARCHAR(255),
	username VARCHAR(255),
	created_at NOT NULL DEFAULT NOW(),
	updated_at NOT NULL DEFAULT NOW()
);

CREATE TABLE tuts (
    id SERIAL PRIMARY KEY,
    id SERIAL FOREIGN KEY(user_id),
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    link TEXT,
    created_at NOT NULL DEFAULT NOW(),
	updated_at NOT NULL DEFAULT NOW()
);
