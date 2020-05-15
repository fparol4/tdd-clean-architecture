import MissingParamError from '../errors/missing-param.error'
import HttpResponseHelper from '../helpers/http-response.helper'
import { HttpRequest, HttpResponse } from '../protocols/http.protocol'

export class SignupController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const { body } = httpRequest

    if (!body.name) {
      return HttpResponseHelper.badRequest(new MissingParamError('name'))
    }

    if (!body.email) {
      return HttpResponseHelper.badRequest(new MissingParamError('email'))
    }
  }
}
