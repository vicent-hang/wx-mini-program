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
  //全选
  get selectAllCart() {
    return cartSore.cartList.every(item => item.isChecked)
  },


  // actions
  //获取购物车列表
  getCartListAction: action(async () => {
    try {
      const { data } = await getCartList()
  
      // 给每个item 加上isChecked标识，用于计算属性
      data.list.forEach(item => item.isChecked = false)
      cartSore.cartList = data.list
    } catch (error) {
      console.log(error);
    }
  }),
  //更新购物车
  upadateCartAction: action(async (goodsId,goodsNum,goodsSkuId) => {
    try {
      await getUpdadeCart(goodsId,goodsNum,goodsSkuId)
      // console.log(res);
  
      //重写拉取列表
      cartSore.getCartListAction()
    } catch (error) {
      console.log(error);
    }
  }),
  //删除购物车item
  deleteCartAction: action(async (cartIds) => {
    try {
      await deletCart(cartIds)
  
      //重写拉取列表
      cartSore.getCartListAction()
    } catch (error) {
      console.log(error);
    }
  }),
  //获取选中的item
  getIsChecked: action((array) => {
    // 数组中有的id，isChecked为true, 没有的为false
    const idsSet = new Set(array.map(id => parseInt(id)));
    cartSore.cartList = cartSore.cartList.map(item => ({
      ...item,
      isChecked: idsSet.has(item.id)
    }));
    // console.log(cartSore.cartList);
  }),
  //切换全选状态
  toggleAllCheck: action((flag) => {
    cartSore.cartList.forEach(item => item.isChecked = flag)
  })

 
  
});





