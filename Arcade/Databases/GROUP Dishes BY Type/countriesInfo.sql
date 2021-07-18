CREATE PROCEDURE countriesInfo()
BEGIN
  SELECT COUNT(name) AS number, AVG(population) AS average, SUM(population) AS total
  FROM countries;
END