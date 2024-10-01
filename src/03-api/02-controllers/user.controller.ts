import { Request, Response } from 'express'
import controllerResponseError from '../../02-utils/errors/controller-response.error'
import UserServiceInterface from '../03-services/interface/user.service.interface'

export default class UserController {
  constructor(private userService: UserServiceInterface) {}

  post = async (req: Request, res: Response): Promise<void> => {
    try {
      const user = req.body
      const id = await this.userService.create(user)
      res.status(201).json({ id })
    } catch (err) {
      controllerResponseError(
        res,
        err,
        'oops, an internal error occurred and it was not possible to create this user'
      )
    }
  }
}
