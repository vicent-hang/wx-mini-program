
import { WxApi } from '../../utils/http.config'

//获取商品列表
/**
 * 
 * @param obj 对象传参，发起请求时，有的属性就携带，没有的就默认
 */
export const getGoodsListByDef = (obj) => {
	const goods = {
		goodsName: '',
		sortType: 'all',
		sortPrice: 0
	}
	if(obj.goodsName != null){
		goods.goodsName = obj.goodsName
	}
	if(obj.sortType != null) {
		goods.sortType = obj.sortType
	}
	if(obj.sortPrice !=null) {
		goods.sortPrice = obj.sortPrice
	}
	return new Promise((resolve , reject) => {
		wx.request({
			url: WxApi.baseUrl+`/goods/list&sortType=${goods.sortType}&sortPrice=${goods.sortPrice}&categoryId=0&goodsName=${goods.goodsName}&page=1`,
			method: 'GET',
			timeout: 5000,
			success: (res) => {
				resolve(res)
			},
			fail: (res) => {
				reject(res)
			}
		})
	})
}

