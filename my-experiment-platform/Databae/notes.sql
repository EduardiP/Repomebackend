-- Krijo tabelën notes
CREATE TABLE IF NOT EXISTS notes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);

-- Shto disa fruta për test
INSERT INTO notes (title) VALUES 
('Apple'),
('Banana'),
('Cherry'),
('Mango'),
('Grapes');
