// pages/main/main.js
const data = require('data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    whos: data.whos,
    wheres: data.wheres,
    hows: data.hows,
    whats: data.whats,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.setData({
      who: this.random(this.data.whos),
      where: this.random(this.data.wheres),
      how: this.random(this.data.hows),
      what: this.random(this.data.whats),
    });
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

  },

  random: function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

})