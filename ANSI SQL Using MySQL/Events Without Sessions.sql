SELECT DISTINCT
    e.event_id,
    e.event_name,
    e.event_date
FROM 
    events e
LEFT JOIN 
    sessions s ON e.event_id = s.event_id
WHERE 
    s.session_id IS NULL;
