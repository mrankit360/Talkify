import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dns from 'dns'

dns.setServers(['1.1.1.1', '8.8.8.8'])

import { connectDB } from './lib/db.js'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import {app, server} from './lib/socket.js'

dotenv.config()


app.use(express.json({limit : "5mb"}))
app.use(cookieParser())
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))

const PORT = process.env.PORT

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)

server.listen(PORT , ()=>{
    console.log(`Server isd running on ${PORT}`)
    connectDB()
})