SELECT 
    e.id AS event_id,
    e.name AS event_name,
    COUNT(DISTINCT r.user_id) AS registration_count
FROM events e
JOIN registrations r ON e.id = r.event_id
GROUP BY e.id, e.name
ORDER BY registration_count DESC
LIMIT 3;
