SELECT 
    o.id AS organizer_id,
    o.name AS organizer_name,
    e.status,
    COUNT(DISTINCT e.id) AS event_count
FROM users o
LEFT JOIN events e ON o.id = e.organizer_id
GROUP BY o.id, o.name, e.status
ORDER BY o.name, e.status;
