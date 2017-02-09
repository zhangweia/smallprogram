// pages/wxex/api/media/audio/backgroundAudio.js
Page({
  data:{
    src: ''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },

  playBackgroundAudio:function(){
    wx.playBackgroundAudio({
      dataUrl: 'http://localhost/music/aa.mp3',
      success: function(res){
        // success
        console.log("playSuccess")
        console.log(res);
      },
      fail: function() {
        // fail
        console.log("fail")

      },
      complete: function() {
        // complete 接口调用结束的回调函数（调用成功、失败都会执行）
        console.log("complete")

      }
    })
  },



  getBackgroundAudioPlayState:function(){
    wx.getBackgroundAudioPlayerState({
      success: function(res){
        // success
        console.log("getBackgroundAudioPlayState-->playSuccess")
        //duration	选定音频的长度（单位：s），只有在当前有音乐播放时返回
        //currentPosition	选定音频的播放位置（单位：s），只有在当前有音乐播放时返回
        //status	播放状态（2：没有音乐在播放，1：播放中，0：暂停中）
        //downloadPercent	音频的下载进度（整数，80 代表 80%），只有在当前有音乐播放时返回
        //dataUrl	歌曲数据链接，只有在当前有音乐播放时返回
        console.log(res)
      },
      fail: function() {
        // fail
         console.log("fail")

      },
      complete: function() {
        // complete
      }
    })
  },


  

  pauseBackgroundPlay:function(){
    wx.pauseBackgroundAudio({
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

  seekTo10sBackgroundPlay:function(){
    wx.seekBackgroundAudio({
      position: 10,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

  stopBackgroundPlay:function(){
    wx.stopBackgroundAudio({
      success: function(res){
        // success
        console.log("stopBackgroundPlay");
        console.log(res);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

  createAudioController:function(){

  },


  onReady:function(){
    // 页面渲染完成
    //监听背景音乐的播放
    wx.onBackgroundAudioPlay(function(res) {
      // callback
      console.log("==============:playingMusic:")
      console.log(res)

    })

    wx.onBackgroundAudioStop(function(res) {
      // callback
      console.log("==============:stopMusic:")
      console.log(res)
    })

    wx.onBackgroundAudioPause(function(res) {
      // callback
      console.log("==============pauseMusic:")
      console.log(res)
    })

    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.setSrc('http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46')
    this.audioCtx.play()

  },


   audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },


  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})