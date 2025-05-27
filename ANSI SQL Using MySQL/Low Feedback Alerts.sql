WITH latest_feedback AS (
    SELECT f.*
    FROM (
        SELECT *,
               ROW_NUMBER() OVER (PARTITION BY f.user_id, f.event_id ORDER BY f.created_at DESC) AS rn
        FROM feedback f
        WHERE f.rating < 3
    ) sub
    WHERE sub.rn = 1
)

SELECT 
    u.id AS user_id,
    u.name AS user_name,
    lf.comment,
    lf.rating,
    e.name AS event_name
FROM latest_feedback lf
JOIN users u ON lf.user_id = u.id
JOIN events e ON lf.event_id = e.id
ORDER BY lf.rating ASC, e.name;
