COUNT(f.feedback_id)
COUNT(DISTINCT f.feedback_id)
SELECT
    u.user_id,
    u.user_name,
    COUNT(DISTINCT f.feedback_id) AS feedback_count
FROM
    users u
JOIN
    feedback f ON u.user_id = f.user_id
GROUP BY
    u.user_id, u.user_name
ORDER BY
    feedback_count DESC
LIMIT 5;
