import io from 'socket.io-client'

export const Socket = io.connect('http://eriksend.com:3006')
