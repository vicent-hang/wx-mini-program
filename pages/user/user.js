import Toast from "../../miniprogram_npm/vant-weapp/toast/toast"
import Dialog from "../../miniprogram_npm/vant-weapp/dialog/dialog"
import { userStore } from '../../store/store'
import { createStoreBindings } from 'mobx-miniprogram-bindings'

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
      this.clearInfo()
      Toast.success('退出成功!')

      setTimeout(() => {
        wx.navigateTo({
          url: '/pages/login/login'
        })
      },1000)
      }).catch(() => {
        // on cancel
      });

    },

    lgoin() {
      wx.navigateTo({
        url: '/pages/login/login'
      })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
    // 获取仓库数据
    this.storeBindings = createStoreBindings(this, {
      store: userStore,
      fields: ['userInfo'],
      actions: ['setUserInfoAction', 'clearInfo']
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
    let newUserInfo = {}
    if(wx.getStorageSync('USER_INFO')) {
      newUserInfo = JSON.parse(wx.getStorageSync('USER_INFO'))? JSON.parse(wx.getStorageSync('USER_INFO')) : {}
      newUserInfo.phoneNumber = newUserInfo.phoneNumber.slice(0,3)+'******'+newUserInfo.phoneNumber.slice(8,11)
    }
    this.setData({
      userInfo: newUserInfo
    })
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