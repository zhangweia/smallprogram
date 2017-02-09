// pages/wxex/component/component.js
Page({
   data:{
    itemData:[
      {name:'视图容器',url:'./container/container'},
      {name:'基础内容',url:'./baseUI/baseUI'},
      {name:'表单组件',url:'./form/form'},
      {name:'导航',url:'./navigator/navigator'},
      {name:'媒体组件',url:'./media/media'},
      {name:'地图',url:'./map/map'},
      {name:'画布',url:'./canvas/canvas'}
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