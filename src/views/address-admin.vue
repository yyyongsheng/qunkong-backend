<template>
  <table-box
              @selectChange='selectchange' 
              :columns="columns"
              :data="newspushlist"
              :windowWidth="1510"
              :tabelMinWidth="1280">

    <!-- 头部 -->

    <div slot="seekleft">
      <Button type="warning" size="large">PC幻灯</Button>
      <Button type="info" size="large">移动幻灯</Button>
    </div>

    <div slot="seekright">
      <Button type="primary"> 批量开启</Button>
      <Button type="ghost">批量关闭</Button>
      <Button type="error" >批量删除</Button>
      <Button type="success" size="large" @click="addcarousel_M_show(0)">添加幻灯</Button>
    </div>

    <!-- 创建消息弹框列表开始 -->
    <modal-box  :modal="addcarousel_M"
									:width="600"
                
									@closeModal="colseaddcarousel_M"
                  :maskClosable="flag!=2?false:true"
									>
				<span slot="title">{{type==0?'添加':'编辑'}}</span>
				<div slot="content">
          <Form ref="valusedata" :model="aa" :rules="valuerule" :label-width="110" inline>
            <FormItem label="幻灯位置" prop="value">
                <Select v-model="value" style="width:200px">
                  <!-- <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option> -->
                  <Option  :value=0 >pc端幻灯</Option>
                  <Option  :value=1 >移动端幻灯</Option>
              </Select>
            </FormItem>
   
            <FormItem  label="幻灯地址" prop="value">
               <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input> 
            </FormItem>
            <FormItem  label="链接地址" prop="value">
               <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input> 
            </FormItem>
            <FormItem  label="幻灯排序" prop="value">
               <InputNumber  :precision="0" :min="0" v-model="value"></InputNumber>  &nbsp;最多5个，数字越小排序越靠前
            </FormItem>
        </Form>   


        </div>
        <div slot="footer" style="text-align: center;">
          <Button @click="colseaddcarousel_M">取消</Button>
          <Button type="primary" >{{type==0?'确认添加':'保存更改'}}</Button>
        </div>
			</modal-box>




    <!-- 创建消息弹框列表结束 -->

  </table-box>
</template>
<script>
  import TableBox from "components/table";
  import { mapGetters, mapActions } from "vuex";
  import ModalBox from "components/modal";
  export default {
    components: {
      TableBox,
      ModalBox
    },
    data() {
      return {
        flag:0,  // 0 为pc 1 为移动
        type:0,   // 0为添加 1 为编辑
        addcarousel_M:false,
        aa:{},
        value:0,
        selection: {
          ids: [] //被选中的
        },
        valuerule:{
          value: [{ required: true, message: "请填写参数" }],
        },
        newspushlist: [
          {
            id: 1
          },
          {
            id: 2
          },
          {
            id: 3
          }
        ],
        columns: [
          {
            type: "selection",
            width: 60,
            align: "center"
          },
          {
            title: "排序",
            key: "id",
            sortable: true,
            width: 80
          },
          {
            title: "幻灯地址",
            key: "456",
            minWidht: 200
          },
          {
            title: "幻灯描述ALt",
            key: "123"
          },
          {
            title: "操作",
            // key: "777",
            render: (h, params) => {
              return h("div", [
                h(
                  "Button",
                  {
                    props: {
                      type: "primary",
                      size: "small"
                    },
                    style: {
                      marginRight: "5px"
                    },
                    on: {
                      click: () => {
                        this.addcarousel_M_show(1,params.index);
                      }
                    }
                  },
                  "编辑"
                ),
                h(
                  "Button",
                  {
                    props: {
                      type: "primary",
                      size: "small"
                    },
                    style: {
                      marginRight: "5px"
                    },
                    on: {
                      click: () => {
                        this.show(params.index);
                      }
                    }
                  },
                  "开启"
                ),

                h(
                  "Button",
                  {
                    props: {
                      type: "error",
                      size: "small"
                    },
                    on: {
                      click: () => {
                        this.remove(params.index);
                      }
                    }
                  },
                  "Delete"
                )
              ]);
            }
          }
        ]
      };
    },
    mounted() { },
    methods: {
      // 关闭添加/编辑modal
      colseaddcarousel_M(){
        this.$refs['valusedata'].resetFields();
        this.addcarousel_M=false
      },
      selectchange(selection) {
        this.selection.ids = [];
        selection.map(item => {
          this.selection.ids.push(item.id);
        });
       

      },

      addcarousel_M_show(type,row){
        this.addcarousel_M=true
        this.type=type

      }
    }
  };
</script>



<style scoped>
</style>