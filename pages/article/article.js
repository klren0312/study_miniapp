// pages/article/article.js
const firstPage = [{
  id: '1',
  title: '装修秘诀',
  description: '文艺气息爆棚的精致白色',
  talk:11,
  love:21,
  cover: 'https://frankfurt-cdr-contents-all.s3.cn-north-1.amazonaws.com.cn/Cauliflower_preview.jpeg'
}, {
  id: '2',
  title: '2装修秘诀',
  description: '文艺气息爆棚的精致白色',
  talk:11,
  love:21,
  cover: 'https://frankfurt-cdr-contents-all.s3.cn-north-1.amazonaws.com.cn/Cauliflower_preview.jpeg'
}, {
  id: '3',
  title: '3装修秘诀',
  description: '文艺气息爆棚的精致白色',
  talk:11,
  love:21,
  cover: 'https://frankfurt-cdr-contents-all.s3.cn-north-1.amazonaws.com.cn/Cauliflower_preview.jpeg'
}, {
  id: '4',
  title: '4装修秘诀',
  description: '文艺气息爆棚的精致白色',
  talk:11,
  love:21,
  cover: 'https://frankfurt-cdr-contents-all.s3.cn-north-1.amazonaws.com.cn/Cauliflower_preview.jpeg'
}]

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    articles: [],
    loading: false,
    loadMoreText: '加载更多'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getArticles(true)
  },
  loadMore: function(event){
    this.getArticles()
  },
  getArticles: function(e) {
    setTimeout(()=>{
      this.setData({
        articles: firstPage
      })
    }, 1000)
  },
  toDetailPage: function(e) {
    let id = e.currentTarget.dataset.id
    let readedArticles = wx.getStorageSync('READED_ARTICLES')
    if (!readedArticles) {
      wx.setStorageSync('READED_ARTICLES', readedArticles)
    }
    this.setData({ articles: this.addReadStatus(this.data.articles) })
    wx.navigateTo({
      url: `../articledt/articledt?id=${id}`
    })
  },
  addReadStatus: function(articles) {
    let readedArticles = wx.getStorageSync('READED_ARTICLES')
    if(!readedArticles) {
      return articles
    }

    let newArticles = []
    for(let i=0;i<articles.length;i++) {
      let article = Object.assign(articles[i])
      if(readedArticles.indexOf(articles.id)!= -1){
        article.isReaded = true
      } else {
        article.isReaded = false
      }
      newArticles.push(movie)
    }
    return newArticles
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
  onShareAppMessage: function () {
  
  }
})