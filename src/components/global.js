import Vue from 'vue'

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const requireComponent = require.context('./user', false, /\.vue$/)

/**
 * 自动注册到全局组件
 */
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  // 因为得到的filename格式是: './ComA.vue', 所以这里我们去掉头和尾，只保留真正的文件名
  const compName = capitalizeFirstLetter(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  Vue.component(compName, componentConfig.default || componentConfig)
})
