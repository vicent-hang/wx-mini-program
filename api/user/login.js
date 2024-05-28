import { WxApi } from '../../utils/http.config'

export const login = (phoneNumber, password) => {
    return new Promise((resolve , reject) => {
        wx.request({
          url: WxApi.baseUrl + '/passport/login',
          header: WxApi.header,
          method: "POST",
          timeout: 5000,
          data: {
            isParty: false,
            mobile: phoneNumber,
            partyData: {},
            smsCode: password
          },
          success: (res) => {
              resolve(res)
          },
          fail: (res) => {
              reject(res)
          }
        })
    })
}