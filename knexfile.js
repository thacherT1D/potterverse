module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/potterverse'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
