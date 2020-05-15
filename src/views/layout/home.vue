<template>
  <div class="app-main">
    <side-nav>
      <div class="logo" slot="logo">
        <h3 class="textnowrap">群控管理系统</h3>
      </div>
    </side-nav>
    <app-main></app-main>
  </div>
</template>

<script>
import SideNav from "./components/side-nav";
import AppMain from "./components/app-main";
import { mapGetters } from "vuex";
export default {
  components: {
    SideNav,
    AppMain
  },
  computed: {
    ...mapGetters(["UserInfo"])
  },
  mounted() {
    // console.log(this.UserInfo)
  }
};
</script>

<style lang="scss" >
@import "~style/package.scss";
.app-main {
  height: 100%;
  .logo {
    text-align: center;
    height: $height-64;
    color: #333333;
    line-height: $height-64;
    background-color: $background-color-FFFFFF;
    font-size: $font-size-16;
  }

  .ivu-menu-dark {
    background: #fff;
  }
  .ivu-menu {
    background: #f2f2f2;
  }

  .app-main
    .ivu-menu-dark.ivu-menu-vertical
    .ivu-menu-opened
    .ivu-menu-submenu-title {
    background: #fff;
    color: #333;
  }

  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened .ivu-menu-submenu-title {
    background: #fff;
  }
  .ivu-menu-submenu-title {
    background: #fff;
    color: #333;
  }

  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover,
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover {
    color: #409fff;
    background: #ffff;
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item,
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title {
    color: #999;
  }

  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active,
  .ivu-menu-dark.ivu-menu-vertical
    .ivu-menu-submenu
    .ivu-menu-item-active:hover {
    color: #fff;
  }
  .ivu-menu-dark.ivu-menu-vertical
    .ivu-menu-item-active
    .ivu-menu-submenu-title {
    color: #409fff;
  }

  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu),
  .ivu-menu-dark.ivu-menu-vertical
    .ivu-menu-submenu-title-active:not(.ivu-menu-submenu) {
    background: #fff;
  }

  .ivu-menu-item .ivu-menu-item-active .ivu-menu-item-selected {
    background: #fff !important;
  }

  .sidebar-menu > .ivu-menu-item {
    color: #333 !important ;
  }
  .sidebar-menu > .ivu-menu-submenu > .ivu-menu-submenu-title {
    color: #333;
  }

  .sidebar-menu > .ivu-menu-item-selected {
    color: #409fff !important;
  }
}
</style>


