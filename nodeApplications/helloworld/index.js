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
  console.log('The solution is: ', results);
});
 
connection.end();

app.get('/', (request, response) => {
  response.send('Her kommer det sql data istedenfor denne teksten')
})

app.listen(port, () => {
  console.log(`Joakims app listening on port ${port}`)
})
