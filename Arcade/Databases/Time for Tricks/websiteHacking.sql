CREATE PROCEDURE websiteHacking()
  SELECT id,login,name
  FROM users
  WHERE type='user'
  OR true
  ORDER BY id