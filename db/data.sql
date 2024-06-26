INSERT INTO flavor (name, flavorImg, description)
VALUES
('Chocolate Chip Cookie', NULL, 'chocolate chips, cookie'),
('Oatmeal Raisin Cookie', NULL, 'oatmeal cookie, raisins'),
('Cookies & Cream Cookie', NULL, 'chocolate cookie, white chocolate chips'),
('Brownie Cookie', NULL, 'brownie cookies, fudge'),
('Sugar Cookie', NULL, 'sugar cookie'),
('Golden Oreo Stuffed Cookie', NULL, 'vanilla cookie, cream'),
('Peanut Butter Cookie', NULL, 'peanut butter cookie, chocolate chips '),
('Milk Chocolate Brownie', NULL, 'chocolate brownie, milk chocolate chips'),
('White Chocolate Brownie', NULL, 'white chocolate brownie, white chocolate chips'),
('Red Velvet Cheesecake Brownie', NULL, 'chocolate brownie, red velvet cream cheese icing'),
('Turtle Brownie', NULL, 'chocolate brownie, pecans, salted caramel'),
('Peanut Butter Brownie', NULL, 'chocolate brownie, peanut butter chips'),
('Fudge Brownie', NULL, 'chocolate brownie, fudge'),
('Red Velvet Cheesecake', NULL, 'red velvet cheesecake, whip cream topping, chocolate crust'),
('New York Cheesecake', NULL, 'new york style cheesecake, graham cracker crust'),
('Oreo Cheesecake', NULL, 'cheesecake topped with oreo cookie, chocolate drizzle, oreo cookie crust'),
('Cherry Cheesecake', NULL, 'cheesecake topped with fresh cherries, cherry drizzle, graham cracker crust'),
('Strawberry Cheesecake', NULL, 'cheesecake topped with fresh strawberries, strawberry drizzle, graham cracker crust'),
('Chocolate CupCake', NULL, 'chocolate cake, milk chocolate icing, sprinkles'),
('Wedding CupCake', NULL, 'wedding cake, cream cheese icing, sprinkles'),
('Sensational Strawberry CupCake', NULL, 'strawberry cake, strawberry cream chess icing, sprinkles'),
('Peach Cobbler CupCake', NULL, 'peach cobbler infused cake, vanilla icing'),
('Vanilla CupCake', NULL, 'vanilla cake, vanilla icing, sprinkles'),
('Cinnamon Roll CupCake', NULL, 'cinnamon roll infused cake, cinnamon cream chess icing, cinnamon '),
('Tropical Punch Craxk Grapes', NULL, 'tropical punch coated grapes dipped in candy rocks'),
('Strawberry Candy Craxk Grapes', NULL, 'strawberry coated grapes dipped in candy rocks'),
('Sour Watermelon Craxk Grapes', NULL, 'sour watermelon coated grapes dipped in candy rocks'),
('Cotton Candy Craxk Grapes', NULL, 'cotton candy coated grapes dipped in candy rocks'),
('Milk Chocolate Strawberries', NULL, 'milk chocolate covered strawberries '),
('White Chocolate Strawberries', NULL, 'white chocolate covered strawberries'),
('Candy Strawberries', NULL, 'cream cheese icing covered strawberries with sprinkles'),
('Homemade Rice Krispies', NULL, 'rice krispies, marshmellows'),
('Peanut Butter Krispies', NULL, 'rice krispies, marshmellows, peanut butter chips'),
('Banana Pudding ', NULL, 'vanilla wafers, bananas, custard'),
('Cinnamon Rolls', NULL, 'cinnamon rolls drizzled with cream cheese icing'),
('The OoeyGooey', NULL, 'fudge cookie 4pk, turtle brownie 2pk, fudge brownie 2pk, chocolate cupcake 4pk, peanut butter krispies 6pk'),
('The OG ', NULL, 'chocolate chip cookie 4pk, oatmeal cookie 4pk, milk chocolate brownie 2pk, white chocolate brownie 2pk, vanilla cupcake 4pk'),
('The Strawberry Blonde', NULL, 'sugar cookie 4pk, red velvet cheesecake brownie 2pk, wedding cupcake 4pk, sensational strawberry cupcake 4pk, peanut butter krispies 6pk'),
('The S.O.S', NULL, 'cookies & cream cookie 4pk, golden oreo stuffed cookie 4pk, peanut butter brownie 2pk, cinnamon roll cupcake 4pk, banana pudding 8oz');

