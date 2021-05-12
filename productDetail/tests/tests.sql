
\timing
-- products
SELECT * FROM products LIMIT 5 ;
  -- 16.235ms

-- -- -- Product by ID
\timing
SELECT
      products.product_id AS id,
      product_name AS name,
      slogan,
      product_description AS description,
      category,
      default_price,
      jsonb_agg(json_build_object('feature', f.feature, 'value', f.feature_value)) AS features
    FROM products LEFT JOIN features f ON f.product_id = products.product_id WHERE products.product_id = 950000 GROUP BY products.product_id;
  -- 1000011 products total:
  -- tested product_ids:
    -- 3.085ms for product_id 1;
    -- 12.585ms for product_id 50000
    -- 7.479ms for product_id 500000
    -- 7.455ms for product_id 950000



-- -- Styles

\timing
SELECT
      styles.style_id AS style_id,
      style_name AS name,
      original_price,
      sale_price,
      default_style AS default,
      jsonb_agg(json_build_object('thumbnail_url', p.thumbnail_url, 'url', p.url)) AS photos,
      jsonb_object_agg(
        s.sku_id, json_build_object('quantity', s.quantity, 'size', s.size)
      ) AS skus
    FROM styles LEFT JOIN photos p ON p.style_id = styles.style_id
    LEFT JOIN skus s ON s.style_id = styles.style_id
    WHERE styles.product_id = 950000 GROUP BY styles.style_id;

  -- tested product_ids:
      -- 50000 - 7.690ms
      -- 500000 - 20.807ms
      -- 950000 - 8.861ms


-- -- Related
\timing
SELECT related_product_id FROM related WHERE product_id = 950000;

  -- tested product_ids:
    -- 50000 - 7.655ms
    -- 500000 - 2.435ms
    -- 950000 - 5.420ms