export class SignupController {
  handle (httpRequest: any): any {
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
