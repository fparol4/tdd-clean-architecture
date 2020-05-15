import MissingParamError from '../errors/missing-param.error'
import HttpResponseHelper from '../helpers/http-response.helper'
import { HttpRequest, HttpResponse } from '../protocols/http.protocol'
import { Controller } from '../protocols/controller.protocol'

export class SignupController implements Controller {
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
