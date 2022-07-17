const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')

app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3004',
    methods: ['GET', 'POST']
  }
})

io.on('connection', (socket) => {
  console.log(`User ${socket.id} connected`)

  socket.on('joinRoom', (data) => {
    socket.join(data.room)
    socket.emit('updateUsersList', data.username)
  })

  socket.on('disconnect', () => {
    console.log(`User ${socket.id} disconnected`)
  })
})

const port = 3006

server.listen(port, () => {
  console.log(`Server running in port ${port}`)
})