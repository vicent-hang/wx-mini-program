import { cartSore } from '../../store/store'
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import Toast from '../../miniprogram_npm/vant-weapp/toast/toast'

// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 自定义方法
   */
  sub(event) {
    const item = event.currentTarget.dataset.item
    this.upadateCartAction(item.goods_id, item.goods_num - 1, item.goods_sku_id)
    Toast.loading({
      duration: 1000,
      forbidClick: true,
      loadingType: 'spinner',
    });
  },

  add(event) {
    const item = event.currentTarget.dataset.item
    this.upadateCartAction(item.goods_id, item.goods_num + 1, item.goods_sku_id)
    Toast.loading({
      duration: 1000,
      forbidClick: true,
      loadingType: 'spinner',
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    // 获取仓库数据
    this.storeBindings = createStoreBindings(this, {
      store: cartSore,
      fields: ['cartList'],
      actions: ['getCartListAction','upadateCartAction','deleteCartAction']
    })
    this.getCartListAction()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    this.storeBindings.destroyStoreBindings()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})