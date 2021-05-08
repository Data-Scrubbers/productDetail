DROP TABLE IF EXISTS features;

CREATE TABLE features (
  feature_id int primary key,
  product_id INTEGER,
  feature
  varchar,
  feature_value varchar,
  FOREIGN KEY(product_id) REFERENCES products(product_id)
);

COPY features
FROM '/Users/alisonclowes/HR_SEI2/SDC/productDetail/schema/features.csv'
DELIMITER ','
CSV;

CREATE INDEX features_product_id_index ON features (product_id);