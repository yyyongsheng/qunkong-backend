<template>
    <Menu :theme="theme" :active-name="$route.name" class="sidebar-menu" width="auto" :open-names="openNames" @on-select="changeMenu" @on-open-change="openChange">
        <template v-for="item in sideRouter">
            <MenuItem v-if="item.children.length <= 1" :name="item.children[0].name" :key="item.name">
                <Icon :type="item.icon"></Icon>
                <span>{{item.children[0].title}}</span>
            </MenuItem>
            <Submenu v-if="item.children.length > 1" :name="item.name" :key="item.path">
              
                <template slot="title">
                    <Icon :type="item.icon"></Icon>
                    <span>{{item.title}}</span>
                </template>
                <template v-for="child in item.children">
                    <MenuItem :name="child.name" :key="child.name">
                        <!-- <Icon :type="child.icon"></Icon> -->
                        <span>{{child.title}}</span>
                    </MenuItem>
                </template>
            </Submenu>
        </template>
    </Menu>
</template>

<script>
  export default {
    props: {
        sideRouter: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    created() {
      this.openNames = localStorage.menuArr ? JSON.parse(localStorage.menuArr) : []
    },
    data() {
      return{
        theme: 'dark',
        openNames: []
      }
    },
    methods: {
      changeMenu(name) {
        this.$emit('on-change', name)
      },
      openChange(data) {
        localStorage.setItem('menuArr', JSON.stringify(data))
      }
    }
  }
</script>
