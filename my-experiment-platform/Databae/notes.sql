-- Shembull i thjeshtë
CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    text VARCHAR(255)
);

INSERT INTO notes (text) VALUES ('First note'), ('Second note');
