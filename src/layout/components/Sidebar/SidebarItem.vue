<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children, item)
    && (!onlyOneChild.children || onlyOneChild.noShowingChildren)
    && !item.alwaysShow">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)"
        :class="{'submenu-title-noDropdown':!isNest}">
          <item :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
          :title="onlyOneChild.meta.title"/>
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title"/>
      </template>
      <sidebar-item v-for="child in item.children" :key="child.path" :is-nest="true"
      :item="child" :base-path="resolvePath(child.path)" class="nest-menu"/>
    </el-submenu>
  </div>
</template>
<script>
import path from 'path'
import Item from './Item'
import { isExternal } from '@/utils/validate'
import AppLink from './Link'
export default {
  name: 'SidebarItem',
  components: {
    AppLink,
    Item
  },
  props: {
    basePath: { type: String, default: '' },
    isNest: { type: Boolean, default: false },
    item: { type: Object, required: true }
  },
  data() {
    this.onlyOneChild = null
    return {}
  },
  methods: {
    // eslint-disable-next-line space-infix-ops
    hasOneShowingChild(children=[], parent) {
      const showChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })
      // When there is only one child router, the child router is displayed by default
      if (showChildren.length === 1) {
        return true
      }
      // Show parent if there are no child router to display
      if (showChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }
      return false
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
