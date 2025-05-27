WITH unique_feedback AS (
    SELECT 
        e.city,
        f.user_id,
        AVG(f.rating) AS avg_rating_per_user
    FROM events e
    JOIN feedback f ON e.id = f.event_id
    GROUP BY e.city, f.user_id
)

SELECT 
    city,
    AVG(avg_rating_per_user) AS average_rating
FROM unique_feedback
GROUP BY city
ORDER BY average_rating DESC;
