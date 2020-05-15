<template>
    <div class="app-main">
        <top-header></top-header>
        <top-content></top-content>
    </div>
</template>

<script>
    import TopHeader from './components/top-header'
    import TopContent from './components/top-content'

    export default {
        components: {
            TopHeader,
            TopContent
        }
    }
</script>


<style lang="scss" scoped>
   @import '~style/package.scss';

    .app-main{
        @include flexDirectionColumn;
        position: relative;
        position: fixed;
        top: 0;
        left: 200px;
        right: 0;
        bottom: 0;
        z-index: 10;
        overflow: hidden;
        transition: .38s;
    }
</style>

