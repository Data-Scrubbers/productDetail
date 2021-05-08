
DROP TABLE IF EXISTS products;

CREATE TABLE products (
  product_id INT primary key,
  product_name
  varchar,
  slogan
  varchar,
  product_description varchar,
  category varchar,
  default_price varchar
);

COPY products
FROM '/Users/alisonclowes/HR_SEI2/SDC/productDetail/schema/product.csv'
DELIMITER ','
CSV HEADER
;
