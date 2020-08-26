// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // name: {
    //   type: String,
    //   value: ""
    // }

    tabs: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },

  /**
   * 组件的方法列表
   *  1 页面.js 文件中 存放事件回调函数的时候 存放在data同层级下！
   *  2 组件.js 文件中 存放事件回调函数的时候 必须要存在在 methods中！
   *  3 触发父组件中的自定义事件 同时传递数据给  父组件 
   *    this.triggerEvent("父组件自定义事件的名称",要传递的参数)
   *  4 获取data中的数组
   *    解构  对 复杂类型进行结构的时候 复制了一份 变量的引用而已
   *    最严谨的做法 重新拷贝一份 数组，再对这个数组的备份进行处理，
   *    let tabs = JSON.parse(JSON.stringify(this.data.tabs));
   *    不要直接修改 this.data.数据 
   */
  methods: {
    handleItemTab(e) {
      const {index} = e.currentTarget.dataset;
      this.triggerEvent("itemChange", {index});

      // let {tabs} = this.data;
      // tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
      // this.setData({
      //   tabs: tabs
      // })
    }
  }
})
