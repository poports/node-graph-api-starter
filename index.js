const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./src/data/schema')

const app = express()
const PORT = process.env.NODE_PORT

app.use(express.static('public'))
app.get('/', (req, res) => res.send(`GraphQL is running on port ${PORT}`))

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
)

app.listen(PORT, () =>
  console.log(`your server is running on localhost:${PORT}/graphql`)
)
