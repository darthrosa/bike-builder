-- select * from bb_user
-- where username = $1

select * from bb_user a
join bb_customer_order b on b.user_id = a.user_id
where a.username = $1;
