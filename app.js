let cfg = {
    client: "sqlite3",
    connections: {
        filename: "./book.sqlite"
    },
    useNullAsDefault: true
};

const knex = require('knex')(cfg);//generates a singelton 

knex.destroy();

console.log('Done.')