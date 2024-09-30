/* subir um servidor na porta 3000 usando node express e typescript   */

import 'dotenv/config'
import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/hello', (_: Request, response: Response) => {
  response.status(200).send('Olá mundo!')
})

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is running in port ${port} Ok!`)
})
