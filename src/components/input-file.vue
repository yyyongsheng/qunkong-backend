<template>
  <div style="position: relative;" :style="{width: minWidth + 'px', height: minHeight + 'px'}">
    <input  class="upvideo"
            type="file"
            :accept="accept"
            :multiple='multiple'
            @change="uploadVideo"
            />
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      multiple: {
        type: Boolean,
        default: false
      },
      accept: {
        type: String,
        default: 'image/jpeg,image/jpg,image/png'
      },
      minWidth: {
        type: Number,
        default: 90
      },
      minHeight: {
        type: Number,
        default: 120
      }
    },
    methods: {
      uploadVideo(e) {
        if (!e.target.files.length) return;
        this.$emit('uploadVideo', e.target.files)
      }
    }
  }
</script>


<style lang="scss" scoped>
  .upvideo {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      width: 90px;
      opacity: 0;
      z-index: 10;
      -ms-filter: "alpha(opacity=0)";
  }
</style>

