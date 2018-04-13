//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onReady: function() {
    console.log(app)
    console.log(wx.canIUse('cover-view'))
  },
  onHide: function() {
    console.log('onHide')
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goToScroll: function() {
    wx.navigateTo({
      url: '/pages/scroll/scroll',
    })
  },
  goToSwiper: function() {
    wx.navigateTo({
      url: '/pages/swiper/swiper',
    })
  },
  goToMoveable: function() {
    wx.navigateTo({
      url: '/pages/moveable/moveable',
    })
  },
  goToCover: function() {
    wx.navigateTo({
      url: '/pages/cover/cover',
    })
  },
  goToBase: function() {
    wx.navigateTo({
      url: '/pages/base/base',
    })
  },
  goToForm: function() {
    wx.navigateTo({
      url: '/pages/form/form',
    })
  },
  goToMedia: function() {
    wx.navigateTo({
      url:'/pages/media/media',
    })
  },
  goToTab: function() {
    wx.navigateTo({
      url: '/pages/tab/tab',
    })
  },
  goToMypage: function() {
    wx.navigateTo({
      url: '/pages/mypage/mypage',
    })
  },
  goToMap: function() {
    wx.navigateTo({
      url: '/pages/map/map',
    })
  },
  goToRequest: function() {
    wx.navigateTo({
      url: '/pages/request/request',
    })
  },
  goToLive: function(){
    wx.navigateTo({
      url: '/pages/live/live',
    })
  },
  goToToast: function() {
    wx.navigateTo({
      url: '/pages/toast/toast',
    })
  },
  goToUse: function() {
    wx.navigateTo({
      url: '/pages/use/use',
    })
  },
  goToLife: function() {
    wx.navigateTo({
      url: '/pages/life/life?id=1',
    })
  },
  goToModule: function() {
    wx.navigateTo({
      url: '/pages/module/module',
    })
  },
  goToWxs: function() {
    wx.navigateTo({
      url: '/pages/wxs/wxs',
    })
  },
  goToOpendata: function() {
    wx.navigateTo({
      url: '/pages/opendata/opendata',
    })
  },
  goToInput: function() {
    wx.navigateTo({
      url: '/pages/input/input',
    })
  },
  goToWebview: function() {
    wx.navigateTo({
      url: '/pages/webview/webview',
    })
  },
  goToLogin: function() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  }
})
