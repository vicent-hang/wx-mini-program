// pages/search/search.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    historyList: ['手机', '电脑', '茶'],
    inputValue: ''
  },

  /** 
   * 自定义方法
   */

  //搜索事件
  onSearch(event) {
    //  console.log(event.detail);
    const query = event.detail
    this.toSearchListPage(query)
  },

  //标签点击事件
  hanldeCilck(event) {
    const query = event.currentTarget.dataset.query;
    this.toSearchListPage(query)
  },

  //页面跳转
  toSearchListPage(query) {
    //判断查询参数是否在数组内
    if (!this.data.historyList.includes(query)) {
      this.data.historyList.unshift(query)
      const tempArray = this.data.historyList
      this.setData({
        historyList: tempArray
      })
    } else {
      //若在，则将改参数置顶 -> 先过滤再添加
      this.data.historyList = this.data.historyList.filter(item => item !== query)
      this.data.historyList.unshift(query)
      const tempArray = this.data.historyList
      this.setData({
        historyList: tempArray
      })
    }
    wx.navigateTo({
      url: '/pages/searchlist/searchlist',
    })
  },

  //删除历史
  handleDelete() {
    this.setData({
      historyList: []
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