// pages/wxex/component/form/form.js
Page({
   data:{
    itemData:[
      {name:'button',url:'./button/button'},
       {name:'checkbox',url:'./checkbox/checkbox'},
       {name:'input',url:'./input/input'},
       {name:'picker',url:'./picker/picker'},
       {name:'picker-view',url:'./picker-view/picker-view'},
       {name:'radio',url:'./radio/radio'},
       {name:'slider',url:'./slider/slider'},
       {name:'switch',url:'./switch/switch'},
       {name:'textarea',url:'./textarea/textarea'}

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