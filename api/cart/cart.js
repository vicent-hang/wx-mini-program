import { WxApi } from '../../utils/http.config'
import { userStore } from '../../store/store';

//获取购物车列表
export const getCartList = () => {
    return new Promise((resolve, reject) => {
        wx.request({
          url:WxApi.baseUrl + '/cart/list',
          method: 'GET',
          header: {
            ...WxApi.header,
            'Access-Token': userStore.token
          },
          timeout: 5000,
          success: res => {
            resolve(res.data)
          },
          fail: res => {
            reject(res.data)
          }
        })
    })
}


// 获取商品更新
export const getUpdadeCart = (goodsId, goodsNum, goodsSkuId) => {
    return new Promise((resolve, reject) => {
        wx.request({
          url:WxApi.baseUrl + '/cart/update',
          method: 'POST',
          header: {
            ...WxApi.header,
            'Access-Token': userStore.token
          },
          timeout: 5000,
          data: {
            goodsId,
            goodsNum,
            goodsSkuId
          },
          success: res => {
            resolve(res.data)
          },
          fail: res => {
            reject(res.data)
          }
        })
    })
}

// 添加商品到购物车
export const getCart = (goodsId, goodsNum, goodsSkuId) => {
    return new Promise((resolve, reject) => {
        wx.request({
          url:WxApi.baseUrl + '/cart/add',
          method: 'POST',
          header: {
            ...WxApi.header,
            'Access-Token': userStore.token
          },
          timeout: 5000,
          data: {
            goodsId,
            goodsNum,
            goodsSkuId
          },
          success: res => {
            resolve(res.data)
          },
          fail: res => {
            reject(res.data)
          }
        })
    })
}

// 删除购物车中的商品
export const deletCart = (cartIds) => {
    return new Promise((resolve, reject) => {
        wx.request({
          url:WxApi.baseUrl + '/cart/clear',
          method: 'POST',
          header: {
            ...WxApi.header,
            'Access-Token': userStore.token
          },
          timeout: 5000,
          data: {
            cartIds
          },
          success: res => {
            resolve(res.data)
          },
          fail: res => {
            reject(res.data)
          }
        })
    })
}