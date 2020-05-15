import { SignupController } from './signup.controller'

describe('SignupController', () => {
  it('should return `status_code: 400` & `MissingParamError: email` when no name is provided', async () => {
    const sut = new SignupController()
    const httpRequest = {
      body: {
        email: 'any_mail@mail.com',
        password: 'any_password',
        password_confirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.status_code).toBe(400)
    expect(httpResponse.body).toStrictEqual(new Error('MissingParamError: `name`'))
  })

  it('should return `status_code: 400` & `MissingParamError: email` when no name is provided', async () => {
    const sut = new SignupController()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        password_confirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.status_code).toBe(400)
    expect(httpResponse.body).toStrictEqual(new Error('MissingParamError: `email`'))
  })
})
