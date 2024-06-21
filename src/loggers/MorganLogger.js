'use strict'

const sqlite3 = require('sqlite3').verbose();
const morgan = require('morgan')


const db = new sqlite3.Database('file.db'); 

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS logs (id INTEGER PRIMARY KEY AUTOINCREMENT, message TEXT)");
});

const logger = morgan(':remote-addr - :remote-user [:date[clf]] :method :url HTTP/:http-version :status :res[content-length] :res[X-Username] :referrer :user-agent', {
  stream: {
    write: (message) => {
      const query = 'INSERT INTO logs (message) VALUES (?)';
      db.run(query, [message], (err) => {
        if (err) {
          console.error('Erro ao inserir log no SQLite:', err);
        }
      });
    }
  }
})

module.exports = logger;