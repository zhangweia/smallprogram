// pages/wxex/api/view/NavigationBarTitle/NavigationBarTitle.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },

  setNavigationBarTitle:function(){

      wx.showNavigationBarLoading();

      wx.setNavigationBarTitle({
        title: 'navigationBarTitle',
        success: function(res) {
          // success
          wx.hideNavigationBarLoading();
        }
      })
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