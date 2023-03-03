const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))
no-console
app.listen(PORT, () => {
  console.log('server started on port 5000')
})
