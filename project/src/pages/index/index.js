// 获取全局应用程序实例对象

var indexOf = function (array, val) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].id == val) return i
  }
  return -1
}

var remove = function (array, val) {
  var index = indexOf(array, val)
  if (index > -1) {
    array.splice(index, 1)
  }
}

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    blur: true,
    blur_detail: true,
    message: [{
      id: 0,
      userName: 'test',
      time: '9-12',
      title: '标题',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, delectus. Vero commodi ab nihil ad ea, eos quidem provident recusandae! Explicabo ducimus aliquid reiciendis molestias assumenda pariatur sequi, in ipsa!'
    },
    {
      id: 1,
      userName: 'test',
      time: '9-12',
      title: '标题',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, delectus. Vero commodi ab nihil ad ea, eos quidem provident recusandae! Explicabo ducimus aliquid reiciendis molestias assumenda pariatur sequi, in ipsa!'
    },
    {
      id: 2,
      userName: 'test',
      time: '9-12',
      title: '标题',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, dele'
    },
    {
      id: 3,
      userName: 'test',
      time: '9-12',
      title: '标题',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, delectus. Vero commodi ab nihil ad ea, eos quidem provident recusandae! Explicabo ducimus aliquid reiciendis molestias assumenda pariatur sequi, in ipsa!'
    },
    {
      id: 4,
      userName: 'test',
      time: '9-12',
      title: '标题',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, delectus. Vero commodi ab nihil ad ea, eos quidem provident recusandae! Explicabo ducimus aliquid reiciendis molestias assumenda pariatur sequi, in ipsa!'
    },
    {
      id: 5,
      userName: 'test',
      time: '9-12',
      title: '标题',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, dele'
    }],
    detail: {
      group: '群名',
      managerName: '管理员名',
      tip: '标签',
      title: '标题',
      endTime: '2017-1-27',
      content: 'asdffffffffffffffffLorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quas, incidunt architecto optio quidem veniam repudiandae ipsum adipisci nihil nisi reprehenderit suscipit consectetur nam id, placeat ullam dolorum maiores, at.'
    },
    historyMessage: [{
      userName: 'test',
      time: '9-12',
      title: '标题',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, delectus. Vero commodi ab nihil ad ea, eos quidem provident recusandae! Explicabo ducimus aliquid reiciendis molestias assumenda pariatur sequi, in ipsa!'
    },
    {
      userName: 'test',
      time: '9-12',
      title: '标题',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, delectus. Vero commodi ab nihil ad ea, eos quidem provident recusandae! Explicabo ducimus aliquid reiciendis molestias assumenda pariatur sequi, in ipsa!'
    },
    {
      userName: 'test',
      time: '9-12',
      title: '标题',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, dele'
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  changeItem: function (e) {
    if (e.currentTarget.id === 'history-item') {
      this.setData({blur: false})
    } else {
      this.setData({blur: true})
    }
  },

  showDetail: function (e) {
    if (this.data.blur_detail) {
      this.setData({blur_detail: false})
    } else {
      this.setData({blur_detail: true})
    }
  },

  hide: function (e) {
    this.setData({blur_detail: true})
  },

  delet: function (e) {
    let Message = this.data.message
    let HistoryMessage = this.data.historyMessage
    let index = indexOf(Message, e.currentTarget.id)
    HistoryMessage.push(Message[index])
    remove(Message, e.currentTarget.id)
    this.setData({message: Message})
    this.setData({historyMessage: HistoryMessage})
  },

  finish: function (e) {
    let Message = this.data.message
    let HistoryMessage = this.data.historyMessage
    let index = indexOf(Message, e.currentTarget.id)
    HistoryMessage.push(Message[index])
    remove(Message, e.currentTarget.id)
    this.setData({message: Message})
    this.setData({historyMessage: HistoryMessage})
  },

  onLoad () {
    console.log(' ---------- onLoad ----------')
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    console.log(' ---------- onReady ----------')
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    console.log(' ---------- onShow ----------')
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    console.log(' ---------- onHide ----------')
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    console.log(' ---------- onUnload ----------')
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    console.log(' ---------- onPullDownRefresh ----------')
  }
})
