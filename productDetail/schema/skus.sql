DROP TABLE IF EXISTS skus;

CREATE TABLE skus (
  sku_id int primary key,
  style_id INTEGER,
  size
  VARCHAR,
  quantity VARCHAR,
  FOREIGN KEY(style_id) REFERENCES styles(style_id)
);

COPY skus
FROM '/Users/alisonclowes/HR_SEI2/SDC/productDetail/schema/skus.csv'
DELIMITER ','
CSV HEADER;

CREATE INDEX skus_style_id_index ON skus (style_id);