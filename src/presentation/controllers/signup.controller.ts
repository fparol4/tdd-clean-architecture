import { HttpRequest, HttpResponse } from '../protocols/http.protocol'

export class SignupController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const { body } = httpRequest

    if (!body.name) {
      return {
        status_code: 400,
        body: new Error('MissingParamError: `name`')
      }
    }

    if (!body.email) {
      return {
        status_code: 400,
        body: new Error('MissingParamError: `email`')
      }
    }
  }
}
