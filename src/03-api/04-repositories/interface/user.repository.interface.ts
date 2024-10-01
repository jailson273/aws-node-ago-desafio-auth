export type User = {
  id: string
  name: string
  email: string
  password: string
  active: boolean
}

export default interface UserRepositoryInterface {
  create({ id, name, email, password, active }: User): Promise<void>
  getByEmail(email: string): Promise<User | undefined>
}
