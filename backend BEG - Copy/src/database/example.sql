-- --!! create table movie
-- CREATE TABLE IF NOT EXISTS  movie (
--     id BIGSERIAL PRIMARY KEY,
--     title VARCHAR,
--     genre varchar,
--     directed_by varchar,
--     duration INTEGER,
--     synopsis VARCHAR,
--     create_at TIMESTAMP DEFAULT now(),
--     update_at TIMESTAMP
-- );
-- !! DROP TABLE MOVIE
--  DROP TABLE movie;

--  SELECT * FROM movie ORDER BY id ASC;

--  insert into movie (title, genre, directed_by, synopsis) values ('SPiderman', 'action', 'jonson', 'siluman laba-laba' );

-- DELETE  FROM movie WHERE id = 104


-- UPDATE movie SET title= 'punman', genre= '', directed_by= '', synopsis= '', update_at= now()
--      WHERE id= 101 returning *


--TODO CREATE TABLE schedule

-- CREATE TABLE IF NOT EXISTS schedule (
--     id serial PRIMARY KEY,
--     movie_id INTEGER REFERENCES movie(id),
--     theater VARCHAR(255) NOT NULL,
--     start_time TIMESTAMP NOT NULL,
--     end_time TIMESTAMP NOT NULL,
--     available_seats INTEGER NOT NULL
-- );

-- TODO INSERT INTO SCHEDULE

-- insert into schedule (movie_id, theater, available_seats, start_time, end_time) 
-- values ('106', 'CGV21', '', '', '21' );
-- VALUES($1, $2, $3,$4,$5);

--TODO UPDATE SCHEDULE


-- `UPDATE public.schedules
--           SET theater=$2, available_seats=$3, start_time=$4, end_time= $5
--           WHERE schedules_id=$1;
--           `

-- TODO DELETE SCHEDULE

-- `DELETE FROM schedules
--           WHERE movie_id=$1;
--           `

-- --?? CREATE TABLE BOOKING

-- CREATE TABLE IF NOT EXISTS booking(
--      id BIGSERIAL primary key,
--     schedule_id INTEGER REFERENCES  schedule(id),
--     seat VARCHAR (50)
    

-- );