import { HttpRequest, HttpResponse } from '../protocols/http.protocol'
import MissingParamError from '../errors/missing-param.error'

export class SignupController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const { body } = httpRequest

    if (!body.name) {
      return {
        status_code: 400,
        body: new MissingParamError('name')
      }
    }

    if (!body.email) {
      return {
        status_code: 400,
        body: new MissingParamError('email')
      }
    }
  }
}
