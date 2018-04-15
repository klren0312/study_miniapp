// pages/articledt/articledt.js
const articleInfo={
  title:'特斯拉卡车发布',
  category:'科技',
  poster:'https://frankfurt-cdr-contents-all.s3.cn-north-1.amazonaws.com.cn/Chinese_Cabbage_preview.jpeg',
  content:'特斯拉卡车发布了哈哈哈',
  created_at:'2017-11-11'
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getArticle(options.id)
  },
  getArticle: function(id) {
    this.setData({
      article: articleInfo
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options) {
    return {
      title: '治电农产品',
      path:'/pages/articledt/articledt?id=1',
      success: function() {
        console.log('share successful')
      },
      fail: function() {

      }
    }
  }
})