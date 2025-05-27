SELECT 
    u.city,
    COUNT(DISTINCT r.user_id) AS distinct_user_count
FROM registrations r
JOIN users u ON r.user_id = u.id
GROUP BY u.city
ORDER BY distinct_user_count DESC
LIMIT 5;
