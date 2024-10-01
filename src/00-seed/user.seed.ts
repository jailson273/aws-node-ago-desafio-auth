import UserService from '../03-api/03-services/user.service'
import UserRepository from '../03-api/04-repositories/user.repository'

export default class UserSeed {
  static execute() {
    const userRepository = new UserRepository()
    const userService = new UserService(userRepository)
    const name = process.env.DEFAULT_USER_NAME as string
    const email = process.env.DEFAULT_USER_EMAIL as string
    const password = process.env.DEFAULT_USER_PASSWORD as string
    userService
      .create({ email, name, password })
      .then(() => {
        console.log('User seed executed with success!')
      })
      .catch((err) => {
        console.log(`User sedd executed with error: ${err.message}`)
      })
  }
}
