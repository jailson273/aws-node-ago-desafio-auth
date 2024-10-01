import HttpError from './http.error'

export default class ConflictError extends HttpError {
  constructor(public message: string) {
    super(409, message)
  }
}
