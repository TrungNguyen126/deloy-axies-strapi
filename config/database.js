// module.exports = ({ env }) => ({
//   connection: {
//     // Update your postgres credentials here
//     client: "postgres",
//     connection: {
//       host: env("DATABASE_HOST", "127.0.0.1"),
//       port: env.int("DATABASE_PORT", 5432),
//       database: env("DATABASE_NAME", "axies"),
//       user: env("DATABASE_USERNAME", "postgres"),
//       password: env("DATABASE_PASSWORD", "themesflat"),
//       ssl: env.bool("DATABASE_SSL", false),
//     },
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    // Update your postgres credentials here
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "dpg-cepv27pgp3jlcsm15ebg-a.oregon-postgres.render.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "axies"),
      user: env("DATABASE_USERNAME", "themesflat"),
      password: env("DATABASE_PASSWORD", "7TVZDwdF0TXzjEb4z2YzGPl6xEs14ejp"),
      ssl: { rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), },
    },
  },
});




