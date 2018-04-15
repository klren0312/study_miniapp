// pages/toast/toast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  showToast: function() {
    wx.showToast({
      title: '成功自裁',
      icon: 'success',
      duration: 1000
    })
  },
  showLoading: function() {
    wx.showLoading({
      title: '等待自裁',
      duration: 2000
    })
  },
  showModal: function() {
    wx.showModal({
      title: '自裁确定',
      content: '您确定自裁吗？',
      showCancel: true,
      cancelText: '拒绝',
      cancelColor: 'red',
      confirmText: '同意',
      confirmColor: 'lightblue',
      success: function (res) {
        console.log("success", res)
      },
      fail: function (res) {
        console.log("fail", res)
      },
      complete: function (res) {
        console.log("complete", res)
      },
    })
  },
  showAction: function() {
    wx.showActionSheet({
      itemList: ['A','B','C'],
      success: function(res) {
        console.log(res.tapIndex)
      },
      fail: function(res){
        console.log(res.errMsg)
      }
    })
  }
  
})