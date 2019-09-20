select group_id, message from chat_messages
where group_id = $1;