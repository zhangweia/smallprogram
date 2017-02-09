// pages/wxex/component/container/swiper/swiper.js
Page({
  data:{
    imgUrls: [
      "../../../image/pic01.jpeg",
      "../../../image/pic02.jpeg"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular:true,
    current:0,
  },

  swiperItemClick:function(e){
     console.log("swiperItemClick====" + this.data.imgUrls[this.data.current]);
  },

  swiperItemChange:function(event){
    console.log("swiperItemChange:" + event.detail.current)
    this.setData({
      current:event.detail.current
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