insert into bb_order_items (
    customer_order_id,
    product_id,
    price
) values (
    ${order_id},
    ${product_id},
    ${price}
);