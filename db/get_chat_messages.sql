select group_id, message,user_name from chat_messages
where group_id = $1;