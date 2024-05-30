/**
 * 全局状态管理
 */
import { observable, action } from 'mobx-miniprogram';
import { getCartList, getUpdadeCart } from '../api/cart/cart';

export const cartSore = observable({
  // 数据字段
  cartList: [],

  // 计算属性
  get totalCount() {
    const length = cartSore.cartList.reduce((sum, item) => sum + item.goods_num, 0)
    return length; 
  },
  get totalPrice() {
    // 返回计算值
    const totalPrice = cartSore.cartList.reduce((sum, item) => sum + item.goods_num * item.goods.goods_price_max, 0)
    return totalPrice.toFixed(0);
  },

  // actions
  getCartListAction: action(async () => {
    const res = await getCartList()
    cartSore.cartList = res.data.list
    // console.log(cartSore.cartList);
  }),
  upadateCartAction: action(async (goodsId,goodsNum,goodsSkuId) => {
    await getUpdadeCart(goodsId,goodsNum,goodsSkuId)
    // console.log(res);

    //重写拉取列表
    cartSore.getCartListAction()
  }),
  deleteCartAction: action(() => {

  })
});





