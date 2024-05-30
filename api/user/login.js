import Toast from '../../miniprogram_npm/vant-weapp/toast/toast'
import { WxApi } from '../../utils/http.config'

// 登录
export const login = (phoneNumber, password) => {
    return new Promise((resolve , reject) => {
        wx.request({
          url: WxApi.baseUrl + '/passport/login',
          header: WxApi.header,
          method: "POST",
          timeout: 5000,
          data: {
            'form': {
              isParty: false,
              mobile: phoneNumber,
              partyData: {},
              smsCode: password
            }
          },
          success: (res) => {
              resolve(res.data)
          },
          fail: (res) => {
              reject(res.data)
          }
        })
    })
}