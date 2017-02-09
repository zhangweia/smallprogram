// pages/wxex/api/file/file.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },

  fileOpt:function(){
      wx.startRecord({
        success: function(res){
          // success
          console.log("======")
          console.log(res)
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
      
      setTimeout(function(){
          wx.stopRecord({
            success: function(res){
              // success
              console.log(res)
            },
            fail: function() {
              // fail
            },
            complete: function() {
              // complete
            }
          })
      },2000);
      
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