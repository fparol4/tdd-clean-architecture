import { HttpResponse } from '../protocols/http.protocol'

export default class HttpResponseHelper {
  static badRequest (error: Error): HttpResponse {
    return {
      status_code: 400,
      body: error
    }
  }
}
