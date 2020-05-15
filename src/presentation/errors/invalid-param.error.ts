import { CustomError } from '../protocols/error.protocol'

export default class InvalidParamError extends Error implements CustomError {
  public status_code: number

  constructor (paramName: string) {
    super(`InvalidParamError: \`${paramName}\``)
    this.name = 'InvalidParamError'
    this.status_code = 400
  }
}
