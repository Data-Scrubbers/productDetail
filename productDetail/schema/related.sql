DROP TABLE IF EXISTS related;

CREATE TABLE related (
  related_id INT PRIMARY KEY,
  product_id INTEGER,
  related_product_id VARCHAR,
  FOREIGN KEY(product_id) REFERENCES products(product_id)
);

COPY related
FROM '/Users/alisonclowes/HR_SEI2/SDC/productDetail/schema/related.csv'
DELIMITER ','
CSV HEADER;

CREATE INDEX related_product_id_index ON related (product_id);