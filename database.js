import mysql from 'mysql2'
const app = express();
const port = 3306;

const connection = mysql.createConnection({
    host: process.env.HOST ,
    user: 'root',
    password: '',
    database: 'sql5697255'
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database as id ' + connection.threadId);
});

