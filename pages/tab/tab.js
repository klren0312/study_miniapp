// pages/tab/tab.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0
  },

 
  /**
   * 滑动切换
   */
  swiperTab: function(e) {
    this.setData({
      currentTab: e.detail.current
    })
  },
  /**
   * 点击切换
   */
  clickTab: function(e) {
    if(this.data.currentTab == e.target.dataset.current) {
      return false
    } else {
      this.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  
})