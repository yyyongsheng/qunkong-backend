<template>
    <div class="top-content">
      <keep-alive include="test-keep-alive">
          <router-view></router-view>
      </keep-alive>
    </div>
</template>


<script>
export default {
        methods:{
            Dropdownclick(item){
                console.log(item)
            }  
               
        },
}
</script>




<style lang="scss" scoped>
     @import '~style/package.scss';
    .top-content{
        @include displayFlex;
        @include perfix(flex, 1);
        background: #f0f0f0;
        margin-top:64px;
        overflow: auto;
    }
  
</style>

