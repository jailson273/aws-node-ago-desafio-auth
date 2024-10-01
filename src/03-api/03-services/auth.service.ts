import jwt, { JwtPayload } from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import isEmptyNullUndefined from '../../02-utils/is-empty-null-undefined'
import ForbiddenError from '../../02-utils/errors/forbidden.error'
import AuthServiceInterface, {
  Authenticated,
  UserLogin
} from './interface/auth.service.interface'
import AuthRepositoryInterface from '../04-repositories/interface/auth.repository.interface'

export default class AuthService implements AuthServiceInterface {
  constructor(private authRepository: AuthRepositoryInterface) {}

  async login({ email, password }: UserLogin): Promise<Authenticated> {
    if (isEmptyNullUndefined(email)) {
      throw new ForbiddenError('invalid email or password')
    }

    if (isEmptyNullUndefined(password)) {
      throw new ForbiddenError('invalid email or password')
    }

    const user = await this.authRepository.getUserActiveByEmail(email)
    if (!user) {
      throw new ForbiddenError('invalid email or password')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      throw new ForbiddenError('invalid email or password')
    }

    const SECRET_KEY = process.env.JWT_SECRET as string
    const token = jwt.sign({ sub: user.id }, SECRET_KEY, {
      expiresIn: '10m'
    })
    const data = jwt.decode(token) as JwtPayload
    const expiresIn = data.exp as number

    return {
      token,
      expiresIn
    }
  }
}
