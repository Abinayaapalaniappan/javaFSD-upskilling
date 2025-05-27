SELECT
    u.user_id,
    u.user_name,
    COUNT(DISTINCT r.event_id) AS events_attended,
    COUNT(DISTINCT f.feedback_id) AS feedbacks_submitted
FROM
    users u
LEFT JOIN
    registrations r ON u.user_id = r.user_id
LEFT JOIN
    feedback f ON u.user_id = f.user_id
GROUP BY
    u.user_id, u.user_name
HAVING
    COUNT(DISTINCT r.event_id) > 0 OR COUNT(DISTINCT f.feedback_id) > 0
ORDER BY
    events_attended DESC, feedbacks_submitted DESC;
