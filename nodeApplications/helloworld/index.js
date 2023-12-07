const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'dromtorp'
});


app.get('/', (request, response) => {

  connection.connect( function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  }
  );

  connection.query('SELECT * from elev', function (error, results, fields) {
    if (error) throw error;
      response.send(JSON.stringify(results))
  });

  connection.end();


})

app.listen(port, () => {
  console.log(`Joakims app listening on port ${port}`)
})
