// pages/form/form.js
var types = ['default', 'primary', 'warn']
var pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    items: [
      {name:'USA', value:'美国'},
      { name: 'USA', value: '美国' },
      { name: 'USA', value: '中国',checked:'true' },
      { name: 'USA', value: '美国' },
      { name: 'USA', value: '美国' },
      { name: 'USA', value: '美国' }
    ]
  },
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  setDisabled: function(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function(e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function(e) {
    this.setData({
      loading: !this.data.loading
    })
  },
  formSubmit: function(e) {
    console.log('携带数据为',e.detail.value)
  },
  formReset: function() {
    console.log('form 发生reset事件')
  }
}

for(let i = 0;i < types.length; ++i){
  (function(type){
    pageObject[type] = function(e) {
      var key = type + 'Size'
      var changedData = {}
      changedData[key] = this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })
}
Page(pageObject)