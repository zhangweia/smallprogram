// pages/wxex/framework/framework.js
Page({
  data:{
    itemData:[
      {name:'dataBind',url:'./framework/dataBind/dataBind'},
      {name:'event',url:'./framework/event/event'},
      {name:'listRender',url:'./framework/listRender/listRender'},
      {name:'reference',url:'./framework/reference/reference'},
      {name:'template',url:'./framework/template/template'}
    ]
  },

  btnOnClick:function(e){
    console.log(e.target.dataset.index)
    var index = e.target.dataset.index;
    console.log(this.data.itemData[index].name)
    console.log(this.data.itemData[index].url)
    wx.navigateTo({
      url: this.data.itemData[index].url,
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