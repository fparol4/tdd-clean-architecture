import MissingParamError from '../errors/missing-param.error'
import HttpResponseHelper from '../helpers/http-response.helper'
import { HttpRequest, HttpResponse } from '../protocols/http.protocol'

export class SignupController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const { body } = httpRequest

    const requiredFields = ['name', 'email', 'password', 'password_confirmation']
    for (const field of requiredFields) {
      if (!body[field]) {
        return HttpResponseHelper.badRequest(new MissingParamError(field))
      }
    }
  }
}
