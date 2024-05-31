import { getCart } from "../../api/cart/cart"
import { getGoodsInfo } from "../../api/goods/goods"
import Dialog from "../../miniprogram_npm/vant-weapp/dialog/dialog"
import Toast from "../../miniprogram_npm/vant-weapp/toast/toast"

// pages/goodsInfo/goodsInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsInfoList: [],
    show: false,
    count: 1,
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
    this.setData({ show: false  });
  },

  //数量加减
  sub() {
    
    this.setData({
      count: (this.data.count - 1) < 0? 0 : (this.data.count - 1)
    })
  },
  add() {
    this.setData({
      count: this.data.count + 1
    })
  },


  //加入购物车
  async addCart() {
    // 验证是否已经登录
    const token = wx.getStorageSync('token')
    if(!token) {
      Dialog.confirm({
        title: '您还没有登录哦!',
      })
        .then(() => {
          wx.navigateTo({
            url: '/pages/login/login',
          })
        })
        .catch(() => {
          // on cancel
        });
    }

    if(this.data.goodsInfoList.length === 0){
      return
    }
    const goodsId = this.data.goodsInfoList[0].goods_id
    const goodsNum = this.data.count
    const goodsSkuId = this.data.goodsInfoList[0].skuList[0].goods_sku_id
    const res = await getCart(goodsId, goodsNum, goodsSkuId)
    if(res.status >= 200 & res.status< 300) {
      Toast('添加购物车成功!')
      this.setData({
        show: false
      })
    }
  },

  goIndex() {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },

  goCart() {
    wx.switchTab({
      url: '/pages/cart/cart',
    })
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