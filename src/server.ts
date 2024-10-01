import 'dotenv/config'
import './00-seed'
import express from 'express'
import cors from 'cors'
import loadRoutes from './03-api/01-routes'

const app = express()

app.use(cors())
app.use(express.json())

loadRoutes(app)

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is running in port ${port} Ok!`)
})
