import { Request, Response } from 'express'
import AuthServiceInterface from '../03-services/interface/auth.service.interface'
import controllerResponseError from '../../02-utils/errors/controller-response.error'

export default class AuthController {
  constructor(private authService: AuthServiceInterface) {}

  login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body
      const authenticated = await this.authService.login({ email, password })
      res.status(200).json(authenticated)
    } catch (err) {
      controllerResponseError(res, err, 'oops, Unable to login')
    }
  }
}
