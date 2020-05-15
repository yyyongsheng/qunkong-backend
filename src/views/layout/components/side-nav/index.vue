<template>
    <div class="sidenav">
      <slot name="logo"></slot>
      <sidebar-menu
          :sideRouter="sideRouter"
          @on-change="selectItem"
          >
      </sidebar-menu>
    </div>
</template>

<script>
    import SidebarMenu from './components/sidebar-menu'
    import { mapGetters } from 'vuex'

    export default {
      components: {
        SidebarMenu
      },
      computed: {
        ...mapGetters([
          'sideRouter'
        ])
      },
      methods:{
        selectItem(name) {
          this.$router.push({
            name
          })
        }
      }
    }
</script>


<style lang="scss">
    @import '~style/package.scss';
    .sidenav{
        position: fixed;
        height: 100%;
        width: 200px;
        z-index: 11;
        background-color: $background-color-FFFFFF;
        color: $text-color-fff;
       
        box-shadow:0px 0px 5px #666;
        transition: .38s;
        overflow: auto;
    }
</style>

