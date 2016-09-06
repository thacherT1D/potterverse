module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/pottertest'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
