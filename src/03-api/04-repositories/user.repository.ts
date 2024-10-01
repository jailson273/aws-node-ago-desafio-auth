import connection from '../../01-config/connection'
import UserRepositoryInterface, {
  User
} from './interface/user.repository.interface'

export default class UserRepository implements UserRepositoryInterface {
  async create({ id, name, email, password, active }: User): Promise<void> {
    const db = await connection()
    await db.execute(
      'INSERT INTO users (id, name, email, password, active) values (?, ?, ?, ?, ?)',
      [id, name, email, password, active]
    )
    await db.end()
  }

  async getByEmail(email: string): Promise<User | undefined> {
    const db = await connection()
    const [result] = await db.execute(
      'SELECT * FROM users WHERE active = 1 AND email = ? ;',
      [email]
    )
    await db.end()
    return result[0] as User
  }
}
