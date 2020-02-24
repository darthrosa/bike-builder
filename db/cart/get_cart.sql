select * from bb_order_items a
join bb_products b on a.product_id = b.product_id
where a.customer_order_id = $1;