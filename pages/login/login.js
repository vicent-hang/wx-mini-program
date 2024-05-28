import { login } from "../../api/user/login"

// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isRrror: false,
    phoneNumber: '',
    passwrod: '',
    isVisual: false
  },

  /**
   * 自定义方法
   */
  async onLogin() {
    try {
      const res = await login(this.data.phoneNumber, this.data.passwrod);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  },

  getPassword(event) {
    const psw = event.detail.value
    this.setData({
      passwrod: psw
    })
  },

  getPoneNumer(event) {
    const pNumber = event.detail.value
    this.setData({
      phoneNumber: pNumber
    })
  },

  // 显示密码
  onClickIcon() {
    this.setData({
      isVisual: !this.data.isVisual
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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