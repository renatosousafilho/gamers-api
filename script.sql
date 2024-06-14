CREATE DATABASE api_gamers_development;

SELECT g.name, c.name FROM gamers AS g
INNER JOIN gamers_certifications AS gc ON g.id=gc.gamer_id
INNER JOIN certifications AS c ON gc.certification_id=c.id
WHERE g.id=1;