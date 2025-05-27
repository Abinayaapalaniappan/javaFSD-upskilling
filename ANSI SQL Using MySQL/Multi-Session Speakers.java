SELECT
    speaker_name,
    COUNT(DISTINCT session_id) AS unique_session_count
FROM
    sessions
GROUP BY
    speaker_name
HAVING
    COUNT(DISTINCT session_id) > 1;