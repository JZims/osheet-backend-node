import express from 'express'
// import {requiresAuth} from 'express-openid-connect'
import pkg from 'express-openid-connect'

const {requiresAuth} = pkg
const router = express.Router()

router.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user))
})

export default router