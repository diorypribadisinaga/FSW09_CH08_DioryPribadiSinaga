const {
  DB_USER = "postgres",
  DB_PASSWORD = "12345",
  DB_NAME = "bcr1231",
  DB_HOST = "127.0.0.1",
  DB_PORT = "5432",
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    username: 'dnlsiokuvoktbz',
    password: 'DB_PASSWORD=0eaf618ed3b09f76a0cca8d3ca87c87c6b6744e9e5ded75ba674baf8c399404c',
    database: 'postgresql-vertical-01581',
    host: 'ec2-52-44-13-158.compute-1.amazonaws.com',
    port: '5432',
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
}
