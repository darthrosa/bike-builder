update bb_user
set password = $1
where user_id = $2;

returning bb_user;