export const playVideo = {
  methods: {
    createVideoTag() {
      const video = document.createElement('video');
      video.id = 'qiniuvideo';
      this.$refs.model.$vnode.elm.querySelector(".ivu-modal-body").appendChild(video);
    },
    removeTag() {
      const qiniuvideo = document.getElementById('qiniuvideo');
      const canvas = document.getElementsByTagName("canvas")[0];
      const note = document.getElementsByClassName("video-damage-note")[0];
      if (note) note.style.display = 'none'
      canvas.style.display = 'none'
    },
    showmgorVidModal() {
      if (!this.rowdata.private_video_down_url) {
        this.$Message.warning('暂无视频');
        return
      };
      this.imgorvidtitle = '查看视频';
      this.imgorvidmodal = true;
      // JSX创建video元素
      this.createVideoTag();
      // 初始化视频
      this.elevideo = new QiniuPlayer('qiniuvideo', {
            engineOrder: ['flash', 'html5'],
            autoplay: true,
            preload: 'auto',
            controls: false,
            url: this.rowdata.private_video_down_url,
            // url: 'http://p3ceg68gr.bkt.clouddn.com/a80037357c07f879e47c49e10bb90b97_4.m3u8',
            DRMKey: [0x64,0x48,0x38,0x6a,0x71,0x53,0x68,0x78,0x57,0x43,0x4a,0x4e,0x70,0x77,0x6c,0x78],
            type: 'hls'
      });
      setTimeout(() => {
        this.removeTag();
      }, 1000)
    },
    playVideo() {
      this.elevideo.play();
    },
    pauseVideo() {
      this.elevideo.pause();
    },
    fullscreenVideo() {
      this.elevideo.fullscreen(true);
    }
  }
}

export const videolists = {
  data() {
    return {
      slidemodal: false,
      slidetitle: '',
      slideIndex: 0,
      videoPage: {
        keyword: '',
        status: '',
        user_id: '',
        page: 1,
        page_size: 20,
        order_direction: 1,
        order_field: 'id'
      },
    }
  },
  methods: {
    getVideoList(page = 1) {
      this.videoPage.page = page
      this.REQ_videoPage(this.videoPage)
    },
    getUserVideoList(page = 1) {
      this.videoPage.page = page
      this.REQ_uservideoPage(this.videoPage)
    },
    showSlideModal() {
      this.slidetitle = '视频截图'
      this.slideIndex = 0
      this.slidemodal = true
    },
    seek() {
      this.getVideoList(1)
    },
    onTabelPage(page) {
      this.getVideoList(page)
    },
    closeSlideModal(val) {
      this.rowdata = {}
      this.slideIndex = 1
      this.slidemodal = val
    }
  }
}
