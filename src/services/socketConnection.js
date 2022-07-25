import io from 'socket.io-client'

export const Socket = io.connect('http://chat-server.eriksend.com')
