insert into bb_customer_order (
    user_id,
    paid
) values (
    $1,
    false
)

returning customer_order_id, paid;