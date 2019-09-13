select id,email, first_name, last_name, password 
from users
where email = $1
