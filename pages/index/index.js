// pages/index/index.js

import { createStoreBindings } from "mobx-miniprogram-bindings";
import { getIndexList }  from "../../api/home/index"
import { userStore } from '../../store/store'
import { WxApi } from "../../utils/http.config";


Page({

  /**
   * 页面的初始数据
   */
  data: {
    carouselList: [],
    goodsList: [],
    currentPage: 0
	},
	
	/**
	 * 自定义方法 
	 */
	async getHomeDataList() {
    try {
      const res = await getIndexList()
      const dataList = res.data.data.pageData
      //处理商品组的名字长度
      dataList.items[6].data.forEach(e => {
        if(e.goods_name.length > 20) {
          e.goods_name = e.goods_name.slice(0,30) + "..."
        }
      });
      this.setData({
        carouselList: dataList.items[1].data,
        goodsList: dataList.items[6].data
      })
      // console.log(this.data.carouselList);
    } catch (error) {
      console.log(error);
    }
  },
  
  onSearch() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

  //跳转详情页
  goGoodsInfoPage(event) {
    const id = event.currentTarget.dataset.goodsId
    // console.log(id);
    wx.navigateTo({
      url: `/pages/goodsInfo/goodsInfo?goodsId=${id}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getHomeDataList()
    // this.storeBindings = createStoreBindings(this, {
    //   store: userStore,
    //   fields: ['userInfo'],
    //   actions: ['setUserInfo']
    // })
    // this.setUserInfo()
    
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