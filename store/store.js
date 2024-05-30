/**
 * 全局状态管理
 */
import { observable, action } from 'mobx-miniprogram';
import { deletCart, getCartList, getUpdadeCart } from '../api/cart/cart';

export const cartSore = observable({
  // 数据字段
  cartList: [],

  // 计算属性
  get totalCount() {
    const length = cartSore.cartList.reduce((sum, item) => sum + item.goods_num, 0)
    return length; 
  },
  get totalPrice() {
    // 返回计算属性
    const totalPrice = cartSore.selCheckedItem.reduce((sum, item) => sum + item.goods_num * item.goods.goods_price_max, 0)
    return totalPrice.toFixed(0);
  },
  // 选中的商品
  get selCheckedItem () {
    return cartSore.cartList.filter(item => item.isChecked === true)
  },


  // actions
  getCartListAction: action(async () => {
    const { data } = await getCartList()

    // 给每个item 加上isChecked标识，用于计算属性
    data.list.forEach(item => item.isChecked = false)
    cartSore.cartList = data.list
  }),
  upadateCartAction: action(async (goodsId,goodsNum,goodsSkuId) => {
    await getUpdadeCart(goodsId,goodsNum,goodsSkuId)
    // console.log(res);

    //重写拉取列表
    cartSore.getCartListAction()
  }),
  deleteCartAction: action(async (cartIds) => {
    await deletCart(cartIds)

    //重写拉取列表
    cartSore.getCartListAction()
  }),
  getIsChecked: action((array) => {
    for(let i = 0; i<array.length; i++) {
      if(cartSore.cartList[i].id === parseInt(array[i]))
      cartSore.cartList[i].isChecked = !cartSore.cartList[i].isChecked
    }
  })
  
});





