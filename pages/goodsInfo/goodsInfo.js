import { getGoodsInfo } from "../../api/goods/goods"

// pages/goodsInfo/goodsInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsInfoList: [],
    show: false
  },

  /**
   * 自定义方法
   */

   async getGoodsInfoList(goodsId) {
    const res = await getGoodsInfo(goodsId)
    const {data: { detail } } = res
    let newList = []
    newList.push(detail)
    this.setData({
      goodsInfoList: newList
    })
   },

   // 显示弹出层
   showPop() {
    this.setData({ show: true })
   },

   onClose() {
    this.setData({ show: false });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const goodsId = options.goodsId
    this.getGoodsInfoList(goodsId)
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