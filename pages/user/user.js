import Toast from "../../miniprogram_npm/vant-weapp/toast/toast"
import Dialog from "../../miniprogram_npm/vant-weapp/dialog/dialog"

// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  /**
   * 自定义方法
   */
  loginOut() {
    Dialog.confirm({
      title: '确定退出？',
    }).then(() => {
      wx.clearStorageSync()
      Toast.success('退出成功!')

      setTimeout(() => {
        wx.redirectTo({
          url: '/pages/login/login'
        })
      },1000)
    }).catch(() => {
      // on cancel
    });
    

    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const newUserInfo = JSON.parse(wx.getStorageSync('user_info'))? JSON.parse(wx.getStorageSync('user_info')) : {}
    if(newUserInfo.phoneNumber) {
      newUserInfo.phoneNumber = newUserInfo.phoneNumber.slice(0,3)+'******'+newUserInfo.phoneNumber.slice(8,11)
    }
    this.setData({
      userInfo: newUserInfo
    })
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