module.exports = {
  type: "mysql",
  host: "device-api.cd60b7783xr6.us-east-1.rds.amazonaws.com",
  port: 3306,
  username: "admin",
  password: "devices123",
  database: "devices",
  logging: false,
  entities: [`builpd/app/entities/**/*.js}`],
  migrations: [`build/app/database/migrations/**/*.js}`],
  subscribers: [`build/app/subscriber/**/*.js}`],
  cli: {
    entitiesDir: `src/app/entities`,
    migrationsDir: `src/app/database/migrations`,
    subscribersDir: `src/app/subscriber`,
  },
};
