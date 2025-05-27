SELECT DISTINCT
    user_id,
    event_id
FROM
    registrations;
SELECT
    user_id,
    event_id,
    COUNT(*) AS registration_count
FROM
    registrations
GROUP BY
    user_id,
    event_id
HAVING
    COUNT(*) = 1;
