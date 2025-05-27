SELECT DISTINCT e.id, e.name, e.city, e.date
FROM events e
JOIN registrations r ON e.id = r.event_id
JOIN users u ON u.id = r.user_id
WHERE u.id = :userId
  AND e.city = u.city
  AND e.date >= CURRENT_DATE
ORDER BY e.date ASC;