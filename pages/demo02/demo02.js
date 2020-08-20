// pages/demo02/demo02.js
Page({
  data: {
    num: 0
  },

  handleTab(e) {
    const oper = e.currentTarget.dataset.oper;
    this.setData({
        num: this.data.num + oper
    })
  },

  handleInput(e) {
    this.setData({
      num: e.detail.value
    })
  }
})