import { Router } from 'express'
import UserController from '../02-controllers/user.controller'
import UserService from '../03-services/user.service'
import UserRepository from '../04-repositories/user.repository'
import checkAuthMiddleware from './middlewares/check-auth.middleware'

const router = Router()

const userRepository = new UserRepository()
const userService = new UserService(userRepository)
const userController = new UserController(userService)
router.post('/', checkAuthMiddleware, userController.post)

export default router
