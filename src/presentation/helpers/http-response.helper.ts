import { HttpResponse } from '../protocols/http.protocol'
import { CustomError } from '../protocols/error.protocol'

export default class HttpResponseHelper {
  static badRequest (error: CustomError): HttpResponse {
    return {
      status_code: error.status_code ?? 400,
      body: error
    }
  }
}
