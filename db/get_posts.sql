select * from posts p
join groups g on g.id = p.group_id
join group_members m on p.group_id = m.group_id
join users u on u.id = m.user_id
where m.user_id = $1