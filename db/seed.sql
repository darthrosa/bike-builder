create table bb_user (
    user_id serial primary key,
    username varchar(100) not null,
    password varchar(250) not null
);

create table bb_customer_order (
    customer_order_id serial primary key,
    user_id int references bb_user(user_id),
    paid boolean
);

create table bb_products (
    product_id serial primary key,
    product_name varchar(50) not null,
    product_img varchar(250),
    product_description text,
    price decimal not null,
    category_id int references bb_category(category_id),
    skill_lvl_id int references bb_skill_lvl(skill_lvl_id)
);

create table bb_order_items (
    order_item_id serial primary key,
    customer_order_id int references bb_customer_order(customer_order_id),
    product_id int references bb_products(product_id),
    price decimal
);

create table bb_category (
    category_id serial primary key,
    category_name varchar(30)
);

create table bb_skill_lvl (
    skill_lvl_id serial primary key,
    skill_lvl_name varchar(30)
);