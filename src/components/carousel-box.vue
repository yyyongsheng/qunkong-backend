<template>
  <Carousel :autoplay="autoPlay" v-model="Index" :dots="Dots" :loop="Loop" v-if="imgArr.length">
    <CarouselItem v-for="item in imgArr" :key="item.id">
        <img :src="item" alt="" style="width:368px;" />
    </CarouselItem>
  </Carousel>
</template>
<script>
  export default {
    props: {
      currentIndex: {
        type: Number,
        default: 0
      },
      imgArr: {
        type: Array,
        default: () => {
          return []
        }
      },
      Dots: {
        type: String,
        default: 'inside'
      },
      Loop: {
        type: Boolean,
        default: false
      },
      autoPlay: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      currentIndex(newIndex) {
        this.Index = newIndex
      }
    },
    data() {
      return {
        Index: 0
      }
    }
  }
</script>