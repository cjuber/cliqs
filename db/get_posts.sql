select p.first_name,p.last_name,p.group_name,p.title,p.content,p.post_img, p.user_id,p.id from posts p
join group_members m on p.group_id = m.group_id 
where m.user_id = $1