const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Her kommer det sql data istedenfor denne teksten')
})

app.listen(port, () => {
  console.log(`Joakims app listening on port ${port}`)
})
