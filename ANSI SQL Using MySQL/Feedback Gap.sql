SELECT 
    e.id AS event_id,
    e.name AS event_name,
    COUNT(DISTINCT r.user_id) AS registration_count
FROM events e
JOIN registrations r ON e.id = r.event_id
LEFT JOIN feedback f ON e.id = f.event_id
GROUP BY e.id, e.name
HAVING COUNT(f.id) = 0
ORDER BY registration_count DESC;
