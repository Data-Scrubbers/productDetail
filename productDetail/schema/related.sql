DROP TABLE IF EXISTS related;

CREATE TABLE related (
  related_id int primary key,
  product_id INTEGER,
  related_product_id varchar,
  FOREIGN KEY(product_id) REFERENCES products(product_id)
);

COPY related
FROM '/Users/alisonclowes/HR_SEI2/SDC/productDetail/schema/related.csv'
DELIMITER ','
CSV HEADER;