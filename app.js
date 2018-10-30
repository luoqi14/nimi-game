//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    this.audioCtx = wx.createInnerAudioContext();
    // this.audioCtx.autoplay = true;
    // this.audioCtx.loop = true;
    wx.onAccelerometerChange((e) => {
      if (Math.abs(e.x - this.lastX) > 1.5 || Math.abs(e.y - this.lastY) > 1.5 || Math.abs(e.z - this.lastZ) > 1.5) {
        if (!this.waiting) {
          this.waiting = true;
          this.audioCtx.obeyMuteSwitch = false;
          this.audioCtx.title = 'music';
          this.audioCtx.src = '/sound.mp3';
          this.audioCtx.play();
          this.audioCtx.onPlay(() => {
            console.log('开始播放')
          })
          wx.redirectTo({
            url: '/pages/main/main',
          });
          setTimeout(() => {
            this.waiting = false;
          }, 2000);
        }
      
      }
      this.lastX = e.x;
      this.lastY = e.y;
      this.lastZ = e.z;
    })
  },
  globalData: {
    userInfo: null
  },
  lastX: 0,
  lastY: 0,
  lastZ: 0,
  waiting: false,
})