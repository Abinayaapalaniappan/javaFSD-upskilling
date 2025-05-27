SELECT 
    e.event_id,
    e.event_name,
    e.event_date,
    COUNT(DISTINCT r.registration_id) AS total_registrations,
    ROUND(AVG(DISTINCT f.rating), 1) AS avg_feedback_rating
FROM 
    events e
LEFT JOIN 
    registrations r ON e.event_id = r.event_id
LEFT JOIN 
    feedback f ON e.event_id = f.event_id
WHERE 
    e.status = 'completed'
GROUP BY 
    e.event_id, e.event_name, e.event_date
ORDER BY 
    e.event_date DESC;
