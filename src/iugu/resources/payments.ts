import { IuguPixConfigResponse } from '../models'
import IuguMethods from '../iugu_methods'
import IuguCommon from './common'

class IuguPayments extends IuguCommon<IuguPixConfigResponse> {
  get routeName (): string {
    return 'payments'
  }

  async pixConfiguration (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguPixConfigResponse> {
    return IuguMethods.createIuguMethod<IuguPixConfigResponse>({
      method: 'put',
      path: '/' + this.routeName + '/pix',
      urlParams: []
    })(data, urlParams)
  }
}

export default new IuguPayments()
