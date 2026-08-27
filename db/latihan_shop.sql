-- ============================================
-- LATIHAN QA DATABASE - Toko Online
-- Skema + Seed Data
-- ============================================

DROP TABLE IF EXISTS order_items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS customers CASCADE;

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    city VARCHAR(50),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    price NUMERIC(10,2) NOT NULL,
    stock INT NOT NULL DEFAULT 0
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id),
    order_date TIMESTAMP DEFAULT NOW(),
    status VARCHAR(20) DEFAULT 'pending',  -- pending, paid, shipped, cancelled
    total NUMERIC(10,2)
);

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id),
    product_id INT REFERENCES products(id),
    quantity INT NOT NULL,
    price NUMERIC(10,2) NOT NULL
);

-- ============ SEED DATA ============

INSERT INTO customers (name, email, city) VALUES
('Budi Santoso', 'budi@gmail.com', 'Jakarta'),
('Siti Rahayu', 'siti@yahoo.com', 'Bandung'),
('Andi Wijaya', 'andi@gmail.com', 'Jakarta'),
('Dewi Lestari', 'dewi@outlook.com', 'Surabaya'),
('Rizky Pratama', 'rizky@gmail.com', 'Bandung'),
('Maya Anggraini', 'maya@yahoo.com', 'Yogyakarta'),
('Fajar Nugroho', 'fajar@gmail.com', 'Jakarta'),
('Indah Permata', 'indah@outlook.com', 'Semarang'),
('Agus Setiawan', 'agus@gmail.com', 'Surabaya'),
('Rina Marlina', 'rina@yahoo.com', 'Medan');

INSERT INTO products (name, category, price, stock) VALUES
('Kaos Polos', 'Fashion', 75000, 100),
('Celana Jeans', 'Fashion', 150000, 50),
('Sepatu Sneakers', 'Fashion', 350000, 30),
('Laptop 14 inch', 'Elektronik', 8500000, 10),
('Mouse Wireless', 'Elektronik', 120000, 80),
('Keyboard Mechanical', 'Elektronik', 450000, 40),
('Buku Novel', 'Buku', 85000, 200),
('Buku Resep Masakan', 'Buku', 110000, 150),
('Panci Set', 'Rumah Tangga', 320000, 25),
('Blender', 'Rumah Tangga', 280000, 35);

INSERT INTO orders (customer_id, order_date, status, total) VALUES
(1, '2024-01-05 10:00:00', 'paid', 225000),
(1, '2024-02-14 14:30:00', 'shipped', 450000),
(2, '2024-01-20 09:15:00', 'paid', 8500000),
(3, '2024-03-01 11:00:00', 'cancelled', 75000),
(4, '2024-03-10 16:45:00', 'shipped', 165000),
(5, '2024-02-28 13:20:00', 'paid', 570000),
(6, '2024-04-02 10:05:00', 'pending', 120000),
(7, '2024-04-15 15:30:00', 'paid', 320000),
(8, '2024-05-01 08:00:00', 'pending', 110000),
(9, '2024-05-20 12:00:00', 'paid', 350000),
(10, '2024-06-01 17:00:00', 'shipped', 280000);

INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
-- Order 1: 2 Kaos + 1 Celana
(1, 1, 2, 75000),
(1, 2, 1, 150000),
-- Order 2: 3 Mouse Wireless
(2, 5, 3, 120000),
-- Order 3: 1 Laptop
(3, 4, 1, 8500000),
-- Order 4: 1 Kaos
(4, 1, 1, 75000),
-- Order 5: 1 Keyboard + 2 Buku Novel
(5, 6, 1, 450000),
(5, 7, 2, 85000),
-- Order 6: 1 Mouse
(6, 5, 1, 120000),
-- Order 7: 1 Panci Set
(7, 9, 1, 320000),
-- Order 8: 1 Buku Resep
(8, 8, 1, 110000),
-- Order 9: 1 Sepatu
(9, 3, 1, 350000),
-- Order 10: 1 Blender
(10, 10, 1, 280000);
