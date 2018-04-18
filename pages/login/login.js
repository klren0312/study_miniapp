// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.checkSession({
      success: function (v) {
        console.log(v)
      },
      fail: function (v) {
        console.log(v)
        this.login()
      }.bind(this)
    })
  },
  login: function() {
    wx.login({
      success: (loginRes) => {
        wx.getUserInfo({
          success: function (rawData) {
            let { encryptedData, iv, signature } = rawData;
            wx.request({
              url: 'http://localhost:7001/weapp',
              method: 'POST',
              data: {
                'crypted': encryptedData,
                'iv': iv,
                'signature': signature,
                'code': loginRes.code
              },
              success: (res) => {
                wx.setStorage({
                  key: 'skey',
                  data: res.data.skey,
                })
              }
            })
          }
        })
      }
    })
    
  },
  check: function() {
    wx.checkSession({
      success: function(v) {
        console.log(v)
      },
      fail: function(v){
        console.log(v)
        this.login()
      }.bind(this)
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
  onShareAppMessage: function () {
  
  }
})