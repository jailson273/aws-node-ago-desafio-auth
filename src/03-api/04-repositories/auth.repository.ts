import connection from '../../01-config/connection'
import AuthRepositoryInterface from './interface/auth.repository.interface'

type User = {
  id: string
  name: string
  email: string
  password: string
  active: boolean
}

export default class AuthRepository implements AuthRepositoryInterface {
  async getUserActiveByEmail(
    email: string
  ): Promise<{ id: string; email: string; password: string } | undefined> {
    const db = await connection()
    const [result] = await db.execute(
      'SELECT * FROM users WHERE active = 1 AND email = ? ;',
      [email]
    )
    await db.end()
    return result[0] as User
  }
}
