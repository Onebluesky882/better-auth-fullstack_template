CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC(10,2) NOT NULL
);

INSERT INTO products (name, price)
VALUES
('Coffee', 3.50),
('Tea', 2.50);
