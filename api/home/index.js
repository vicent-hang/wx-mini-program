import { WxApi } from '../../utils/http.config'

export const getIndexList = () => {
	// 返回promise对象
	return new Promise((resolve , reject) => {
		wx.request({
			url: WxApi.baseUrl + '/page/detail',
			timeout: 5000,
			method: 'GET',
			header: WxApi.header,
			success: (res) => {
				resolve(res) // 用响应结果解析Promise
			},
			fail: (err) => {
				reject(err) // 用错误信息拒绝Promise
			}
		})
	})
}