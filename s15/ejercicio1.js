//node ejercicio1.js para ver console.log en terminal


// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
const http = require('http');

const hostame = '127.0.0.1' //puedes colocar cualquier numero de hostame
const port = 3000

const server = http.createServer((request, response) => {
  response.statusCode = 200
  response.setHeader('Content-Type', 'text/plain') //aplication/json
  response.end('araceli ponce sanga')
})

server.listen(port, hostame, () => {
  console.log(`:::el servidor se esta ejecutando en http://${hostame}:${port}/`)
})