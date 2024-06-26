SELECT c.cookie_id, fv.name, s.size, c.qty, c.price, fv.description, fv.flavorImg
FROM cookie c
LEFT OUTER JOIN flavor fv USING (flavor_id)
LEFT OUTER JOIN size s USING (size_id);

SELECT brownie_id, fv.name, size, qty, price, fv.description, fv.flavorImg
FROM brownie b
LEFT OUTER JOIN flavor fv ON fv.flavor_id = b.flavor2_id
LEFT OUTER JOIN size s ON s.size_id = b.size2_id;


ALTER TABLE snackbox
DROP FOREIGN KEY fk_secondCookie;

ALTER TABLE snackbox
ADD CONSTRAINT fk_secondCookie
FOREIGN KEY (secondCookie_id) REFERENCES flavor (flavor_id) ON DELETE CASCADE; 

SELECT fv.name, s.size, c.qty, c.price, fv.description, fv.flavorImg 
FROM cookie c
LEFT OUTER JOIN flavor fv USING (flavor_id)
LEFT OUTER JOIN size s USING (size_id);

SELECT snackbox_id, fv.name, qty, price, snackImg, fv.description
FROM snackbox sb
JOIN flavor fv ON fv.flavor_id = sb.flavor6_id;

-- SELECT sb.snackbox_id, fv.name
-- FROM snackbox sb
-- LEFT OUTER JOIN flavor fv ON fv.flavor_id = sb.flavor6_id
-- LEFT OUTER JOIN cookie c ON c.description = c.cookie_id;

-- SELECT sb.snackbox_id, fv.name, c.cookie_id
-- FROM snackbox sb
-- LEFT OUTER JOIN flavor fv ON fv.flavor_id = sb.flavor6_id
-- LEFT OUTER JOIN flavor fv ON fv.name = fv.flavor_id;