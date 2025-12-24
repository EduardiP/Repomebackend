CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT
);

INSERT INTO notes (title, content) VALUES
('Shënimi i parë', 'Ky është shembulli i parë.'),
('Shënimi i dytë', 'Ky është shembulli i dytë.');
