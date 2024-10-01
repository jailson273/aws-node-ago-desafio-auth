export type UserCreate = {
  name: string
  email: string
  password: string
}
export default interface UserServiceInterface {
  create(user: UserCreate): Promise<string>
}
