<template>
  <div class="content" :class="model?'model':''"   >

	<slot name="Topsection"></slot>


    <Row v-if="!hiddenSeek" type="flex" justify="space-between" align="middle" class-name="screenline">
      <Col>
				<slot name="seekleft"></slot>
			</Col>
      <Col>
				<slot name="seekright"></slot>
			</Col>
    </Row>
    <Row type="flex" class-name="table-main">
      <Col class-name="tablebox">
				<transition name="component-fade" mode="out-in">
					<Table :stripe="stripe"    class="table" v-if="!tabelLoadIndex"  :width="minWidth ? minWidth : ''" :loading="tabelLoadIndex" @on-sort-change="sortMethod" @on-selection-change="selectChange" :columns="columns" :data="data"></Table>
				</transition>
				<Spin size="large" fix v-if="tabelLoadIndex"></Spin>
			</Col>
      <Col class-name="pagebox">
        <Page :total="totalSum" :page-size="pageSize" :current="currentPage" @on-change="onChangePage"></Page>
      </Col>
    </Row>

		<slot></slot>
  </div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		props: {
			hiddenSeek: {
				type: Boolean,
				default: false
			},
			stripe: {
				type: Boolean,
				default: true
			},
			model: {
				type: Boolean,
				default: false
			},
			
			columns: {
				type: Array,
				default: []
			},
			data: {
				type: Array,
				default: []
			},
			totalSum: {
				type: Number,
				default: 0,
			},
			pageSize: {
				type: Number,
				default: 20
			},
			currentPage: {
				type: Number,
				default: 1
			},
			windowWidth: {
				type: Number,
				default: 750
			},
			tabelMinWidth: {
				type: Number,
				default: 700
			}
		},
		created() {
			this.onChange()
			console.log(this.data,'6666')
		},
		computed: {
			...mapGetters([
				'tabelLoadIndex'
			])
		},
		watch: {
			data(val) {
				if (document.body.clientWidth < this.windowWidth) {
					this.minWidth = this.tabelMinWidth
				} else {
					this.minWidth = ''
				}
			}
		},
		data() {
			return {
				minWidth: ''
			}
		},
		methods: {
			selectChange(data) {
				this.$emit('selectChange', data)
			},
			onChangePage(page) {
				this.$emit('onPage', page)
			},
			sortMethod(data) {
				if (data.order === 'normal') return
				this.$emit('onSort', data)
			},
			onChange() {
				console.log('onchange1111')
				setTimeout(() => {
					window.onresize = () => {
						if (document.body.clientWidth < this.windowWidth) {
							this.minWidth = this.tabelMinWidth
						} else {
							this.minWidth = ''
						}
					}
				}, 500)
			}
		}
	}
</script>

<style lang="scss">
  @import '~style/package.scss';

.table table {
	width: 100% !important;
}



  .content{
    @include displayFlex;
    @include perfix(flex, 1);
		@include perfix(flex-direction, column);
		// margin: 20px;
		padding:30px  15px;
		border-radius:4px;
		position: relative;
		box-sizing: border-box;
		box-shadow: 0px 2px 20px 0px rgba(28, 36, 56, 0.2);
		@extend .bg-color-FFFFFF;
    .screenline{
      position: relative;
      min-height: 80px;
      padding: 0 0px 0 0px;
			@include borclass(after);
			.ivu-input-wrapper,
			.ivu-select,
			.ivu-btn,
			.ivu-date-picker{
				margin-left: 5px;
			}
    }
    .table-main{
      @include displayFlex;
      @include perfix(flex, 1);
      @include perfix(flex-direction, column);
	  min-height:400px;
      .tablebox{
				@include perfix(flex, 1);
				overflow: auto;
				.table{
					position: absolute;
					top: 0;
					right: 0;
					left: 0;
					bottom: 0;
					// border:none;
					border-top: 0;
					.ivu-table{
						&::before{
							width:0;
							height:0;
						}
						.ivu-table-body{
							position: absolute;
							left: 0;
							top: 40px;
							bottom: 0;
							// right: -17px;
							right: 0;
							overflow: hidden;
							overflow-y: auto;
						}
					}
				}
      }
      .pagebox{
        @include perfix(flex, 0 0 60px);
				@include borclass(before);
				@include displayFlex;
				@include perfix(flex-direction, row-reverse);
				@include perfix(align-items, center);
        line-height: 60px;
        padding: 0 30px;
      }
		}
  }

  .model{
	  padding: 0;
	  box-shadow: none;

	  .screenline{
		  min-height: auto;
		  padding-bottom: 15px;
		 
	  }
  }
</style>
