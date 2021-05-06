CREATE TABLE photos (
  photo_id INT,
  style_id INT,
  thumbnail_url varchar,
  url varchar,
  FOREIGN KEY(style_id) REFERENCES styles(style_id)
);

COPY photos
FROM '/Users/alisonclowes/HR_SEI2/SDC/productDetail/schema/photos.csv'
DELIMITER ','
CSV HEADER
;