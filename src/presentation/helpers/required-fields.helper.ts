import { HttpResponse } from '../protocols/http.protocol'
import MissingParamError from '../errors/missing-param.error'
import HttpResponseHelper from './http-response.helper'

export default class RequiredFieldsHelper {
  static validate (object: Object, fields: string[]): HttpResponse {
    for (const field of fields) {
      if (!object[field]) {
        return HttpResponseHelper.badRequest(new MissingParamError(field))
      }
    }
  }
}
