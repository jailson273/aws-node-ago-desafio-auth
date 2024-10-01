import HttpError from './http.error'

export default class ForbiddenError extends HttpError {
  constructor(public message: string) {
    super(403, message)
  }
}
