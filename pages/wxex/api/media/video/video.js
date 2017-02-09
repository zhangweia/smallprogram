// pages/wxex/api/media/video/video.js
Page({
  data:{},

  //sourceType	StringArray	否	album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']
  //maxDuration	Number	否	拍摄视频最长拍摄时间，单位秒。最长支持 60 秒
  //camera	String	否	默认调起的为前置还是后置摄像头。front: 前置，back: 后置，默认 back
  //success	Function	否	接口调用成功，返回视频文件的临时文件路径，详见返回参数说明
  //fail	Function	否	接口调用失败的回调函数
  //complete	Function	否	接口调用结束的回调函数（调用成功、失败都会执行）
  //返回参数说明
  //tempFilePath	选定视频的临时文件路径
  //duration	选定视频的时间长度
  //size	选定视频的数据量大小
  //height	返回选定视频的长
  //width	返回选定视频的宽

  bindButtonTap:function(){
      var that = this
      wx.chooseVideo({
          sourceType: ['album','camera'],
          maxDuration: 60,
          camera: 'back',
          success: function(res) {
              that.setData({
                  src: res.tempFilePath
              })
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