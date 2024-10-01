import isEmptyNullUndefined from './is-empty-null-undefined'

export default function isInvalidPasword(password: string) {
  if (isEmptyNullUndefined(password)) {
    return true
  }

  const testPassword = RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/g)
  const passwordIsValid = testPassword.exec(password)
  if (!passwordIsValid) {
    return true
  }

  return false
}
