// import cors from "cors"
import express from "express"
import cookieParser from "cookie-parser"
// import mongoose from "mongoose"
import dotenv from "dotenv"
import {auth} from "express-openid-connect"
import home from './routes/home.js'
import profile from './routes/profile.js'


const app = express()
const port = process.env.PORT || 3000
// const {auth} = require('express-openid-connect')

dotenv.config()

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

app.use(cookieParser())

app.use(
    auth({
        authRequired: false, 
        auth0Logout: true,
        issuerBaseURL: process.env.ISSUER_BASE_URL, 
        baseURL: process.env.BASE_URL, 
        clientID: process.env.CLIENT_ID, 
        secret: process.env.SECRET
    })
)


app.use('/profile', profile)
//Keep as bottom route
app.use('/', home)

export default app