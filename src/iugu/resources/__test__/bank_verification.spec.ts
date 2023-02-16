import nock from 'nock'
import Iugu from '../../../iugu'

test('should return route name', async () => {
  expect(Iugu.bankVerification.routeName).toBe('bank_verification')
});

test('should verify bank domicile', async () => {
  const apiResponse = {
    "id": "F7D999A13D17459991A77456F061C3E0",
    "status": "pending",
    "created_at": "2017-10-05T14:31:32-03:00",
    "updated_at": "2017-10-05T14:31:32-03:00",
    "account": "1234567-8",
    "agency": "4321-0",
    "operation": null,
    "feedback": null,
    "bank": "Bradesco"
  }
  const apiKey = '123456789'
  Iugu.setApiKey(apiKey)
  const scope = nock('https://api.iugu.com/v1')
    .get('/bank_verification')
    .reply(200, apiResponse)
    
  const response = await Iugu.bankVerification.verifyBankDomicile({})

  expect(response).toEqual(apiResponse)
  expect(scope.isDone()).toBeTruthy()
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