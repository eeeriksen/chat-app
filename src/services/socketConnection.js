import io from 'socket.io-client'

export const Socket = io.connect('https://chat-server.eriksend.com')
