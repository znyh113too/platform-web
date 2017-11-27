<template>
  <el-row>
    <el-col>

      <el-row class="out-content">
        <el-col>
          
          <el-row class="step">
            <el-col>
              <el-steps :active="step" finish-status="success" :align-center="true">
                <el-step title="基本注册"></el-step>
                <el-step title="信息登记"></el-step>
                <el-step title="完成注册"></el-step>
              </el-steps>
            </el-col>
          </el-row>

          <el-row v-if="step1" >
            <el-col :offset="5" :span="14">
              <el-row>
                <el-col :span="16">
                  <el-form ref="registerForm" :model="registerForm" :rules="registerRules" 
                      @keyup.enter.native="register" label-width="100px" label-position="left" class="register-form">
                    <el-form-item label="注册邮箱:" prop="email">
                      <el-input v-model="registerForm.email" name="email"></el-input>
                      <span class="text-tip">请输入常用邮箱，推荐使用企业邮箱</span>
                      <el-button @click="doSendVerifyCode" :disabled="sendVerifyCodeDisabled">{{sendVerifyCode}}</el-button>
                    </el-form-item>
                    <el-form-item label="邮箱验证码:" prop="emailVerify">
                      <el-input v-model="registerForm.emailVerify" name="emailVerify"></el-input>
                      <span class="text-tip">激活邮箱后将收到验证邮件，请回填邮件中的6位验证码</span>
                    </el-form-item>
                    <el-form-item label="密码:" prop="password">
                      <el-input v-model="registerForm.password" type="password" name="password"></el-input>
                      <span class="text-tip">字母、数字或者英文符号，最短8位，区分大小写</span>
                    </el-form-item>
                    <el-form-item label="确认密码:" prop="reptyPassword">
                      <el-input v-model="registerForm.reptyPassword" type="password" name="reptyPassword"></el-input>
                      <span class="text-tip">请再次输入密码</span>
                    </el-form-item>
                    
                    <el-form-item>
                      <el-checkbox v-model="registerForm.checked" @change="agree">我已阅读并同意<span style="color:#33CCFF" @click="serverProtocol">《服务协议》</span></el-checkbox>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="register" :disabled="registerDisabled">注册</el-button>
                    </el-form-item>
                  </el-form>
                </el-col>
                  <el-col :span="8">
                    <div class="right-content">
                      已有账号？<span @click="toLogin" style="color:#3399FF;cursor:pointer;">立即登录</span>
                    </div>
                  </el-col>
              </el-row>
             
            </el-col>
          </el-row>

          <el-row v-if="step2">
            <el-col :offset="5" :span="14">
              <el-form ref="infoForm" :model="infoForm" :rules="infoRules" 
                  label-width="160px" label-position="left" class="register-form">
                  
                  <div class="info-form-content">
                    <div style="padding-bottom:30px;">
                      企业基本信息<hr/>
                    </div>
                    <el-form-item label="企业名称:" prop="companyName">
                      <el-input v-model="infoForm.companyName" name="companyName"></el-input>
                      <span class="text-tip">必须与企业营业执照上的企业名称完全一致，信息审核成功后，企业名称不可修改。</span>
                    </el-form-item>
                    <el-form-item label="是否三证合一:" prop="certificates">
                       <el-radio-group v-model="infoForm.certificates">
                        <el-radio label="1">是</el-radio>
                        <el-radio label="0">否</el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item label="营业执照号:" prop="businessNo">
                      <el-input v-model="infoForm.businessNo" name="businessNo"></el-input>
                      <span class="text-tip">请输入15位营业执照号或18位的统一社会信用代码</span>
                    </el-form-item>
                    <el-form-item label="营业执照图片:" prop="businessPath">
                      <el-button @click="upload('yyzzFile')">上传</el-button>
                      <span class="text-tip">请上传原件照片或扫描件，或者加盖企业公章的复印件的扫面件，支持.jpg、.jpeg、.png格式，大小不能超过2M</span>
                      <img :src="showPicture.yyzz" class="image">
                      <input style="display:none;" type="file" accept="image/*" @change="fileChanged('yyzzFile','yyzz','businessPath')" ref="yyzzFile" multiple="multiple">
                    </el-form-item>
                    <el-form-item label="组织机构图片:" prop="organizationPath">
                      <el-button @click="upload('organizationPathFile')">上传</el-button>
                      <span class="text-tip">请上传原件照片或扫描件，或者加盖企业公章的复印件的扫面件，支持.jpg、.jpeg、.png格式，大小不能超过2M</span>
                      <img :src="showPicture.organization" class="image">
                      <input style="display:none;" type="file" accept="image/*" @change="fileChanged('organizationPathFile','organization','organization')" ref="organizationPathFile" multiple="multiple">
                    </el-form-item>
                    <el-form-item label="税务登记图片:" prop="taxPath">
                      <el-button @click="upload('taxPathFile')">上传</el-button>
                      <span class="text-tip">请上传原件照片或扫描件，或者加盖企业公章的复印件的扫面件，支持.jpg、.jpeg、.png格式，大小不能超过2M</span>
                      <img :src="showPicture.tax" class="image">
                      <input style="display:none;" type="file" accept="image/*" @change="fileChanged('taxPathFile','tax','tax')" ref="taxPathFile" multiple="multiple">
                    </el-form-item>
                    <el-form-item label="企业所在省市:" prop="companyCity">
                      <div class="block">
                        <el-cascader
                          :filterable="true"
                          expand-trigger="hover"
                          :options="citys"
                          v-model="selectedCitys"
                          @change="cityHandleChange">
                        </el-cascader>
                      </div>
                    </el-form-item>
                    <el-form-item label="企业注册地址" prop="companyAddress">
                      <el-input v-model="infoForm.companyAddress" name="companyAddress"></el-input>
                    </el-form-item>
                  </div>

                  <div class="info-form-content">
                    <div style="padding-bottom:30px;">
                      运营者信息<hr/>
                    </div>
                    <el-form-item label="联系人姓名:" prop="contactName">
                      <el-input v-model="infoForm.contactName" name="contactName"></el-input>
                      <span class="text-tip">请输入联系人真实姓名</span>
                    </el-form-item>
                    <el-form-item label="联系人身份号码:" prop="contactCardId">
                      <el-input v-model="infoForm.contactCardId" name="contactCardId"></el-input>
                      <span class="text-tip">请输入联系人身份号码</span>
                    </el-form-item>
                    <el-form-item label="联系人身份证正面照:" prop="contactCardFront">
                      <div>
                        <div class="inner-upload-left">
                          <img :src="showPicture.idDemo" class="image-demo">
                          <span class="text-tip demo-position">参考示例</span>
                        </div>
                        <div class="inner-upload-right">
                          <el-button @click="upload('idFile')">选择照片</el-button>
                          <span class="text-tip">照片或扫描件包含身份证正面，且内容清晰可见。支持.jpg、.jpeg、.png格式，大小不能超过2M</span>
                        </div>
                      </div>
                      <img :src="showPicture.id" class="image">
                      <input style="display:none;" type="file" accept="image/*" @change="fileChanged('idFile','id','contactCardFront')" ref="idFile" multiple="multiple">
                    </el-form-item>
                    <el-form-item label="联系人身份证背面照:" prop="contactCardBack">
                      <div>
                        <div class="inner-upload-left">
                          <img :src="showPicture.idBackDemo" class="image-demo">
                          <span class="text-tip demo-position">参考示例</span>
                        </div>
                        <div class="inner-upload-right">
                          <el-button @click="upload('idBackFile')">选择照片</el-button>
                          <span class="text-tip">照片或扫描件包含身份证正面，且内容清晰可见。支持.jpg、.jpeg、.png格式，大小不能超过2M</span>
                        </div>
                      </div>
                      <img :src="showPicture.idBack" class="image">
                      <input style="display:none;" type="file" accept="image/*" @change="fileChanged('idBackFile','idBack','contactCardBack')" ref="idBackFile" multiple="multiple">
                    </el-form-item>
                    <el-form-item label="联系人电子邮箱:" prop="contactEmail">
                      <el-input v-model="infoForm.contactEmail" name="contactEmail"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人电话" prop="contactPhone">
                      <el-input v-model="infoForm.contactPhone" name="contactPhone"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="infoSubmit">提交</el-button>
                    </el-form-item>
                  </div>


              </el-form>
            </el-col>
          </el-row>
       
          <el-row v-if="step3" type="flex" justify="center" >
            <el-col style="width:640px;">
              <h1>恭喜您，完成布比开发者平台注册信息登记！</h1>
              <span class="success">我们尽快审核您的登记信息，预计时间1-2个工作日，审核结果将发至您提供的邮箱</span>
            </el-col>
          </el-row>

        </el-col>
      </el-row>
  
    </el-col>
  </el-row>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import { yyzzValidate,isEmail } from '../../utils/validateRule'