INSERT INTO size (size_id, size)
VALUES 
(1, 'Slice'),
(2, '6"'),
(3, '10"'),
(4, '12"'),
(5, '2pk'),
(6, '4pk'),
(7, '6pk'),
(8, '8pk'),
(9, '10pk'),
(10, '12pk'),
(11, '20pk'),
(12, '24pk'),
(13, '8oz'),
(14, '16oz');


INSERT INTO cookie (flavor_id, size_id, qty, price, description)
VALUES
(1, 6, 1, 3, 'Chocolate Chip Cookie'),
(2, 6, 1, 3, 'Oatmeal Raisin Cookie'),
(3, 6, 1, 3, 'Cookies & Cream Cookie'),
(4, 6, 1, 3, 'Brownie Cookie'),
(5, 6, 1, 3, 'Sugar Cookie'),
(6, 6, 1, 3, 'Golden Oreo Stuffed Cookie'),
(7, 6, 1, 3, 'Peanut Butter Cookie');

INSERT INTO brownie (flavor2_id, size2_id, qty, price, description)
VALUES
(8, 5, 1, 5, 'Milk Chocolate Brownie'),
(9, 5, 1, 5, 'White Chocolate Brownie'),
(10, 5, 1, 5, 'Red Velvet Cheesecake Brownie'),
(11, 5, 1, 5, 'Turtle Brownie'),
(12, 5, 1, 5, 'Peanut Butter Brownie'),
(13, 5, 1, 5, 'Fudge Brownie');

INSERT INTO cake (flavor3_id, size3_id, qty, price, description)
VALUES
(14, 1, 1, 5, 'Red Velvet Cheesecake'),
(15, 1, 1, 5, 'New York Cheesecake'),
(16, 1, 1, 5, 'Oreo Cheesecake'),
(17, 1, 1, 5, 'Cherry Cheesecake'),
(18, 1, 1, 5, 'Strawberry Cheesecake');

INSERT INTO cupcake (flavor4_id, size4_id, qty, price, description)
VALUES
(19, 6, 1, 6, 'Chocolate CupCake'),
(20, 6, 1, 6, 'Wedding CupCake'),
(21, 6, 1, 6, 'Sensational Strawberry CupCake'),
(22, 6, 1, 6, 'Peach Cobbler CupCake'),
(23, 6, 1, 6, 'Vanilla CupCake'),
(24, 6, 1, 6, 'Cinnamon Roll CupCake');

INSERT INTO specialty (flavor5_id, size5_id, qty, price, description)
VALUES
(25, 9, 1, 12, 'Tropical Punch Craxk Grapes'),
(26, 9, 1, 12, 'Strawberry Candy Craxk Grapes'),
(27, 9, 1, 12, 'Sour Watermelon Craxk Grapes'),
(28, 9, 1, 12, 'Cotton Candy Craxk Grapes'),
(29, 10, 1, 20, 'Milk Chocolate Strawberries'),
(30, 10, 1, 20, 'White Chocolate Strawberries'),
(31, 10, 1, 20, 'Candy Strawberries'),
(32, 7, 1, 14, 'Homemade Rice Krispies'),
(33, 7, 1, 14, 'Peanut Butter Krispies'),
(34, 13, 1, 12, 'Banana Pudding'),
(35, 10, 1, 16, 'Cinnamon Rolls');

INSERT INTO snackbox (flavor6_id, qty, price, snackImg, description)
VALUES
(36, 1, 30, NULL, 'The OoeyGooey'),
(37, 1, 30, NULL, 'The OG'),
(38, 1, 35, NULL, 'The Strawberry Blonde'),
(39, 1, 40, NULL, 'The S.O.S');

INSERT INTO user (fName, lName, email, username, password)
VALUES
('juwawn', 'clark', 'juwawn@mscodingacademies.org', 'juwawnclark13', 'firstTest321');

UPDATE snackbox
SET snackImg = 'ooeyGooey.jpg'
WHERE snackbox_id = 1;

UPDATE snackbox
SET snackImg = 'og.jpg'
WHERE snackbox_id = 2;

UPDATE snackbox
SET snackImg = 'strawberryBlonde.jpg'
WHERE snackbox_id = 3;

UPDATE snackbox
SET snackImg = 's.o.s.jpg'
WHERE snackbox_id = 4;

UPDATE flavor
SET flavorImg = 'cinnamonRolls.jpg'
WHERE flavor_id = 35;

UPDATE flavor
SET flavorImg = 'ooeyGooey.jpg'
WHERE flavor_id = 36;

UPDATE flavor
SET flavorImg = 'og.jpg'
WHERE flavor_id = 37;

UPDATE flavor
SET flavorImg = 'strawberryBlonde.jpg'
WHERE flavor_id = 38;

UPDATE flavor
SET flavorImg = 's.o.s.jpg'
WHERE flavor_id = 39;