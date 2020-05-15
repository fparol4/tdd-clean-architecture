/**
 * @todo
 * Add a status code for all custom errors
 */

export default class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`MissingParamError: \`${paramName}\``)
    this.name = 'MissingParamError'
  }
}
