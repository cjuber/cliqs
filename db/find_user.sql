select id,email, first_name, last_name, password, about,city,state, country, user_img 
from users
where email = $1
