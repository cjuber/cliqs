update users
set first_name = $1,
last_name = $2,
email = $3,
city = $4,
state= $5,
country = $6,
about = $7
where id = $8