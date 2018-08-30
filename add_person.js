const pg       = require("pg");
const settings = require("./settings.json");
const config   = require("./knexfile.js");
const knex     = require('knex')(config);

let first_name = process.argv[2];
let last_name  = process.argv[3];
let birthdate  = process.argv[4];

knex('famous_people')
  .insert({first_name: first_name, last_name: last_name, birthdate: birthdate})
/*  .returning("*")*/
  .then (rows => {
    knex('famous_people')
    .select("*")
    .then(rows => console.log(rows))
    .catch(err => console.log(err.message))
  })
  .catch(err => console.log(err.message))