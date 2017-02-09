// pages/wxex/api/view/dialog/dialog.js
Page({
  data:{},


  //icon	String	否	图标，只支持"success"、"loading",默认为success
  //duration	Number	否	提示的延迟时间，单位毫秒，默认：1500, 最大为10000
  onShowToast:function(){
    wx.showToast({
      title: '加载中',
      icon:'loading',
      duration: 10000
    })

    setTimeout(function(){
      wx.hideToast()
    },2000)

  },

 //显示确认和取消对话框
  onShowModal:function(){
      wx.showModal({
        title:"title",
        content:"this is a confirm and cancel dialog",
        success:function(res){
            if(res.confirm){
              wx.showToast({
                title:"click confirm",
              })
            }else{
              wx.showToast({
                title:'click cancel'
              })
            }
        },
      })
  },

 //showCancel	Boolean	否	是否显示取消按钮，默认为 true
 //cancelText	String	否	取消按钮的文字，默认为"取消"，最多 4 个字符
 //cancelColor	HexColor	否	取消按钮的文字颜色，默认为"#000000"
 //confirmText	String	否	确定按钮的文字，默认为"确定"，最多 4 个字符
 //confirmColor	HexColor	否	确定按钮的文字颜色，默认为"#3CC51F"
  onShowModalDefine:function(){
    wx.showModal({
      title:"title",
      content:"confirm defile",
      showCancel:false,
    })
  },

  //itemList	String Array	是	按钮的文字数组，数组长度最大为6个
  //itemColor	HexColor	否	按钮的文字颜色，默认为"#000000"
  onShowMenu:function(){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function(res) {
        console.log(res.tapIndex)
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);
    if(options){
      wx.showToast({
        title:options.id
      })
    }
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