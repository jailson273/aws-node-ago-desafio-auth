import { Application } from 'express'
import userRoutes from './user.router'
import authRoutes from './auth.router'

export default function loadRoutes(app: Application) {
  app.use('/api/v1/auth', authRoutes)
  app.use('/api/v1/users', userRoutes)
}
