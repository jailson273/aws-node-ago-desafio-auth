import { Response } from 'express'
import HttpError from './http.error'

export default function controllerResponseError(
  res: Response,
  err: unknown,
  message: string = 'internal server error'
) {
  if (err instanceof HttpError) {
    res.status(err.status).json({ error: err.message })
    return
  }

  res.status(500).json({
    error: message
  })
}
