// pages/wxex/api/media/record/record.js
Page({
  data:{},

  startRecord:function(){
     wx.startRecord({
       success: function(res){
         var tempFilePath = res.tempFilePath 
         console.log("startRecord--->success:" + tempFilePath)
       },
       fail: function() {
         // fail
         console.log("startRecord--->fail:")

       },
       complete: function() {
         // complete
         console.log("startRecord--->complete:")
       }
     })
  },

  stopRecode:function(){
     wx.stopRecord({
       success: function(res){
         // success
         var tempFilePath = res.tempFilePath 
         console.log("stopRecode--->success:" + tempFilePath)
       },
       fail: function() {
         // fail
         console.log("stopRecode--->fail:")
       },
       complete: function() {
         // complete
         console.log("stopRecode--->complete:")
       }
     })
  },

  playVoice:function(){
      wx.startRecord({
        success: function(res) {
          var tempFilePath = res.tempFilePath
          wx.playVoice({
            filePath: tempFilePath,
            complete: function(){
            }
          })
        }
      })
  },

  pauseVoice:function(){
    wx.startRecord({
      success: function(res) {
        var tempFilePath = res.tempFilePath
          wx.playVoice({
          filePath: tempFilePath
        })

        setTimeout(function() {
            //暂停播放
          wx.pauseVoice()
        }, 5000)
      }
    })
  },

  stopVoice:function(){
    wx.startRecord({
      success: function(res) {
        var tempFilePath = res.tempFilePath
        wx.playVoice({
          filePath:tempFilePath
        })

        setTimeout(function(){
          wx.stopVoice()
        }, 5000)
      }
    })
  },


  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
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