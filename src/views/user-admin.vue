<template>
  <div class="useradmin">
    <Tabs value="name1" type="line">
      <TabPane label="平台账号" name="name1">
        <table-box
          @selectChange="selectchange"
          :columns="columns"
          :data="newspushlist"
          :windowWidth="1510"
          :tabelMinWidth="1280"
        >
          <div slot="Topsection">
            <div class="stats">
              <ul>
                <li>
                  <div class="num">
                    <span>123445</span>
                    <p>今日新增</p>
                  </div>
                  <img src="@/assets/image/1.gif" alt />
                </li>
                <li>
                  <div class="num">
                    <span>123445</span>
                    <p>今日新增</p>
                  </div>
                  <img src="@/assets/image/1.gif" alt />
                </li>
                <li>
                  <div class="num">
                    <span>123445</span>
                    <p>今日新增</p>
                  </div>
                  <img src="@/assets/image/1.gif" alt />
                </li>
                <li>
                  <div class="num">
                    <span>123445</span>
                    <p>今日新增</p>
                  </div>
                  <img src="@/assets/image/1.gif" alt />
                </li>
                <li>
                  <div class="num">
                    <span>123445</span>
                    <p>今日新增</p>
                  </div>
                  <img src="@/assets/image/1.gif" alt />
                </li>
              </ul>
            </div>

            <div class="searchinput" v-if="showSearch">
              <Form label-position="right" :label-width="60" inline>
                <Row>
                  <Col span="6">
                    <FormItem label="ID">
                      <Input placeholder="ID"></Input>
                    </FormItem>
                  </Col>
                  <Col span="6">
                    <FormItem label="所属组织">
                      <Input placeholder="所属组织"></Input>
                    </FormItem>
                  </Col>
                  <Col span="6">
                    <FormItem label="姓名">
                      <Input placeholder="姓名"></Input>
                    </FormItem>
                  </Col>
                  <Col span="6">
                    <FormItem label="手机号">
                      <Input placeholder="手机号"></Input>
                    </FormItem>
                  </Col>
                  <Col span="6">
                    <FormItem label="状态">
                      <Select style="width:100%" v-model="searchStatus">
                        <Option :value="0" selected>全部</Option>
                        <Option :value="1">正常</Option>
                        <Option :value="2">禁用</Option>
                      </Select>
                    </FormItem>
                  </Col>
                  <Col span="6">
                    <FormItem label="添加时间">
                      <Input></Input>
                    </FormItem>
                  </Col>
                  <Col span="6">
                    <FormItem label>
                      <Button type="info">搜索</Button>
                      <Button>重置</Button>
                    </FormItem>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>

          <div slot="seekleft">
            <Button type="info" @click="addcarousel_M_show(1)">新建</Button>
            <Button type="info" @click="Prohibitsome">禁用</Button>
            <Button type="info" @click="unProhibitsome">解禁</Button>
          </div>
          <div slot="seekright">
            <img
              @click="showSearch=!showSearch"
              class="searchIcon"
              src="@/assets/image/searchIcon.png"
              alt
            />
          </div>
        </table-box>
      </TabPane>
    </Tabs>

    <!-- 创建消息弹框列表开始 -->
    <modal-box
      :modal="add_M"
      :width="600"
      @closeModal="colseAdd_M"
    >
      <span slot="title">{{type==0?'添加':'编辑'}}</span>
      <div slot="content">
        <Form ref="valusedata" :model="aa" :rules="valuerule" :label-width="110" inline>
          <FormItem label="所属组织" prop="value">
            <Select style="width:200px">
              <!-- <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option> -->
              <Option :value="0">xx组织</Option>
              <Option :value="1">三合会组织</Option>
            </Select>
          </FormItem>
          <FormItem label="姓名" prop="value">
            <Select style="width:200px" filterable>
              <!-- <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option> -->
              <Option :value="0">你的名字</Option>
              <Option :value="1">我的心事</Option>
            </Select>
          </FormItem>

          <FormItem label="账号" prop="value">
            <Input placeholder="请输入账号" style="width: 300px"></Input>
          </FormItem>
          <FormItem label="密码" prop="value">
            <Input placeholder="请输入密码" style="width: 300px"></Input>
          </FormItem>
        </Form>
      </div>
      <div slot="footer" style="text-align: center;">
        <Button @click="colseAdd_M">取消</Button>
        <Button type="primary">{{type==0?'确认添加':'保存更改'}}</Button>
      </div>
    </modal-box>


    <modal-box
      :modal="wechatAdd_M"
      :width="800"
      @closeModal="colsewechatAdd_M"
    >
      <span slot="title">{{wechatType==0?'管理微信':'运营微信'}}</span>
      <div slot="content">

        <table-box
          @selectChange="wechatAddchange"
          :columns="wechatAddcolumns"
          :data="wechatAddlist"
       
          :model="true"
          :stripe="false"
        >

         <div slot="seekleft">
            <Button type="info" @click="Prohibitwechat">解除</Button>
          </div>
          <div slot="seekright">
              <Input  placeholder="请输入微信号" style="width: 200px"></Input>
              <Button type="info" @click="wechatAdd">添加</Button>
          </div>


         </table-box>

      </div>
     
    </modal-box>




    <!-- 创建消息弹框列表结束 -->
  </div>
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
      wechatAdd_M:false,   // 管理微信M
      showSearch: true,
      searchStatus: 0,  
      wechatType:0,    // 0为管理微信  1 为运营微信
      flag: 0, // 0 为pc 1 为移动
      type: 0, // 0为添加 1 为编辑
      add_M: false,
      aa: {},
      value: 0,
      selection: {
        ids: [] //被选中的
      },
      valuerule: {
        value: [{ required: true, message: "请填写参数" }]
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
          title: "ID",
          key: "id",
          sortable: true,
          width: 80,
           render: (h, params) => {
            return  h(
                "span",
                {
                  style:{
                      cursor: "pointer",
                      color:"#409FFF"
                  },
                  on: {
                    click: () => {
                      console.log(111)
                      this.showwechatAdd(0);
                    }
                  }
                },
                 params.row.id
              )
          }

        },
        {
          title: "姓名",
          key: "name",
          minWidth: 60
        },
        {
          title: "所属组织",
          key: "123",
           minWidth: 100
        },
        {
          title: "账号/手机号",
          key: "123",
          minWidth: 130
        },
        {
          title: "管理微信数",
          key: "123",
          minWidth: 100
        },
        {
          title: "社群总数",
          key: "123",
          minWidth: 100
        },
        {
          title: "添加时间",
          key: "123",
          minWidth: 100
        },
        {
          title: "状态",
          key: "type",
          minWidth: 100
        },
        {
          title: "操作",
          key: "777",
           minWidth: 130,
          render: (h, params) => {
            return h("div", [
              h(
                "Poptip",
                {
                  props: {
                    transfer: true,
                    confirm: true,
                    title: "确认禁用此项吗？"
                  },
                  style: { textAlign: "left", marginRight: "5px" },
                  on: {
                    "on-ok": () => {
                      this.Prohibit(params);
                    },
                    "on-cancel": () => {}
                  }
                },
                [
                  h(
                    "Button",
                    { props: { type: "error", size: "small" } },
                    "禁用"
                  )
                ]
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
                      this.addcarousel_M_show(1, params.index);
                    }
                  }
                },
                "编辑"
              )
            ]);
          }
        }
      ],

      wechatAddcolumns:[
        {
          type: "selection",
          width: 60,
          align: "center"
        },
         {
          title: "注册时间",
          key: "123",
            minWidth: 110
        },
         {
          title: "微信号",
          key: "123",
            minWidth: 110
        },
         {
          title: "微信手机号",
          key: "123",
            minWidth: 110
        },
         {
          title: "好友数",
          key: "123",
           minWidth: 110
        },
         {
          title: "社群数",
          key: "123",
           minWidth: 110
        },
      ],

      wechatAddlist:[
        {
          id:1
        },
        {
          id:2
        },
        {
          id:3
        },
      ]

    };
  },
  mounted() {},
  methods: {
    wechatAdd(){

    },

    Prohibitwechat(){
         if (!this.selection.ids.length) {
          this.$Message.warning("请选择");
          return;
      }
    },

    wechatAddchange(selection){
       this.selection.ids = [];
          selection.map(item => {
          this.selection.ids.push(item.id);
        });
    },

    colsewechatAdd_M(){
       this.wechatAdd_M=false
    },
    showwechatAdd(type){
      console.log(6666)
        this.wechatType=type
        this.wechatAdd_M=true
    },


    unProhibitsome() {
      //批量解禁
      console.log(this.selection);
      if (!this.selection.ids.length) {
        this.$Message.warning("请选择");
        return;
      }
    },
    Prohibitsome() {
      //批量禁用
      console.log(this.selection);
      if (!this.selection.ids.length) {
        this.$Message.warning("请选择");
        return;
      }
    },

    Prohibit(params) {
      //禁用
      console.log(params);
    },

    // 关闭添加/编辑modal
    colseAdd_M() {
      this.$refs["valusedata"].resetFields();
      this.add_M = false;
    },
    selectchange(selection) {
      this.selection.ids = [];
      selection.map(item => {
        this.selection.ids.push(item.id);
      });
    },
    addcarousel_M_show(type, row) {
      this.add_M = true;
      this.type = type;
    }
  }
};
</script>

<style  lang="scss" scoped>
.useradmin {
  width: 100%;
  padding: 15px;
  height: 100%;

  .stats {
    ul {
      display: flex;
      justify-content: space-between;
      li {
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 19%;
        box-shadow: 0px 4px 12px 0px rgba(4, 0, 0, 0.12);
        border-radius: 4px;
        .num {
          display: flex;
          flex-direction: column;
          align-items: left;
          span {
            font-size: 32px;
            color: #333;
            font-weight: bold;
          }
          p {
            font-size: 14px;
            color: #999;
          }
        }
        img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }

  .searchinput {
    padding-top: 40px;
    .ivu-form-item {
      margin-bottom: 15px;
    }
  }

  .searchIcon {
    width: 32px;
    height: 32px;
    padding: 8px;
    cursor: pointer;
    background: rgba(244, 244, 244, 1);
    border: 1px solid rgba(221, 221, 221, 1);
    border-radius: 4px;
  }
}
</style>