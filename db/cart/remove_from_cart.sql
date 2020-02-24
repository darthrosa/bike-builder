delete from bb_order_items
where order_item_id = $1;
-- join bb_products b on a.product_id = b.product_id
-- where a.customer_order_id = $1;