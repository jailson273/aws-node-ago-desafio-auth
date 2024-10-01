type User = {
  id: string
  email: string
  password: string
}

export default interface AuthRepositoryInterface {
  getUserActiveByEmail(email: string): Promise<User | undefined>
}
