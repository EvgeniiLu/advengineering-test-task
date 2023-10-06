const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.post('/login', (req, res) => {
  const username = req.query.username
  const password = req.query.password
  const users = router.db.getState().users

  users.find(item => item.user === username && item.password === password)
    ? res.send({success: true})
    : res.send({success: false, error: 'Wrong username or password'})
})

server.post('/logout', (req, res) => {
  res.send(JSON.stringify({success: true}))
})

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
