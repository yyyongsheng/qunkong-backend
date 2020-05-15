<template>
    <Modal v-model="togglemodal"
					 class-name="modal"
					 :width="width"
           :scrollable="isscrollable"
           :styles="{top: modalTop, marginBottom: modalBottom}"
					 @on-cancel="closeModal"
					 :closable="closable"
					 :mask-closable="maskClosable"
					 >
        <p slot="header">
					<slot name="title"></slot>
        </p>
        <div>
					<slot name="content"></slot>
        </div>
        <div slot="footer">
					<slot name="footer"></slot>
        </div>
    </Modal>
</template>

<script>
	export default {
		props: {
			modal: {
				type: Boolean,
				default: false
			},
			closable: {
				type: Boolean,
				default: true
			},
			maskClosable: {
				type: Boolean,
				default: true
			},
			width: {
				type: Number,
				default: 500
      },
      isscrollable: {
        type: Boolean,
        default: true
      },
      modalTop: {
        type: String,
        default: '100px'
      },
      modalBottom: {
        type: String,
        default: '50px'
      },
			hidHeader: {
				type: Boolean,
				default: false
			},
			hidFooter: {
				type: Boolean,
				default: false
      }
		},
		watch: {
			modal(newval) {
				this.togglemodal = newval
				if (newval) {
					this.hiddenHeader()
					this.hiddenFooter()
				}
			}
		},
		data() {
			return {
				togglemodal: false
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
				this.togglemodal = false
				this.$emit('closeModal', this.togglemodal)
			}
		},
		mounted() {
		}
	}
</script>

<style lang="scss">
	@import '~style/package.scss';
	.modal{
		.ivu-modal{
			.ivu-modal-content{
				.ivu-modal-header{
					p{
						@include displayFlex;
						@include perfix(align-items, center);
						overflow:inherit;
					}
				}
				.ivu-modal-body{
					.clearformbottom{
						.ivu-form-item{
              margin-bottom: 0;
						}
          }
          .numberbox{
            float:right;
            text-align:center;
            font-size:14px;
            margin-left:10px;
            .unit{
              margin-left:6px;
            }
          }
				}
				.ivu-modal-footer{
          overflow: hidden;
          .ivu-btn{
            padding: 6px 35px;
          }
				}
			}
		}
	}
</style>
