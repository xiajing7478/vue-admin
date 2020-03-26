import CompA from '@/componets/user/ComA'
import CompB from '@/componets/user/ComB'
import Vue from 'vue'
export default {
  componets: {
    CompA,
    CompB
  }
}

function registerAllComponents(requireContext) {
  return requireContext.keys().forEach(comp => {
    const vueComp = requireContext(comp)
    const compName = vueComp.name ? vueComp.name.toLowerCase() : /\/([\w-]+)\/vue$/.exec(comp)[1]
    Vue.component(compName, vueComp.default)
  })
}

registerAllComponents(require.context('./', false, /\.vue$/))