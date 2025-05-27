SELECT
    event_id,
    AVG(DISTINCT TIMESTAMPDIFF(MINUTE, start_time, end_time)) AS avg_session_duration_minutes
FROM
    sessions
GROUP BY
    event_id;
