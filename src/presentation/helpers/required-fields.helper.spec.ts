import RequiredFieldsHelper from './required-fields.helper'
import MissingParamError from '../errors/missing-param.error'

describe('RequiredFieldsHelper -> validate', () => {
  it('should return void if no param is missing on object', async () => {
    const sut = RequiredFieldsHelper.validate
    const response = sut({ any_field: 'any_value' }, ['any_field'])
    expect(response).toBe(undefined)
  })

  it('should throw `MissingParamError` if the provided field is not on the object', async () => {
    const sut = RequiredFieldsHelper.validate
    const response = sut({}, ['any_field'])
    expect(response.body).toStrictEqual(new MissingParamError('any_field'))
  })
})
