const sqlite3 = require('sqlite3').verbose();
let sql;


// connect to DB
const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err)=> {
    if (err) return console.error(err.message);
});

// Create "users" Table

// sql = `CREATE TABLE users(id INTEGER PRIMARY KEY, first_name TEXT, last_name, username, password)`;
// db.run(sql);
// console.log(" users table created.")

// Create "bills" Table

// sql = `CREATE TABLE bills(uid, bill_name, amount, due_date)`;
// db.run(sql);
// console.log(" bills table created.")

// Drop Table
// db.run('DROP TABLE users');
// console.log("Table users Dropped")

// Insert Data into table/database
function createUser() {
    sql = `INSERT INTO users(first_name, last_name, username, password) VALUES (?,?,?,?)`;
    db.run(sql,["Kyiem", "Chandler","KyiemC", "Kyiem1234"],(err) =>{
        if (err) return console.error(err.message);
        else console.log("User created.");
        
    });  
}

// query the data
function getUser() {
    sql = `SELECT * FROM users`;
    db.all(sql, [], (err, rows) => {
        if (err) return console.error(err.message);

        rows.forEach(row=>{
            console.log(row);
        });
    });
};

// update sql query code

// sql = `UPDATE users SET first_name = ? WHERE id = ?`;
// db.run(sql, [], (err) => {
//     if (err) return console.error(err.message);
// });

// // Delete SQL Query statment
// sql = `DELETE FROM users WHERE id = ?`;
// db.run(sql, [], (err) => {
//     if (err) return console.error(err.message);
// });