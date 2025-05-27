SELECT
    DATE(u.registration_date) AS registration_day,
    COUNT(DISTINCT u.id) AS new_user_count
FROM users u
WHERE u.registration_date >= CURRENT_DATE - INTERVAL '6 days'
GROUP BY registration_day
ORDER BY registration_day ASC;
