Page({
  data:{

  },

  onTab: () =>  {
    wx.navigateTo({
      url: '/pages/posts/posts',
    })

    // wx.redirectTo({
    //   url: '/pages/posts/posts',
    // })
  }
})