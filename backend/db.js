const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database:'massive'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to Db: ', err.stack);
        return;
    }
    console.log('Connected to the Db' + db.threadId);
});

module.exports = db;