<template>
  <div :class="{'has-logo': showLogo}">
    <Logo v-if="showLogo" :collapse="isCollapse"/>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu"
      :collapse="isCollapse" :background-color="variables.menuBg"
      :text-color="variables.menuText" :unique-opened="false"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false" mode="vertical">
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import globalConfig from '@/utils/globalConfig.js'
export default {
  name: 'Sidebar',
  components: {
    Logo,
    SidebarItem
  },
  computed: {
    routes() {
      console.log('this.$router.options.routes', this.$router.options.routes)
      return this.$router.options.routes
    },
    showLogo() {
      return globalConfig.sidebarLogo || false
    },
    isCollapse() {
      return globalConfig.opened
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables() {
      return variables
    }
  }
}
</script>
