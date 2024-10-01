import HttpError from './http.error'

export default class BadRequestError extends HttpError {
  constructor(public message: string) {
    super(400, message)
  }
}
