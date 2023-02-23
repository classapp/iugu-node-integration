import nock from 'nock'
import Iugu from '../../../iugu'

test('should return route name', async () => {
  expect(Iugu.accounts.routeName).toBe('accounts')
})

test('should update subaccount', async () => {
  const accountId = new Map().set('id', '1234')
  const data = {
    name :'New Account Name'
  }

  const apiResponse = {
    id: '1234',
    name: 'New Account Name',
  }

  const apiKey = '123456789'
  Iugu.setApiKey(apiKey)
  nock('https://api.iugu.com/v1')
    .put('/accounts/1234', data)
    .reply(200, apiResponse)

  const response = await Iugu.accounts.updateSubAccount(data, accountId)

  expect(response).toEqual(apiResponse)
})
test('should verify account', async () => {
  const apiKey = process.env.SUBACCOUNT_TEST_API_KEY || 'E5488635EC916E8889EEDE7274DB0142C3103AB0BCEAA2361999C740234DF185'
  Iugu.setApiKey(apiKey)
  nock('https://api.iugu.com:443', { encodedQueryParams: true })
    .post('/v1/accounts/3F8E95287EFE4A3BB7F1F74A0922FD15/request_verification', { data: { physical_products: false, business_type: 'Escola', person_type: 'Pessoa Jurídica', automatic_transfer: true, cep: '87080005', city: 'Maringá', district: 'Cidade Universitária', state: 'PR', telephone: 5511970187000, price_range: 'Subconta', bank_ag: '3771', bank_cc: '50612-2', account_type: 'Corrente', bank: 'Itaú', address: 'Avenida Alziro Zarur', cnpj: '36296178000179', company_name: 'Empresa XPTO 2' } })
    .reply(200, { id: 'E77BDA83E2134644A43231FB1A8789ED', data: { price_range: 'Subconta', physical_products: false, business_type: 'Escola', person_type: 'Pessoa Jurídica', automatic_transfer: true, address: 'Avenida Alziro Zarur', cep: '87080005', city: 'Maringá', state: 'PR', telephone: 5511970187000, bank: 'Itaú', bank_ag: '3771', account_type: 'Corrente', bank_cc: '50612-2', cnpj: '36296178000179', company_name: 'Empresa XPTO 2', bank_ispb: '60701190' }, account_id: '3F8E95287EFE4A3BB7F1F74A0922FD15', created_at: '2022-09-30T11:03:25-03:00' }, [
      'Date',
      'Fri, 30 Sep 2022 14:03:27 GMT',
      'Content-Type',
      'application/json; charset=utf-8',
      'Transfer-Encoding',
      'chunked',
      'Connection',
      'close',
      'X-HandledBy',
      'api/v1/account#request_verification',
      'X-Cf-Block',
      'DEFAULT',
      'X-UA-Compatible',
      'IE=Edge,chrome=1',
      'ETag',
      '"bf93b54ab4f2ac99369b27cc86cb1255"',
      'Cache-Control',
      'max-age=0, private, must-revalidate',
      'X-Request-Id',
      'b26e61857e467191963f267d3d1ff0e5',
      'X-Runtime',
      '1.882028',
      'Vary',
      'Origin',
      'CF-Cache-Status',
      'DYNAMIC',
      'Set-Cookie',
      '__cfruid=a6b88726e500e60ed3ceee6809c4b12bc94d9018-1664546606; path=/; domain=.iugu.com; HttpOnly; Secure; SameSite=None',
      'Server',
      'cloudflare',
      'CF-RAY',
      '752d80797fcf4b40-GRU',
      'alt-svc',
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400'
    ])
  const data = {
    physical_products: false,
    business_type: 'Escola',
    person_type: 'Pessoa Jurídica',
    automatic_transfer: true,
    cep: '87080005',
    city: 'Maringá',
    district: 'Cidade Universitária',
    state: 'PR',
    telephone: 5511970187000,
    price_range: 'Subconta',
    bank_ag: '3771',
    bank_cc: '50612-2',
    account_type: 'Corrente',
    bank: 'Itaú',
    address: 'Avenida Alziro Zarur',
    cnpj: '36296178000179',
    company_name: 'Empresa XPTO 2'
  }
  const accountId = new Map().set('account_id', '3F8E95287EFE4A3BB7F1F74A0922FD15')
  const response = await Iugu.accounts.requestVerification({ data }, accountId)
  expect(response.id).toBe('E77BDA83E2134644A43231FB1A8789ED')
})

