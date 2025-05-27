SELECT 
    e.id AS event_id,
    e.name AS event_name,
    COUNT(DISTINCT CASE WHEN r.resource_type = 'PDF' THEN r.id END) AS pdf_count,
    COUNT(DISTINCT CASE WHEN r.resource_type = 'image' THEN r.id END) AS image_count,
    COUNT(DISTINCT CASE WHEN r.resource_type = 'link' THEN r.id END) AS link_count
FROM events e
LEFT JOIN resources r ON e.id = r.event_id
GROUP BY e.id, e.name
ORDER BY e.name;
