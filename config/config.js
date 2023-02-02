require('dotenv').config();

module.exports = {
	development_original: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: 'mysql',
		"operatorAliases": 0,
		
		host: '34.134.223.143',
		// host: '190.188.218.53',
		environment: 'DEV',
		username: process.env.DB_USER,
		password: "Abcd1234",
		// database: 'gcloud-sql-roemmers',
		port: process.env.DB_PORT,
		dialect: 'mysql',
		timestamps: false
	},
	development: {
		"username": process.env.DB_USER,
		"password": process.env.DB_PASSWORD,
		"database": process.env.DB_USER.DB_DATABASE,
		"host": process.env.DB_HOST,
		"dialect": "mysql",
		"operatorAliases": 0,
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: 'mysql',
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
		logging: console.log,
		seederStorage: 'sequelize',
		seederStorageTableName: 'seeds',
		migrationStorage: 'sequelize',
		migrationStorageTableName: 'migrations',
		environment: 'DEV',
		dialectOptions: {
			timezone: "local",
			dateStrings: true,
			typeCast: true,
		},
		timezone: 'America/Buenos_Aires',
	},
	test: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: 'mysql',
		environment: 'TEST',
	},
	production: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: 'mysql',
		"operatorAliases": 0,
		
		// // host: '/cloudsql/roomin-disney:us-central1:roomin-roemmers',
		// host: 'https://api-simplescosascabin.herokuapp.com/',
		// environment: 'PROD',
		// username: process.env.DB_USER,
		// password: "Abcd1234",
		// // database: 'gcloud-sql-roemmers',
		// port: process.env.DB_PORT,
		// // dialectOptions: {
		// // 	socketPath: '/cloudsql/roomin-disney:us-central1:roomin-roemmers'
		// // },
		// timestamps: false
	}
};