test('should configure account', async () => {
  const apiKey = process.env.SUBACCOUNT_USER_TOKEN || 'E5488635EC916E8889EEDE7274DB0142C3103AB0BCEAA2361999C740234DF185'
  Iugu.setApiKey(apiKey)

  nock('https://api.iugu.com:443', { encodedQueryParams: true })
    .post('/v1/accounts/configuration', { data: { bank_slip: { active: true }, credit_card: { active: true, installments: true, max_installments: 12 } } })
    .reply(200, { id: '3F8E95287EFE4A3BB7F1F74A0922FD15', name: 'ClassApp Account', created_at: '2022-09-30T10:31:59-03:00', updated_at: '2022-09-30T11:03:26-03:00', 'can_receive?': true, 'is_verified?': true, last_verification_request_status: 'accepted', last_verification_request_data: null, last_verification_request_feedback: null, change_plan_type: 1, subscriptions_trial_period: 0, subscriptions_billing_days: 5, disable_emails: false, last_withdraw: null, reply_to: 'no-reply@iugu.com', webapp_on_test_mode: false, marketplace: false, default_return_url: null, credit_card_verified: true, fines: null, late_payment_fine: null, per_day_interest: null, old_advancement: null, early_payment_discount: null, early_payment_discount_days: null, early_payment_discount_percent: null, auto_withdraw: true, disabled_withdraw: false, payment_email_notification: false, payment_email_notification_receiver: null, auto_advance: false, auto_advance_type: null, auto_advance_option: null, balance: 'R$ 0,00', balance_in_protest: 'R$ 0,00', balance_available_for_withdraw: 'R$ 0,00', protected_balance: 'R$ 0,00', payable_balance: 'R$ 0,00', receivable_balance: 'R$ 0,00', commission_balance: 'R$ 0,00', volume_last_month: 'R$ 0,00', volume_this_month: 'R$ 0,00', total_subscriptions: 0, total_active_subscriptions: 0, taxes_paid_last_month: 'R$ 0,00', taxes_paid_this_month: 'R$ 0,00', 'has_bank_address?': true, permissions: ['owner'], custom_logo_url: null, custom_logo_small_url: null, early_payment_discounts: [], commissions: null, splits: [], contact_data: { name: 'ClassApp Account', document_number: '36296178000179', full_address: 'Avenida Alziro Zarur, Maringá/PR, 87080005' }, informations: null, configuration: { auto_withdraw: true, disabled_withdraw: false, payment_email_notification: false, payment_email_notification_receiver: null, auto_advance: null, auto_advance_type: null, auto_advance_option: null, commission_percent: 0, owner_emails_to_notify: null, fines: null, late_payment_fine: null, per_day_interest: null, bank_slip: { active: true, extra_due: '0', reprint_extra_due: '0' }, credit_card: { active: true, soft_descriptor: '', installments: false, installments_pass_interest: false, max_installments: '0', max_installments_without_interest: '0', two_step_transaction: false }, pix: { active: false }, early_payment_discount: null, early_payment_discount_days: null, early_payment_discount_percent: null }, bank_accounts: [{ branch: '0002', number: '3999859', digit: '0' }] }, [
      'Date',
      'Fri, 30 Sep 2022 17:12:47 GMT',
      'Content-Type',
      'application/json; charset=utf-8',
      'Transfer-Encoding',
      'chunked',
      'Connection',
      'close',
      'X-HandledBy',
      'api/v1/account#set_configuration',
      'X-Cf-Block',
      'DEFAULT',
      'X-UA-Compatible',
      'IE=Edge,chrome=1',
      'ETag',
      '"7c3a3a6d81ce9606211594a00ff1289f"',
      'Cache-Control',
      'max-age=0, private, must-revalidate',
      'X-Request-Id',
      '83e13bd1dcfc260de5b52f39290f7948',
      'X-Runtime',
      '0.590413',
      'Vary',
      'Origin',
      'CF-Cache-Status',
      'DYNAMIC',
      'Set-Cookie',
      '__cfruid=f3a5190098834b9a36e1b0e89773874eabfb7acc-1664557967; path=/; domain=.iugu.com; HttpOnly; Secure; SameSite=None',
      'Server',
      'cloudflare',
      'CF-RAY',
      '752e95dbeca24292-VCP',
      'alt-svc',
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400'
    ])
  const data = {
    bank_slip: {
      active: true
    },
    credit_card: {
      active: true,
      // soft_descriptor: '',
      installments: true,
      max_installments: 12
    }
  }

  const response = await Iugu.accounts.requestConfiguration({ data })
  expect(response.id).toBe('3F8E95287EFE4A3BB7F1F74A0922FD15')
  expect(response && response.configuration &&
      response.configuration.bank_slip && response.configuration.bank_slip.active).toBeTruthy()
  expect(response && response.configuration &&
      response.configuration.credit_card && response.configuration.credit_card.active).toBeTruthy()
})
