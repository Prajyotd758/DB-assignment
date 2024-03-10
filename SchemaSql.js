//  1] using mysql database
const mysql = require("mysql2");

//connecting to mysql
const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "db-password",
    database: "dbname",
  })
  .promise();

//function to create table
(async () => {
  const productCategory = await pool.query(`create table Product_Category (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  desc TEXT,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modified_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at DATETIME)`);

  const product = await pool.query(`create table product(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  desc TEXT,
  SKU VARCHAR(255) NOT NULL,
  category_id INT NOT NULL,
  inventory_id INT,
  price DECIMAL(10,2) NOT NULL,
  discount_id INT,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modified_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at DATETIME,
  FOREIGN KEY (category_id) REFERENCES Product_Category(id)`);

  const productInventory = await pool.query(`create table Product_inventory (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    quantity INT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modified_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at DATETIME,
    FOREIGN KEY (product_id) REFERENCES Product(id))`);

  const discount = await pool.query(`create table discount (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    desc TEXT,
    discount_percent DECIMAL
    active BOOLEAN NOT NULL DEFAULT TRUE
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modified_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at DATETIME)`);
})();



