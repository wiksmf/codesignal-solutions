CREATE PROCEDURE marketReport()
BEGIN
	SELECT IFNULL(country, 'Total:') as county, COUNT(country) as competitors
  FROM foreignCompetitors
  GROUP BY country WITH ROLLUP;
END