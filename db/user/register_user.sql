insert into bb_user (
    username,
    password
) values (
    $1,
    $2
)

returning user_id, username;