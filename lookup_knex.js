const pg       = require("pg");
const settings = require("./settings.json");
const config   = require("./knexfile.js");
const knex     = require('knex')(config);

let input = process.argv[2];
knex('famous_people')
  .where('first_name', '=', input)
  .then (rows => {
    console.log(`Searching ...`);
    console.log(`Found ${rows.length} person(s) by the name '${input}': `);
        for (let row of rows) {
          console.log(`- ${rows.indexOf(row) + 1}: ${row.first_name} ${row.last_name}, born '${row.birthdate}'`);
        }
    })
  .catch(err => console.log(err.message))