import { citysJsonArr } from '../../core/citys'

export default {
  name: 'Register',
  data () {
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }else if(value.length < 8){

      } else {
        if (this.registerForm.reptyPassword !== '') {
          this.$refs.registerForm.validateField('reptyPassword');
        }
        callback();
      }
    };
    var validateRepeatPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
   
    return {
      showPicture:{
        yyzz:require('../../assets/picture/unchoose.png'),
        organization:require('../../assets/picture/unchoose.png'),
        tax:require('../../assets/picture/unchoose.png'),
        idDemo:require('../../assets/picture/unchoose.png'),
        id:require('../../assets/picture/unchoose.png'),
        idBackDemo:require('../../assets/picture/unchoose.png'),
        idBack:require('../../assets/picture/unchoose.png'),
      },
      selectedCitys:[],
      citys:citysJsonArr,
      step:0,
      step1: false,
      step2: false,
      step3: false,
      sendVerifyCode:'发送验证码',
      sendVerifyCodeDisabled:false,
      sendVerifyCodeWait:60,
      registerDisabled:true,
      registerForm:{
        email:'',
        emailVerify:'',
        password:'',
        reptyPassword:'',
        checked:false,
      },
      registerRules:{     
        email: [
          { required: true,  message: '请输入注册邮箱', trigger: 'blur' },
          { required: true, type: 'email', message: '请输入正确的注册邮箱', trigger: 'blur' }
        ],
        emailVerify: [
          { required: true, message: '请输入邮箱验证码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 8, max: 15, message: '密码长度在8到15位', trigger: 'blur' },
          { validator: validatePassword, trigger: 'blur' }
        ],
        reptyPassword: [
          { required: true, message: '请确认密码', trigger: 'blur' },
          { validator: validateRepeatPassword, trigger: 'blur' }
        ],
      },
      infoForm:{
        companyName:'',
        certificates:'',
        businessNo:'',
        businessPath:'',
        organization:'',
        tax:'',
        companyCityCode:'',
        companyCity:'',
        companyAddress:'',
        contactName:'',
        contactCardId:'',
        contactCardFront:'',
        contactCardBack:'',
        contactEmail:'',
        contactPhone:'',
      },
      infoRules:{
        companyName: [
          { required: true,  message: '请输入企业名称', trigger: 'blur' },
        ],
        certificates: [
          { required: true, message: '请选择是否三证合一', trigger: 'change' },
        ],
        businessNo: [
          { required: true,  message: '请输入营业执照号', trigger: 'blur' },
          { validator: yyzzValidate, trigger: 'blur' }
        ],
        businessPath: [
          { required: true,  message: '请上传营业执照图片', trigger: 'change' },
        ],
        companyCity: [
          { required: true,  message: '请选择企业所在省市', trigger: 'change' },
        ],
        companyAddress: [
          { required: true,  message: '请输入企业注册地址', trigger: 'blur' },
        ],
        contactName: [
          { required: true,  message: '请输入联系人姓名', trigger: 'blur' },
        ],
        contactCardId: [
          { required: true,  message: '请输入联系人身份证号', trigger: 'blur' },
        ],
        contactCardFront: [
          { required: true,  message: '请上传联系人身份证正面照', trigger: 'blur' },
        ],
        contactCardBack: [
          { required: true,  message: '请上传联系人身份证背面照', trigger: 'blur' },
        ],
        contactEmail: [
          { required: true,  message: '请输入联系人邮箱', trigger: 'blur' },
          { required: true, type: 'email', message: '请输入正确的邮箱', trigger: 'blur' }
        ],
        contactPhone: [
          { required: true,  message: '请输入联系人电话', trigger: 'blur' },
          // { required: true, type: 'number',  message: '请输入正确的电话', trigger: 'blur' },
          // { min:11, max: 11, message: '请输入正确的电话', trigger: 'blur' },
        ],
      },
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
    }),
  },
  created(){
    if(localStorage.getItem('X-PLATFORM-TOKEN')){
      this.getUser(localStorage.getItem('X-PLATFORM-TOKEN')).then(()=>{
        if(this.user.authorizedStatus==='1' || this.user.authorizedStatus==='3'){
          this.step++
          this.step1=false
          this.step2=true
        }
      })
    }else{
      this.step1=true
    }
  },
  methods:{
    ...mapActions([
      'sendEmailVerifyCode',
      'registerDeveloper',
      'uploadPicture',
      'registerCompany',
      'getUser',
    ]),
    register(){
      this.$refs['registerForm'].validate((valid) => {
        if (valid) {
          this.registerDeveloper(this.registerForm).then(({userToken}) => {
            this.step++;this.step1=false;this.step2=true
            localStorage.setItem('X-PLATFORM-TOKEN', userToken)
            this.$alert('注册成功，请补全登记信息')
          }).catch(err => {
            this.$alert(err)
          })
        }
      })
    },
    infoSubmit(){
      this.$refs['infoForm'].validate((valid) => {
        if (valid) {
          this.registerCompany(this.infoForm).then(() => {
            this.step++;this.step2=false;this.step3=true
          }).catch(err => {
            this.$alert(err)
          })
        }
      })
    },
    agree(checked){
      if(checked){
        this.registerDisabled=false
      }else{
        this.registerDisabled=true
      }
    },
    doSendVerifyCode(){
      if(isEmail(this.registerForm.email)){
        this.sendEmailVerifyCode({'email':this.registerForm.email}).then(()=>{
          this.doSendVerifyCodeAnimation()
          this.$alert('发送成功，请查收!')
        }).catch(err => {
          this.$alert(err)
        })
       
      }
    },
    doSendVerifyCodeAnimation(){
      if (this.sendVerifyCodeWait == 0) {
        this.sendVerifyCode='发送验证码'
        this.sendVerifyCodeDisabled=false
        this.sendVerifyCodeWait=60
      } else { 
        this.sendVerifyCodeDisabled=true;
        this.sendVerifyCode="重新发送(" + this.sendVerifyCodeWait + ")";
        this.sendVerifyCodeWait--;
        setTimeout(this.doSendVerifyCodeAnimation,1000)
      }
    },
    serverProtocol(){
      this.$notify.error({
        title: '还没有',
        message: '还没有'
      });
    },
    toLogin(){
      this.$router.push({
        path: "/login"
      })
    },
    cityHandleChange(value){
      let cityCode=value[2].split("-")[0]
      let name='';
      value.forEach(item=>name+=item.split("-")[1])
      console.log(name)
      this.infoForm.companyCityCode = cityCode
      this.infoForm.companyCity = name
    },
    upload(fileRef){
      this.$refs[fileRef].click()
    },
    fileChanged(fileRef,attr,formAttr){
      const item = this.$refs[fileRef].files[0]
      this.uploadPicture(item).then(path=>{
        this.infoForm[formAttr]=path
        
        const reader = new FileReader()
        reader.onload = (e) => {
          this.$set(this.showPicture, attr, e.target.result)
        }
        reader.readAsDataURL(item)
        
        this.$refs['infoForm'].validate(valid=>{
          //ignore
        })
      }).catch(err => {
        this.$alert(err)
      })
    },
  }
}
</script>

<style scoped>
.step{
  padding: 50px;
}
.el-cascader{
  width: 300px;
}
.right-content{
  float:right;
  padding-left: 45px;
  height: 400px;
  border-left: 1px black solid;
  border-left-color: #b4bccc;
}
.image{
  width: 300px;
  height: 200px;
}
.image-demo{
  width: 80px;
  height: 80px;
}
.text-tip{
  color:#CCCCCC;
  display: block;
}
.info-form-content{
  padding-bottom: 50px;
}
.inner-upload-left{
  display: inline-block;
  width: 14%;
}
.inner-upload-right{
  display: inline-block;
  width: 85%;
}
.demo-position{
  margin-top: -15px;
  padding-left: 12px;
}
.success{
  color:red;
  padding-left:15px;
  font-size: 16px;
}
</style>
