<template>
    <div class="topheader padding-020">
        <div class="top-left">
          <!-- <Button type="warning" @click="myrefresh">刷新</Button> -->
          <Tooltip content="刷新" placement="bottom">
              <a href="javascript:;" @click="myrefresh"><Icon type="refresh" size="28"></Icon></Icon></a>
          </Tooltip>
        </div>
        <div class="topheader-content"></div>
        <div class="top-right">
            <div class="dropdown margin-left-25">
                <!-- <img src="~assets/logo.jpg" /> -->
                <Dropdown placement="bottom-end" class="padding-left-10" @on-click="selectItem">
                    <a href="javascript:void(0)">
                          你的名字我的心事
                        <Icon type="arrow-down-b"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem name="quit">退出</DropdownItem>
                    </DropdownMenu>
                    <DropdownMenu slot="list">
                        <DropdownItem name="editpass">修改密码</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>

    <!-- 重置密码弹框列表开始 -->
      <modal-box  :modal="passwordmodal"
                  :width="400"
                  @closeModal="closePasswordModal"
                  >
        <span slot="title">{{passwordtitle}}</span>
        <div slot="content">
          <Form ref="passwordform" :model="passwordform" :rules="rulepassword"  class="bindform" :label-width="90">
            <FormItem label="原始密码" prop="original_password">
                <Input type="password" :maxlength="16" v-model="passwordform.original_password" placeholder="请输入原始密码"></Input>
            </FormItem>
            <FormItem label="修改密码" prop="new_password">
                <Input type="password" :maxlength="16" v-model="passwordform.new_password" placeholder="请输入修改密码"></Input>
            </FormItem>
            <FormItem label="确认密码" prop="affirm_password" style="margin-bottom: 10px;">
                <Input type="password" :maxlength="16" v-model="passwordform.affirm_password" placeholder="请输入确认密码"></Input>
            </FormItem>
          </Form>
        </div>
        <div slot="footer" style="text-align: center;">
          <Button @click="closePasswordModal(false)">取消</Button>
          <Button type="primary" :loading="passwordLoad" @click="saveAffirmPassword">确认</Button>
        </div>
      </modal-box>
    <!-- 重置密码弹框列表结束 -->

    <!-- 删除弹框列表开始 -->
      <hint-modal :hidFooter="hidFooter"
                  :content="hintttitle" 
                  :modal="hintmodal"
                  @closeDelete="closeDelectModal"
                  @affirm="affirmDelete"
                  />
    <!-- 删除弹框列表结束 -->
    </div>
</template>

<script>
  import ModalBox from 'components/modal'
  import HintModal from 'components/hint'
  import utils from '@/base/utils'
  import { BACK_CODE } from 'base/common'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    components: {
      ModalBox,
      HintModal
    },
    props: {
      iconSize: {
        type: Number,
        default: 26
      }
    },
    computed: {
      ...mapGetters([
        'UserInfo'
      ])
    },
    data() {
      return{
        hidFooter: true,
        hintmodal: false,
        passwordmodal: false,
        passwordLoad: false,
        hintttitle: '',
        passwordtitle: '',
        passwordform: {
          original_password: '',
          affirm_password: '',
          new_password: ''
        },
        rulepassword: {
          original_password: [
            { required: true, message: '请输入原始密码', trigger: 'blur' },
            { min:6, message: '请输入6位以上密码', trigger: 'blur' },
            { validator: utils.vaildeLine, trigger: 'blur' }
          ],
          affirm_password: [
            { required: true, message: '请输入确认密码', trigger: 'blur' },
            { min:6 , message: '请输入6位以上密码', trigger: 'blur' },
            { validator: utils.vaildeLine, trigger: 'blur' }
          ],
          new_password: [
            { required: true, message: '请输入修改密码', trigger: 'blur' },
            { min:6, message: '请输入6位以上密码', trigger: 'blur' },
            { validator: utils.vaildeLine, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      myrefresh(){
        window.location.reload();
      },
      selectItem(name) {
        if (name === 'quit') {
          this.hintttitle = '是否退出后台系统？'
          this.hintmodal = true
        } else if (name === 'editpass') {
          this.passwordtitle = '修改密码'
          this.passwordmodal = true
        }
      },
      closeDelectModal(val) {
        this.hintmodal = val
      },
      affirmDelete() {
        localStorage.clear();
        this.$router.push({
          name: 'login'
        })
      },
      closePasswordModal(val) {
        this.$refs.passwordform.resetFields()
        this.passwordmodal = val
      },
      saveAffirmPassword() {
        if (this.passwordform.new_pwd !== this.passwordform.affirmpass) {
          this.$Message.error('密码不一致，请重新填写')
          return
        }
        this.passwordLoad = true
        this.$refs.passwordform.validate(async (valid) => {
          if (valid) {
            const res = await this.REQ_editPass(this.passwordform)
            if (res.data.code === BACK_CODE) {
              this.closePasswordModal(false)
            }
          }
          this.passwordLoad = false
        })
      },

      ...mapActions([
        'REQ_editPass'
      ])
    }
  }
</script>


<style lang="scss">
    @import '~style/package.scss';

    .topheader{
        @include flexContent;
        position: absolute;
        width: 100%;
        z-index:100;
        height: $height-64;
        -moz-box-shadow:0px 0px 3px #ADADAD;
        -webkit-box-shadow:0px 0px 3px #ADADAD;
        box-shadow:0px 0px 3px #ADADAD;
        .top-left{

        }
        &-content{
            flex: 1;
        }
        .top-right{
            @include flexDirectionRow;
            align-items: center;
            .dropdown{
                @include flexDirectionRow;
                align-items: center;
            }
        }
    }
</style>

