import { getGoodsListByDef } from "../../api/goods/goods"

// pages/searchlist/searchlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    queryName: '',
    colors: [true, false , false],
    searchList: [],
    isOK: false
  },

  /** 
   * 自定义方法
  */

  // 获取商品列表
  async getGoodsDataList(goodsName) {
    try {
      const queryObj = {}
      queryObj.goodsName = goodsName
      const res = await getGoodsListByDef(queryObj)
      //解构
      const { list: { data } } = res.data.data
      //处理名字长度
      data.forEach(e => {
        if(e.goods_name.length > 20) {
          e.goods_name = e.goods_name.slice(0,30) + "..."
        }
      });
      this.setData({
        searchList: data
      })
    } catch (error) {
      console.log(error);
    }
 },

 //跳转搜索页
 onSearch() {
  wx.navigateTo({
    url: '/pages/search/search',
  })
},

  // 标签功能
  handleTextClick01(event) {
    // 高亮显示
    const index = parseInt(event.currentTarget.dataset.index)
    if (!this.data.colors[index]) {
      const newColors = this.data.colors.map((item, idx) => {
        return idx === index
      });
      this.setData({
        colors: newColors
      });
    }

    //显示数据
    this.getGoodsDataList(this.data.queryName)
  },

  // 显示销量结果

  // 价格排序

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const goodsName = options.goodsName
    this.setData({
      queryName: goodsName
    })
    this.getGoodsDataList(goodsName)
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