<template>
    <div class="rightmain">
          <Row  type="flex" justify="space-between" align="middle" class-name="screenline">
      <Col>
				<slot name="seekleft"></slot>
			</Col>
      <Col>
				<slot name="seekright"></slot>
			</Col>
      </Row>
    <slot name="content"></slot>

    <Col class-name="pagebox">
        <div class="page">
        <Page :total="totalSum" :page-size="pageSize" :current="currentPage" @on-change="onChangePage"></Page>

        </div>
      </Col>
    </div>
</template>

<script>
    export default {
   
            props:{
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
            },
     
        methods:{
            	onChangePage(page) {
				this.$emit('onPage', page)
			},
        }
    }
</script>

<style scoped lang="scss">
  .rightmain{
      width: 100%;
      min-height: 700px;
        min-width: 1200px;
         margin: 20px;
         padding: 20px;
		position: relative;
		box-sizing: border-box;
		box-shadow: 0px 2px 20px 0px rgba(28, 36, 56, 0.2);
  }
  .pagebox{
      left: 0;
      border-top: 1px solid #ccc;
      height: 60px;
      width: 100%;
      background: #fff;
      position: absolute;
      text-align: right;
      line-height: 60px;
    
      bottom: 0;
      .page{
          margin-top: 15px;
          margin-right: 30px;
          display: inline-block;
      }
      
  }
</style>