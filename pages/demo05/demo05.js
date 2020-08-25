Page({
  data: {
    gender: "",
    fruitList: [
      {id: 0, name: "🍎", value: "apple"},
      {id: 1, name: "🍇", value: "grape"},
      {id: 2, name: "🍌", value: "bananer"}  
    ],
    checkFruitList: []
  },

  handleChange(e) {
    this.setData({
      gender: e.detail.value
    })
  },

  handleItemChange(e) {
    console.log(e);
    this.setData({
      checkFruitList: e.detail.value
    })
  }

})