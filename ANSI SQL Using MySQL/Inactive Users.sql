SELECT u.id, u.name, u.email
FROM users u
WHERE NOT EXISTS (
    SELECT 1
    FROM (
        SELECT DISTINCT r.user_id, r.event_id
        FROM registrations r
        JOIN events e ON r.event_id = e.id
        WHERE e.date >= CURRENT_DATE - INTERVAL '90 days'
    ) recent_r
    WHERE recent_r.user_id = u.id
);
