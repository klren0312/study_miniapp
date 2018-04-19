// pages/socket/socket.js
const io = require('../../libs/weapp.socket.io.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: 'weapp.socket.io实例',
    })
    this.createConnect()
  },
  /**
   * 创建连接
   */
  createConnect: function(e) {
    /**
     * 初始化
     */
    const socket = (this.socket = io('http://127.0.0.1:7001/'))
    /**
     * 连接
     */
    socket.on('connect', ()=>{
      socket.emit('chat', `{heart:1}`)
      console.log('已经连接')
    })
    /**
     * 连接失败
     */
    socket.on('connect_error', d => {
      console.log(`连接失败：${d}`)
    })
    /**
     * 连接超时
     */
    socket.on('connect_timeout', d=> {
      console.log(`连接超时：${d}`)
    })
    /**
     * 断开连接
     */
    socket.on('disconnect', reason => {
      console.log(`断开连接：${reason}`)
    })
    /**
     * 重新连接
     */
    socket.on('reconnect', attemptNumber => {
      socket.emit('chat', `{heart:1}`)
      console.log(`重新连接成功：${attemptNumber}`)
    })
    /**
     * 重新连接失败
     */
    socket.on('reconnect_failed', ()=>{
      console.log(`重新连接失败`)
    })
    /**
     * 错误
     */
    socket.on('error', err => {
      console.log('错误： ${err}')
    })
    /**
     * 服务器连接相关
     */
    socket.on('res', info => {
      console.log(`info:${info}`)
    })
    socket.emit('chat', `{heart:1}`)
    socket.on('chat', v => {
      console.log(v)
    })
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
    // 页面卸载断开连接
    this.socket.close()
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