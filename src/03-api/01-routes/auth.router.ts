import { Router } from 'express'
import AuthRepository from '../04-repositories/auth.repository'
import AuthService from '../03-services/auth.service'
import AuthController from '../02-controllers/auth.controller'

const router = Router()

const authRepository = new AuthRepository()
const authService = new AuthService(authRepository)
const authController = new AuthController(authService)

router.post('/login', authController.login)

export default router
