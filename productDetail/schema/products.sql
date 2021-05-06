DROP TABLE IF EXISTS imported_products;
-- CREATE TABLE imported_products (
--   product_id varchar primary key,
--   product_name
--   varchar,
--   slogan
--   varchar,
--   product_description varchar,
--   category varchar,
--   default_price varchar
-- );

-- COPY imported_products
-- FROM '/Users/alisonclowes/HR_SEI2/SDC/productDetail/product.csv'
-- DELIMITER ','
-- CSV HEADER
-- ;

-- Load projects from import
--
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

-- CREATE TABLE products (
--   product_id serial primary key,
--   product_name
--   varchar,
--   slogan
--   varchar,
--   product_description varchar,
--   category varchar,
--   default_price varchar,
--   created_at TIMESTAMPTZ not null Default Now(),
--   updated_at TIMESTAMPTZ not null Default Now()
-- );

-- INSERT INTO products (product_id, product_name, slogan, product_description, category, default_price, created_at, updated_at)
--   SELECT
--     CAST(product_id AS integer)          AS product_id,
--     product_name        AS product_name,
--     slogan              AS slogan,
--     product_description AS product_description,
--     category            AS category,
--     default_price       AS default_price,
--     now()               AS created_at,
--     now()               AS updated_at
--   FROM imported_products;
-- ;