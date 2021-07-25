CREATE PROCEDURE nullIntern()
BEGIN
	SELECT COUNT(id) as number_of_nulls
  FROM departments
  WHERE description IS null OR TRIM(description) IN ('null', 'nil', '-');
END