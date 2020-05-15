<template>
  <div :ref="refEditor" :id="editorId" style="width: 100%;height: 330px;"></div>
</template>

<script>
	import { mapGetters,mapActions } from 'vuex'
	import WangEditor from 'wangeditor'
	import qiniuUpload from 'base/qiniuload'
	// import filterXSS from 'xss'
	export default {
		props: {
			showModal: {
				type: Boolean,
				default: false
			},
			isDisable: {
				type: Boolean,
				default: false
			},
			editorId: {
				type: String,
				default: ''
			},
			refEditor: {
				type: String,
				default: ''
			},
			initialize: {
				type: String,
				default: ''
      }
		},
		watch: {
			async showModal(val) {
				if (val) {
					// 初始化内容
					this.editor.txt.html(this.initialize);
					if (this.isDisable) {
						// 禁用编辑功能
						this.editor.$textElem.attr('contenteditable', false)
					} else {
						await this.REQ_articleToken()
						qiniuUpload(this.qiniuToken, this.editor)
					}
				}
			}
		},
		computed: {
			...mapGetters([
				'UserInfo',
				'qiniuToken'
			])
		},
		data() {
			return {
				editor: ''
			}
		},
		methods: {
			// 创建编辑器
			createEditor() {
				this.editor = new WangEditor(this.$refs[this.refEditor]);
				this.initEditorConfig();
        this.editor.create();
			},
			// 初始化编辑器配置
			initEditorConfig() {
				// 允许上传到七牛云存储
				this.editor.customConfig.qiniu = true;

				this.editor.customConfig.onchange = (html) => {
            // 监控变化，同步更新到 textarea
            // 防止XSS攻击
						// const filterHTML = filterXSS(html);
						// console.log(filterHTML)
						if (html === '<p><br></p>') {
							this.$emit('content', '');
						} else {
							this.$emit('content', html);
							this.$emit('onChang');
						}
				}
				// this.editor.customConfig.onblur = (html) => {
				// 		// html 即编辑器中的内容
				// 		const filterHTML = filterXSS(html);
				// 		this.$emit('content', filterHTML);
				// }
        // 自定义菜单配置
        this.editor.customConfig.menus = this.isDisable ? [] : [
            'head',  // 标题
            'bold',  // 粗体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'justify',  // 对齐方式
            'quote',  // 引用
            'image',  // 插入图片
            'table',  // 表格
            'code',  // 插入代码
            'undo',  // 撤销
            'redo'  // 重复
        ];
			},

			...mapActions([
				'REQ_articleToken'
			])
		},
		mounted () {
			this.createEditor()
		}
	}
</script>
