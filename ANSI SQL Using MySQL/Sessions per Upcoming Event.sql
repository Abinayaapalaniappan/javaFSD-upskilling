COUNT(DISTINCT s.id) AS session_count
SELECT 
    e.id AS event_id,
    e.name AS event_name,
    e.date AS event_date,
    COUNT(DISTINCT s.id) AS session_count
FROM events e
LEFT JOIN sessions s ON e.id = s.event_id
WHERE e.date >= CURRENT_DATE
GROUP BY e.id, e.name, e.date
ORDER BY e.date ASC;
