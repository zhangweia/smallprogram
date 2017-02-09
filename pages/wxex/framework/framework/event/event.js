// pages/wxex/framework/framework/event/event.js
Page({
  data:{},

  tapName: function(event) {
    console.log(event)
  },

  bindViewTap:function(event){
    event.target.dataset.alphaBeta === 1 // - 会转为驼峰写法
    event.target.dataset.alphabeta === 2 // 大写会转为小写
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