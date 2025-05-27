SELECT DISTINCT
    s1.event_id,
    s1.id AS session1_id,
    s1.start_time AS session1_start,
    s1.end_time AS session1_end,
    s2.id AS session2_id,
    s2.start_time AS session2_start,
    s2.end_time AS session2_end
FROM sessions s1
JOIN sessions s2 
    ON s1.event_id = s2.event_id
    AND s1.id < s2.id  -- avoid self-join and duplicate pairs
    AND s1.start_time < s2.end_time
    AND s2.start_time < s1.end_time
ORDER BY s1.event_id, s1.start_time;
