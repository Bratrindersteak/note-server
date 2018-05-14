const Sequelize = require('sequelize');
const config = require('../config/mysql');

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
});

sequelize
	.query('SELECT * FROM user')
	.then(projects =>
		// Each record will now be mapped to the project's model.
		console.log(projects)
	);

sequelize
	.query('SELECT * FROM user', { type: sequelize.QueryTypes.SELECT })
	.then(projects =>
		// Each record will now be mapped to the project's model.
		console.log(projects)
	);

sequelize.query('SELECT * FROM user').spread((results, metadata) => {
	// Raw query - use spread
	console.log(results);
	console.log(metadata);
});

// var Pet = sequelize.define('pet', {
//   id: {
//     type: Sequelize.STRING(50),
//     primaryKey: true
//   },
//   name: Sequelize.STRING(100),
//   gender: Sequelize.BOOLEAN,
//   birth: Sequelize.STRING(10),
//   createdAt: Sequelize.BIGINT,
//   updatedAt: Sequelize.BIGINT,
//   version: Sequelize.BIGINT
// }, {
//   timestamps: false
// });
//
// var now = Date.now();
//
// (async () => {
//   var dog = await Pet.create({
//     id: 'd-' + now,
//     name: 'Odie',
//     gender: false,
//     birth: '2008-08-08',
//     createdAt: now,
//     updatedAt: now,
//     version: 0
//   });
//   console.log('created: ' + JSON.stringify(dog));
// })();
//
// (async () => {
//   var pets = await Pet.findAll({
//     where: {
//       name: 'Odie'
//     }
//   });
//   console.log(`find ${pets.length} pets:`);
//   for (let p of pets) {
//     console.log(JSON.stringify(p));
//   }
// })();
