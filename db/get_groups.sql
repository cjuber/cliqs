select *
from groups g
join group_members m on g.id = m.group_id
where m.user_id = $1