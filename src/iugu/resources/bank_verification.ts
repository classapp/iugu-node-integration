import { DefaultResponse, IuguBankDomicile } from '../models'
import IuguMethods from '../iugu_methods'
import IuguCommon from './common'

class IuguBankVerification extends IuguCommon<DefaultResponse> {
  get routeName (): string {
    return 'bank_verification'
  }

  async verifyBankDomicile (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguBankDomicile> {
    return IuguMethods.createIuguMethod<IuguBankDomicile>({
      method: 'get',
      path: '/' + this.routeName,
      urlParams: []
    })(data, urlParams)
  }

  async addBankDomicile (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<DefaultResponse> {
    return IuguMethods.createIuguMethod<DefaultResponse>({
      method: 'post',
      path: '/' + this.routeName,
      urlParams: []
    })(data, urlParams)
  }
}

export default new IuguBankVerification()
