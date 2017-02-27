const package = require('./package.json')
const app = require('express')()

app.use('*', (req, res) => {
  res.json({
      name: package.name,
      version: package.version,
    })
})

app.listen(process.env.PORT || 3000)
