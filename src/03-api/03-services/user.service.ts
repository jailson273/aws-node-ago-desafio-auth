import { randomUUID } from 'node:crypto'
import bcrypt from 'bcrypt'
import BadRequestError from '../../02-utils/errors/bad-request.error'
import ConflictError from '../../02-utils/errors/conflict.error'
import isEmptyNullUndefined from '../../02-utils/is-empty-null-undefined'
import isInvalidEmail from '../../02-utils/is-invalid-email'
import isInvalidPasword from '../../02-utils/is-invalid-password'
import UserServiceInterface, {
  UserCreate
} from './interface/user.service.interface'
import UserRepositoryInterface from '../04-repositories/interface/user.repository.interface'

export default class UserService implements UserServiceInterface {
  constructor(private userRepository: UserRepositoryInterface) {}

  async create({ name, email, password }: UserCreate): Promise<string> {
    if (isEmptyNullUndefined(name)) {
      throw new BadRequestError('name is required')
    }

    if (isInvalidEmail(email)) {
      throw new BadRequestError('email is invalid')
    }

    if (isInvalidPasword(password)) {
      throw new BadRequestError(
        'password must be at least 6 characters long with letters and numbers'
      )
    }

    await this._isUserAlreadExists(email)

    password = await bcrypt.hash(password, 10)

    const id = randomUUID()
    const active = true

    await this.userRepository.create({ id, name, email, password, active })

    return id
  }

  private async _isUserAlreadExists(email: string) {
    const user = await this.userRepository.getByEmail(email)
    if (user) {
      throw new ConflictError('email already registered')
    }
  }
}
