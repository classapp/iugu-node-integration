import nock from 'nock'
import Iugu from '../../../iugu'

test('should return route name', async () => {
  expect(Iugu.bankVerification.routeName).toBe('bank_verification')
});

test('should add bank domicile', async () => {
  const apiKey = '123456789'
  Iugu.setApiKey(apiKey)
  const scope = nock('https://api.iugu.com/v1')
    .post('/bank_verification')
    .reply(200, { success: true })

  const response = await Iugu.bankVerification.addBankDomicile({})

  expect(response).toEqual({ success: true })
  expect(scope.isDone()).toBeTruthy()
});