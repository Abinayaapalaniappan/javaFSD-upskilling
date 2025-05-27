WITH latest_feedback AS (
    SELECT f.*
    FROM (
        SELECT *,
               ROW_NUMBER() OVER (PARTITION BY user_id, event_id ORDER BY created_at DESC) AS rn
        FROM feedback
    ) f
    WHERE f.rn = 1
)

SELECT 
    e.id,
    e.name,
    e.city,
    e.date,
    AVG(lf.rating) AS average_rating,
    COUNT(lf.id) AS feedback_count
FROM events e
JOIN latest_feedback lf ON e.id = lf.event_id
GROUP BY e.id, e.name, e.city, e.date
HAVING COUNT(lf.id) >= 10
ORDER BY average_rating DESC;
