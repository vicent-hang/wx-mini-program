import { getGoodsListByDef } from "../../api/goods/goods"

// pages/searchlist/searchlist.js

let queryObj = {}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    queryName: '',
    colors: [true, false , false],
    searchList: [],
    isVisual: false,
    isAsc: true, 
  },

  /** 
   * 自定义方法
  */

  // 获取商品列表
  async getGoodsDataList(obj) {
    try {
      // const queryObj = {}
      // queryObj.goodsName = goodsName
      const res = await getGoodsListByDef(obj)
      //响应状态码 成功的范围
      if(res.data.status >= 200 && res.data.status < 300 ) {
        this.setData({
          isVisual: true
        })
      }else {
        this.setData({
          isVisual: false
        })
      }
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

// 跳转详情页
goInfoPage(event) {
  const goodsId = event.currentTarget.dataset.goodsId
  wx.navigateTo({
    url: `/pages/goodsInfo/goodsInfo?goodsId=${goodsId}`,
  })
},

  // 标签功能
  // 综合
  handleTextClick01(event) {
    const index = parseInt(event.currentTarget.dataset.index)
    this.toggleColor(index)
    //显示结果
    queryObj = {
      goodsName: this.data.queryName
    }
    this.getGoodsDataList(queryObj)
  },

  // 销量
  handleTextClick02(event) {
    const index = parseInt(event.currentTarget.dataset.index)
    this.toggleColor(index)

    //显示结果
    queryObj = {
      goodsName: this.data.queryName,
      sortType: 'sales'
    }
    this.getGoodsDataList(queryObj)
  },

  // 价格
  handleTextClick03(event) {
    const index = parseInt(event.currentTarget.dataset.index)
    this.toggleColor(index)
    this.setData({
      isAsc: !this.data.isAsc
    })
    if(!this.data.isAsc) {
      this.desc()
      return
    }
    this.asc()
  },
  // 图标点击事件
  //升序
  asc(bool) {
    //显示结果
    queryObj = {
      goodsName: this.data.queryName,
      sortType: 'price',
      sortPrice: '0'
    }
    this.getGoodsDataList(queryObj)
  },
  //降序
  desc() {
    queryObj = {
      goodsName: this.data.queryName,
      sortType: 'price',
      sortPrice: '1'
    }
    this.getGoodsDataList(queryObj)
  },

  // 高亮切换
  toggleColor (index) {
    if(index !== 2) {
      this.setData({
        isAsc: true
      })
    }
    if (!this.data.colors[index]) {
      const newColors = this.data.colors.map((item, idx) => {
        return idx === index
      });
      this.setData({
        colors: newColors
      });
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    queryObj.goodsName = options.goodsName
    this.setData({
      queryName: queryObj.goodsName
    })
    this.getGoodsDataList(queryObj)
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