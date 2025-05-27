SELECT 
    e.id AS event_id,
    e.name AS event_name,
    COUNT(DISTINCT s.id) AS session_count
FROM events e
JOIN sessions s ON e.id = s.event_id
WHERE s.start_time::time >= '10:00:00'
  AND s.start_time::time < '12:00:00'
GROUP BY e.id, e.name
ORDER BY session_count DESC;
