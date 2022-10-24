import { Entry, Field } from "../@types/transposed/index";

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Declare Database for later use and give read, write permissions
var db = new sqlite3.Database(path.join(__dirname, "db", 'main.db'), sqlite3.OPEN_READWRITE, (err) => {
    if (err) {console.error(err.message); }
    console.log('Connected to the main database.');
});

// Functions that can be used out with the file
module.exports = {

    /**
    * Creates a table in the database
    * @param {String} table - The name of the table to create
    * @param {Field} fields - The fields of the table to create
    */
    create: function(table:String, fields:Field[]){
        let fieldsArr = [];
        fields.forEach((field) => {
            fieldsArr.push(field.name + ' ' + field.type);
        });
        let fieldsStr = fieldsArr.join(', ');
        db.run(`CREATE TABLE IF NOT EXISTS ${table}(${fieldsStr})`, (err) => {
            if (err) { return false } else { return true }
        });
    },
    //Closes the connection with the database
    close: () => {
        db.close((err) => {
            if (err) { return false } else { return true }
        });
    },

    getColumns: (table:String) => {
        db.all(`PRAGMA table_info(${table})`, (err, rows) => {
            if (err) { return false } else { console.log(rows) }
        });
    },

    addEntry: (table:String, entry:Entry) => {
        let fields = entry.fields;
        let values = entry.values;
        let fieldsArr = [];
        fields.forEach((field) => {
            fieldsArr.push(field.name);
        });
        let fieldsStr = fieldsArr.join(', ');
        let valuesStr = values.join(', ');
        db.run(`INSERT INTO ${table}(${fieldsStr}) VALUES(${valuesStr})`, (err) => {
            if (err) { return false } else { return true }
        });
    }

} 