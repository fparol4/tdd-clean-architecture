import { CustomError } from '../protocols/error.protocol'

export default class MissingParamError extends Error implements CustomError {
  public status_code: number

  constructor (paramName: string) {
    super(`MissingParamError: \`${paramName}\``)
    this.name = 'MissingParamError'
    this.status_code = 400
  }
}
