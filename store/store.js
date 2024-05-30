/**
 * 全局状态管理
 */
import { observable, action } from 'mobx-miniprogram';
import { getCartList } from '../api/cart/cart';

export const cartSore = observable({
  // 数据字段
  cartList: [],

  // 计算属性
  get totalCount() {
    // 返回一些计算值，假设有需要计算的属性
    return 0; // 示例值，根据需要修改
  },
  get totalPrice() {
    // 返回一些计算值，假设有需要计算的属性
    return 0; // 示例值，根据需要修改
  },

  // actions
  getCartListAction: action(async () => {
    const res = await getCartList()
    cartSore.cartList = res.data.list
    // console.log(cartSore.cartList);
  }),
  upadateCartAction: action(() => {

  }),
  deleteCartAction: action(() => {

  })
});





