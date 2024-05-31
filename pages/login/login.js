import { login } from "../../api/user/login"
import Toast from '../../miniprogram_npm/vant-weapp/toast/toast'
import { WxApi } from "../../utils/http.config";

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
      // console.log(res);
      if (res.status >= 200 && res.status < 300) {
        WxApi.header.token = res.data.token
        console.log(WxApi.header.token);
        wx.setStorageSync('token', res.data.token);
        wx.setStorageSync('user_info', JSON.stringify({userName: 'ikun',phoneNumber: this.data.phoneNumber}));
        Toast.success('登录成功!');
        // 跳转
        // 获取页面栈
        const pages = getCurrentPages();
        // 延迟1.5秒后再跳转
        setTimeout(() => {
          if (pages.length > 1) {
            // 如果有上一页，返回上一页
            wx.navigateBack();
          } else {
            // 如果没有上一页，返回首页
            wx.reLaunch({
              url: '/pages/index/index'
            });
          }
        }, 1000); 
      } else {
        Toast.fail('登录失败!');
      }
    } catch (error) {
      console.log(error);
      Toast.fail('登录失败!');
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

  //验证手机号
  vailPhoneNumber(event) {
    const value = event.detail
    if(value.length !== 11){
      this.setData({
        isRrror: true
      })
    }else {
      this.setData({
        isRrror: false
      })
    }
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