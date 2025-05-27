SELECT DISTINCT
    u.id,
    u.name,
    u.email,
    u.registration_date
FROM users u
WHERE u.registration_date >= CURRENT_DATE - INTERVAL '30 days'
  AND NOT EXISTS (
      SELECT 1 
      FROM registrations r 
      WHERE r.user_id = u.id
  )
ORDER BY u.registration_date DESC;
