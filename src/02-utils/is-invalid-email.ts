import isEmptyNullUndefined from './is-empty-null-undefined'

export default function isInvalidEmail(value: string) {
  if (isEmptyNullUndefined(value)) {
    return true
  }

  if (!value.includes('@')) {
    return true
  }

  return false
}
