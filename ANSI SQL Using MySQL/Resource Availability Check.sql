SELECT DISTINCT
    e.event_id,
    e.event_name
FROM
    events e
LEFT JOIN
    resources r ON e.event_id = r.event_id
WHERE
    r.resource_id IS NULL;
