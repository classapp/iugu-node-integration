import { DefaultResponse } from '../models'
import IuguMethods from '../iugu_methods'
import IuguCommon from './common'

class IuguPayments extends IuguCommon<DefaultResponse> {
  get routeName (): string {
    return 'payments'
  }

  async pixConfiguration (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<DefaultResponse> {
    return IuguMethods.createIuguMethod<DefaultResponse>({
      method: 'put',
      path: '/' + this.routeName + '/pix',
      urlParams: []
    })(data, urlParams)
  }
}

export default new IuguPayments()
