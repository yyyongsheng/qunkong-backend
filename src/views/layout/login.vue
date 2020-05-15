<template>
  <div class="login">
    <div class="login-main" @keydown.enter="loginBackstage">
        <h1 class="title">群控管理系统</h1>
        <Form ref="logindata" :model="logindata" :rules="rulelogin" :label-width="60">
          <FormItem label="账号" prop="admin">
              <Input v-model="logindata.admin" placeholder="请输入账号"></Input>
          </FormItem>
          <FormItem label="密码" prop="password">
              <Input type="password" v-model="logindata.password" placeholder="请输入账号密码"></Input>
          </FormItem>
          <!-- <FormItem label="手机号" prop="mobile">
              <Row>
                <Col span="16">
                  <Input v-model="logindata.mobile" placeholder="请输入手机号"></Input>
                </Col>
                <Col span="8">
                  <Button size="small" type="primary" style="margin-left:8px;">发送验证码</Button>
                </Col>
              </Row>
          </FormItem>
          <FormItem label="验证码" prop="code">
              <Input  v-model="logindata.code" placeholder="请输入验证码" style="width: 100px;"></Input>
          </FormItem> -->
          <FormItem>
              <Button type="primary" :loading="loading" @click="loginBackstage">登录</Button>
          </FormItem>
        </Form>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { BACK_CODE } from 'base/common'
  export default {
    data() {
      return {
        loading: false,
        logindata: {
          admin: '',
          password: '',
          mobile: ''
        },
        rulelogin: {
          admin: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入账号密码', trigger: 'blur' }
          ],
          // mobile: [
          //   { required: true, message: '请输入手机号', trigger: 'blur' }
          // ],
          // code: [
          //   { required: true, message: '请输入验证码', trigger: 'blur' }
          // ]
        }
      }
    },
    methods: {
      loginBackstage() {
        this.loading = true
        this.$refs.logindata.validate(async (valid) => {
          if (valid) {
            // const res = await this.REQ_login(this.logindata)
            // if (res.data.code === BACK_CODE) {
            //   this.$router.push({
            //     name: 'Carousel_index'
            //   })
            // }

            this.$router.push({
                name: 'userIndex'
              })
          }
          this.loading = false
        })
      },

      ...mapActions([
        'REQ_login'
      ])
    }
  }
</script>

<style lang="scss">
  @import '~style/package.scss';
  .login{
    height:100vh;
    background: url('../../assets/image/login.jpg') no-repeat;
    @include perfix(background-size, 100% 100%);
    .login-main{
      width:350px;
      position: fixed;
      top:40%;
      right:300px;
      transform: translateY(-50%);
      background-color: rgba(255, 255, 255, 0.7);
      margin: 0 auto;
      padding: 40px 30px;
      box-shadow: 0px 10px 30px 0px rgba(28, 36, 56, 0.3);
      border-radius: 8px;
      .title{
        margin-bottom:20px;
      }
    }
  }
</style>
