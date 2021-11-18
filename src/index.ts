import dotenv from 'dotenv'
import express from 'express'
import routes from './routes/challenges'
import { connect } from './database'

dotenv.config()

const app = express()
connect()
app.listen(process.env.PORT)
app.use(express.json())
app.use(routes)
