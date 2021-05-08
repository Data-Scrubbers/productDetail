DROP TABLE IF EXISTS styles;

CREATE TABLE styles (
  style_id int primary key,
  product_id INTEGER,
  style_name
  varchar,
  sale_price varchar,
  original_price
  varchar,
  default_style BOOLEAN,
  FOREIGN KEY(product_id) REFERENCES products(product_id)
);

COPY styles
FROM '/Users/alisonclowes/HR_SEI2/SDC/productDetail/schema/styles.csv'
DELIMITER ','
CSV HEADER;

CREATE INDEX styles_product_id_index ON styles (product_id);

CREATE INDEX styles_style_id_index ON styles (style_id);