const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'api_gamers_development',
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};

console.log(config);

module.exports = {
  development: config,
  test: config,
  production: config,
};