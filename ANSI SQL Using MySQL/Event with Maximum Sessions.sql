WITH session_counts AS (
    SELECT 
        e.id AS event_id,
        e.name AS event_name,
        COUNT(DISTINCT s.id) AS session_count
    FROM events e
    LEFT JOIN sessions s ON e.id = s.event_id
    GROUP BY e.id, e.name
)

SELECT 
    event_id,
    event_name,
    session_count
FROM session_counts
WHERE session_count = (
    SELECT MAX(session_count) FROM session_counts
);
