import { io } from 'socket.io-client'

export const Socket = io(import.meta.env.VITE_SOCKET_URL)
