CREATE PROCEDURE travelDiary()
BEGIN
	SELECT GROUP_CONCAT(DISTINCT country ORDER BY country SEPARATOR ';') AS countries
  FROM diary;
END

