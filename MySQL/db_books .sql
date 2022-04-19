

CREATE TABLE cetagory(
	category_id int PRIMARY KEY AUTO_INCREMENT,
	category_name varchar(45),
	category_description varchar(255)
);

CREATE TABLE book(
	book_id int PRIMARY KEY AUTO_INCREMENT,
	book_name varchar(45),
	price DECIMAL(6,2),
	category_id int,
	book_description varchar(255),
	book_image blob,
	book_quantity int,
	discount int,
	discount_price DECIMAL(6,2),
	constraint book_cat_id_fk FOREIGN KEY(category_id) REFERENCES cetagory(category_id)
);

CREATE TABLE payment(
	payment_id int PRIMARY KEY AUTO_INCREMENT,
	payment_type varchar(45)
);

CREATE TABLE users(
	user_id int PRIMARY KEY AUTO_INCREMENT,
	user_name varchar(45),
	user_email varchar(45),
	user_pass varchar(45),
	user_address varchar(45),
	user_phonenumber varchar(45)
);

CREATE TABLE orders(
	order_id int PRIMARY KEY AUTO_INCREMENT,
	status varchar(45),
	user_id int,
	order_date date,
	payment_Id int,
	constraint order_user_id_fk FOREIGN KEY(user_id) references users(user_id),
	constraint order_payment_id_fk foreign key(payment_id) references payment(payment_Id)
);


CREATE TABLE orderdetail(
	orderdetail_id int PRIMARY KEY AUTO_INCREMENT,
	order_id int,
	book_id int,
	quantity int,
	date VARCHAR(45),
	price decimal(6,2),
	discount int,
	constraint order_order_id_fk FOREIGN KEY(order_id) references orders(order_id),
	constraint order_book_id_fk foreign key(book_id) references book(book_Id)
);