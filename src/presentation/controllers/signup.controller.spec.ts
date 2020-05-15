import { SignupController } from './signup.controller'
import MissingParamError from '../errors/missing-param.error'

const makeSut = (): SignupController => {
  const sut = new SignupController()
  return sut
}

describe('SignupController -> handle', () => {
  it('should return `status_code: 400` & `MissingParamError: email` when no name is provided', async () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        email: 'any_mail@mail.com',
        password: 'any_password',
        password_confirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.status_code).toBe(400)
    expect(httpResponse.body).toStrictEqual(new MissingParamError('name'))
  })

  it('should return `status_code: 400` & `MissingParamError: email` when no name is provided', async () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        password_confirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.status_code).toBe(400)
    expect(httpResponse.body).toStrictEqual(new MissingParamError('email'))
  })

  it('should return `status_code: 400` & `MissingParamError: password` when no name is provided', async () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_mail@mail.com',
        password_confirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.status_code).toBe(400)
    expect(httpResponse.body).toStrictEqual(new MissingParamError('password'))
  })

  it('should return `status_code: 400` & `MissingParamError: password` when no name is provided', async () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_mail@mail.com',
        password: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.status_code).toBe(400)
    expect(httpResponse.body).toStrictEqual(new MissingParamError('password_confirmation'))
  })
})
