<template>
	<div>
		<Modal
        v-model="sendmodal" :closable="false" class="delete-modal" width="360" @on-cancel="closeModal">
	        <p slot="header">
	        	{{title}}
	        </p>
	        <div class="modal-main">
	        	<span class="modal-main-content">{{content}}</span>
	        	<div class="modal-main-bottom">
	        		<Button class="but1" @click="closeModal">{{closeBth}}</Button>
    				  <Button type="primary" class="but2" :loading="loading" @click="makeDelete">{{makeBth}}</Button>
	        	</div>
	        </div>
	        <div slot="footer">
	        </div>
	    </Modal>
	</div>
</template>

<script>
  export default {
    props: {
      modal: {
        type: Boolean,
        default: false
      },
      data: {
        type: Object,
        default: () => {
          return {}
        }
      },
      hidHeader: {
        type: Boolean,
        default: false,
      },
      hidFooter: {
        type: Boolean,
        default: false,
      },
			title: {
				type: String,
				default: '提示'
			},
      content: {
				type: String,
				default: ''
      },
      closeBth: {
        type: String,
        default: '取消'
      },
      makeBth: {
        type: String,
        default: '确定'
      }
    },
    watch: {
      modal (val) {
        this.sendmodal = val
        if (val) {
					this.hiddenHeader()
					this.hiddenFooter()
				}
      }
    },
    data () {
      return {
        sendmodal: false,
        loading: false
      }
    },
    methods: {
      hiddenHeader() {
				let element = document.getElementsByClassName('ivu-modal-header')
        let len = element.length
				for (let i = 0; i < len; i++) {
					element[i].style.display = this.hidHeader ? 'none' : 'block'
				}
			},
			hiddenFooter() {
				let element = document.getElementsByClassName('ivu-modal-footer')
        let len = element.length
				for (let i = 0; i < len; i++) {
          element[i].style.display = this.hidFooter ? 'none' : 'block'
				}
			},
      closeModal() {
        this.sendmodal = false
        this.$emit('closeDelete', this.sendmodal)
      },
      makeDelete() {
        this.loading = true
        this.$emit('affirm', this.data)
        setTimeout(() => {
          this.loading = false
        }, 1000)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
	@import './hint.scss';
</style>
