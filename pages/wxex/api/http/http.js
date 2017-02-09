// pages/wxex/api/http/http.js
Page({
  data:{},

  sendHttpReq:function(){
      wx.request({
        url: 'test.php', //仅为示例，并非真实的接口地址
        data: {
          x: '' ,
          y: ''
        },
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
          console.log(res.data)
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