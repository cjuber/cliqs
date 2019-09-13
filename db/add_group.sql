insert into groups
(img,group_name,private,searchable,description)
values
($1,$2,$3,$4,$5)
returning id
