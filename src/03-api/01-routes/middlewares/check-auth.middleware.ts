import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import controllerResponseError from '../../../02-utils/errors/controller-response.error'

export default function checkAuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers.authorization
  const [bearer, token] = String(authorization).split(' ')
  if (bearer !== 'Bearer' || !token) {
    res.status(401).json({ error: 'bearer token is invalid' })
    return
  }

  try {
    const SECRET_KEY = process.env.JWT_SECRET as string
    const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload
    req['userId'] = decoded.sub
    next()
  } catch (err) {
    controllerResponseError(res, err, 'bearer token is invalid')
  }
}
