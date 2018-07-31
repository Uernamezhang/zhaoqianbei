//登录界面
import React from 'react';
import { List, InputItem , WingBlank , WhiteSpace ,  Toast } from 'antd-mobile';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
// 微信登录组件，已配置好，可直接使用
import *as wechat from 'react-native-wechat';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
  Button,
  AsyncStorage,
  StatusBar
} from 'react-native';
//手机号码正则
let phoneReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[0-9])\d{8}$/;
//验证码
let codeReg =  /^\d{6}$/;
//点击登录组件
export class GoLogin extends React.Component{
  render(){
    return(
      <View style={styles.goLoginBox}>
        <Image
          source={require('../imge/zqblg.png')}
          style={{height: 100,width: 100}}
        />
        <Text style={{color:'#999'}}>
          抱歉，你还没登录，请先登录~
        </Text>
        <TouchableOpacity
          style={{marginTop: 10}}
          onPress={()=>{
            this.props.navigate('Logins')
          }}
          >
          <View style={styles.goLoginButton}>
            <Text style={{color:"#fff"}}>去登录</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
//登录
export class Login extends React.Component{
  //登录请求状态
  loginnetwork = (username,password)=> {
    let formdata = new FormData();
    formdata.append('user_name',username);
    formdata.append('password',password);
    fetch('https://www.zhaoqianbei.com/api/index/login',{
      method:'POST',
      body:formdata
    }).then((res)=>{
      if(res.ok==true){
        return res.json()
      }
    }).then((resdata)=>{
      //登录成功
      if(resdata.ret_msg==1){
        //移除键盘
        Keyboard.dismiss()
        //发送登录
        this.props.dispatch({
          type:'LOGINSTATU',
        })
        //因为action是同步发出的，所以不能马上接收新的state，所以手动更改
        let newstates = this.props.state
        newstates.loginstatu = true
        //存储登录信息和状态(存储手动更改的新状态)
        let loginstate = JSON.stringify(newstates)
        AsyncStorage.setItem('login',loginstate,(err)=>{
          err?console.log(err):null
        })
        //登录成功关闭登录页面
        this.props.navigation.goBack()
      }else if(resdata.ret_msg==0){
        Toast.fail('密码错误',1)
      }else if(resdata.ret_msg==-1){
        Toast.fail('账号不存在',1)
      }
    }).catch((e)=>{
      Toast.offline('网络错误',1)
    })
  }
  componentDidMount(){
    //获取本地存储账户密码
    wechat.registerApp('your appid')
    AsyncStorage.getItem('login',(e,data)=>{
      if(data!=null){
        let statedata = JSON.parse(data)
        //如果本地有账号储存则发送Action更新State的输入框值
        this.props.dispatch({
          type:'LOGOINPHONE_VAL',
          val:statedata.phoneval
        })
        this.props.dispatch({
          type:'LOGOINPASSWORD_VAL',
          val:statedata.passwordval
        })
      }
    })
  }
  render(){
    const {  dispatch , state } = this.props
    return(
      <View style={styles.LoginBox}>
        <List>
          <List.Item>
            <InputItem
              extra={state.phoneval!==''?
                phoneReg.test(state.phoneval)?<Icon name='check-circle' size={16}/>:
                <Icon name='exclamation-circle' color='red' size={16}/>:null
              }
              clear={true}
              placeholder='手机号码'
              type='phone-pad'
              value={state.phoneval}
              style={styles.LoginInput}
              onChange={(val)=>{
                dispatch({
                  type:'LOGOINPHONE_VAL',
                  val:val
                })
              }}
              onBlur={(val)=>{
                if(val.length===0){
                  Toast.info('账号不能为空 !', 1,null,false);
                }else if(phoneReg.test(val)===false){
                  Toast.info('请输入正确手机号', 1,null,false);
                }
              }}
            >
              账号
            </InputItem>
          </List.Item>
          <List.Item>
            <InputItem
              placeholder='登录密码'
              type='password'
              style={styles.LoginInput}
              value={state.passwordval}
              onChange={(val)=>{
                dispatch({
                  type:'LOGOINPASSWORD_VAL',
                  val:val
                })
              }}
            >
              密码
            </InputItem>
          </List.Item>
        </List>
        <WhiteSpace/>
        <WingBlank>
          <TouchableOpacity
            onPress={()=>{
              if(state.phoneval.length===0){
                Toast.info('账号不能为空',1,null,false)
              }else if(phoneReg.test(state.phoneval)===false){
                Toast.info('请输入正确的手机号',1,null,false)
              }else if(state.passwordval.length===0){
                Toast.info('密码不能为空', 1,null,false);
              }else if(state.passwordval.length<6){
                Toast.info('密码长度不正确', 1,null,false);
              }else if(phoneReg.test(state.phoneval)&state.passwordval.length>=6){
                Toast.info('正在登录，请稍后', 1);
                this.loginnetwork(state.phoneval,state.passwordval)
              }
            }}
          >
            <View style={styles.LoginButton}>
              <Text style={styles.LoginButtonText}>
                登录
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row',justifyContent:'space-between',alignItems: 'center'}}>
            <TouchableOpacity
              style={{marginTop: 10}}
              onPress={()=>{
                Keyboard.dismiss()
                this.props.navigation.navigate('Registers')
              }}
            >
              <Text style={styles.LoginButtonTitle}>没有账号，立即注册</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginTop: 10}}
              onPress={()=>{
                Keyboard.dismiss()
                Toast.info('此版块暂未开放')
                // this.props.navigation.navigate('RetrievePasswod')
              }}
            >
              <Text style={styles.LoginButtonTitle}>忘记密码点我</Text>
            </TouchableOpacity>
          </View>
          <WhiteSpace/>
        </WingBlank>
        <WhiteSpace/>
        <WhiteSpace/>
        <WhiteSpace/>
        <WhiteSpace/>
        <Text style={styles.LoginIconBox}>使用第三方登录</Text>
        <WhiteSpace/>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.LoginIconViewBox}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={()=>{
                Toast.info('暂未开放',2)
              }}
            >
              <Icon name='qq' size={40} color='rgb(76,175,233)'/>
              <Text style={{color:'rgb(76,175,233)'}}>QQ</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.LoginIconViewBox}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={()=>{
                wechat.isWXAppInstalled()
                .then((install)=>{
                  if(install){
                    wechat.sendAuthRequest('snsapi_userinfo', 'wechat_sdk_demo')
                    .then(responseCode => {
                      console.log(responseCode)
                      if(responseCode.errCode==0){
                        let formdata = new FormData()
                        formdata.append('code',responseCode.code)
                        // fetch('https://www.zhaoqianbei.com/api/Index/wxLogin',{
                        //   method:'POST',
                        //   body:formdata
                        // }).then(res => {
                        //   if(res.ok==true){
                        //     return res.json()
                        //   }
                        // }).then(resdata => {
                        //   console.log(resdata)
                        // }).catch(err => {
                        //   console.log(err)
                        // })
                      }
                    })
                    .catch(err => {
                      console.log(err)
                    })
                  }else{
                    Toast.info('请先安装微信',2)
                  }
                })
              }}
            >
              <Icon name='weixin' size={40} color='#62b900'/>
              <Text style={{color:'#62b900'}}>微信</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar
          backgroundColor='rgb(25,160,148)'
          translucent={false}
        />
      </View>
    )
  }
}
//注册
export class Register extends React.Component{
  //点击发送验证码
  sendcode = () => {
    let formdata = new FormData()
    formdata.append('shouji',this.props.phoneval)
    fetch('https://www.zhaoqianbei.com/api/Api/sendPhoneCpCode',{
      method:'POST',
      body:formdata
    }).then((res)=>{
      return res.json()
    }).then((resdata)=>{
      if(resdata.ret_msg=='1'){
        Toast.info('发送成功',1)
      }else if(resdata.ret_msg=='0'){
        Toast.info('发送失败',1)
      }else if(resdata.ret_msg=='-1'){
        Toast.info('请输入手机号',1)
      }
    }).catch((e)=>{
      Toast.info('网络错误，请稍后再试',1)
    })
  }
  //手机和验证码注册
  register = () => {
    let formdata = new FormData()
    formdata.append('verifycode',this.props.code)
    formdata.append('shouji',this.props.phoneval)
    fetch('https://www.zhaoqianbei.com/api/Ajax/register',{
      method:'POST',
      body:formdata
    }).then((res)=>{
      return res.json()
    }).then((resdata)=>{
      if(resdata.ret_msg==0){
        Toast.info('验证码错误',2)
      }else if(resdata.ret_msg==-3){
        Toast.info('手机号已被注册',2)
      }else if(resdata.ret_msg==-2){
        Toast.info('信息未填写',2)
      }else if(resdata.ret_msg==-1){
        Toast.info('注册失败',2)
      }else if(resdata.ret_msg==1){
        Toast.success('注册成功,初始密码为您的验证码,请牢记',2)
        //注册成功时，把账号密码绑定到登录页面
        this.props.dispatch({
          type:'LOGOINPHONE_VAL',
          val:this.props.phoneval
        })
        this.props.dispatch({
          type:'LOGOINPASSWORD_VAL',
          val:this.props.code
        })
        Keyboard.dismiss()
        this.props.navigation.goBack()
      }
    }).catch((e)=>{
      Toast.info('网络错误',1)
    })
  }
  render(){
    const { phoneval , code , dispatch , settimer , sendcode } = this.props
    return(
      <List renderHeader={()=>'手机快捷注册'}>
        <List.Item>
          <InputItem
            extra={phoneval!==''?phoneReg.test(phoneval)?<Icon name='check-circle'/>:<Icon name='exclamation-circle' color='red' />:null}
            placeholder='手机号'
            type='phone-pad'
            style={styles.LoginInput}
            value={phoneval}
            onChange={(val)=>{
              dispatch({
                type:'REGINPHONE_VAL',
                val:val
              })
            }}
            onBlur={(val)=>{
              if(val.length===0){
                Toast.info('手机号不能为空',1)
              }else if(!phoneReg.test(val)){
                Toast.info('请输入正确的手机号码',1)
              }
            }}
          >
            手机号
          </InputItem>
        </List.Item>
        <List.Item>
          <InputItem
            placeholder='请输入短信验证码'
            style={styles.LoginInput}
            type={'number'}
            type='phone-pad'
            extra={
              <Button
                title={sendcode?`重新发送(${settimer})S`:'点击发送验证码'}
                disabled={sendcode}
                color='rgb(25,160,148)'
                onPress={()=>{

                  if(phoneval.length===0){
                    Toast.info('请输入手机号',1)
                  }else if(!phoneReg.test(phoneval)){
                    Toast.info('手机号码有误',1)
                  }else{
                    this.sendcode()
                    let timinter
                    let timenum = settimer
                    dispatch({
                      type:'SENDCODE_TRUE'
                    })
                    timinter = setInterval(() => {
                    //计数器自减
                      timenum--
                      dispatch({
                        type:'SETTIMER',
                        num:timenum
                      })
                    if(timenum<=0){
                      //倒计时结束归位
                      dispatch({
                        type:'SENDCODE_FALSE',
                        num:settimer
                      })
                      clearInterval(timinter)
                    }
                    }, 1000)
                  }
                }}
              />
            }
            value={code}
            onChange={(val)=>{
              dispatch({
                type:'REGCODE',
                val:val
              })
            }}
            onBlur={(val)=>{
              if(val.length===0){
                Toast.info('请输入验证码',1)
              }else if(!codeReg.test(code)){
                Toast.info('验证码格式错误',1)
              }
            }}
          >
            验证码
          </InputItem>
        </List.Item>
        {/* <List.Item>
          <InputItem
            placeholder='推荐码（可选填）'
            style={styles.LoginInput}
          >
            推荐码
          </InputItem>
        </List.Item> */}
        <List.Item>
          <TouchableOpacity
            onPress={()=>{
              if(phoneval.length===0){
                Toast.info('请输入手机号',1,null,false)
              }else if(!phoneReg.test(phoneval)){
                Toast.info('手机号码有误！请重新输入',1,null,false)
              }else if(code.length===0){
                Toast.info('请输入验证码',1,null,false)
              }else if(!codeReg.test(code)){
                Toast.info('请输入正确的验证码',1,null,false)
              }else if(phoneReg.test(phoneval)&codeReg.test(code)){
                this.register()
              }
            }}
            >
            <View style={styles.LoginButton}>
              <Text style={styles.LoginButtonText}>
                注册
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{alignItems:'center',marginTop: 10}}>
            <TouchableOpacity
              onPress={()=>{
                this.props.navigation.goBack()
              }}
            >
              <Text style={{color:'rgb(25,160,148)'}}>已有账号，请登录</Text>
            </TouchableOpacity>
          </View>
          <WhiteSpace/>
          <WhiteSpace/>
        </List.Item>
      </List>
    )
  }
}
//找回密码
export class RetrievePasswod extends React.Component{
  render(){
    const { phoneval , code , dispatch , settimer , sendcode } = this.props
    return(
      <List renderHeader={()=>'找回密码'}>
        <List.Item>
          <InputItem
            extra={phoneval!==''?phoneReg.test(phoneval)?<Icon name='check-circle'/>:<Icon name='exclamation-circle' color='red' />:null}
            placeholder='手机号'
            type='phone-pad'
            style={styles.LoginInput}
            value={phoneval}
            onChange={(val)=>{
              dispatch({
                type:'RETINPHONE_VAL',
                val:val
              })
            }}
            onBlur={(val)=>{
              if(val.length===0){
                Toast.info('手机号不能为空',1)
              }else if(!phoneReg.test(val)){
                Toast.info('请输入正确的手机号码',1)
              }
            }}
          >
            手机号
          </InputItem>
        </List.Item>
        <List.Item>
          <InputItem
            placeholder='请输入短信验证码'
            style={styles.LoginInput}
            type={'number'}
            type='phone-pad'
            extra={
              <Button
                title={sendcode?`重新发送(${settimer})S`:'点击发送验证码'}
                disabled={sendcode}
                color='rgb(25,160,148)'
                onPress={()=>{
                  if(phoneval.length===0){
                    Toast.info('请输入手机号',1)
                  }else if(!phoneReg.test(phoneval)){
                    Toast.info('手机号码有误',1)
                  }else{
                    let timinter
                    let timenum = settimer
                    dispatch({
                      type:'RETSENDCODE_TRUE'
                    })
                    timinter = setInterval(() => {
                      //计数器自减
                      timenum--
                      dispatch({
                        type:'RETSETTIMER',
                        num:timenum
                      })
                      if(timenum<=0){
                        //倒计时结束归位
                        dispatch({
                          type:'RETSENDCODE_FALSE',
                          num:settimer
                        })
                        clearInterval(timinter)
                      }
                    }, 1000)
                  }
                }}
              />
            }
            value={code}
            onChange={(val)=>{
              dispatch({
                type:'RETCODE',
                val:val
              })
            }}
            onBlur={(val)=>{
              if(val.length===0){
                Toast.info('请输入验证码',1)
              }else if(!codeReg.test(code)){
                Toast.info('验证码格式错误',1)
              }
            }}
          >
            验证码
          </InputItem>
        </List.Item>
        <List.Item>
          <TouchableOpacity
            onPress={()=>{
              if(phoneval.length===0){
                Toast.info('请输入手机号',1)
              }else if(!phoneReg.test(phoneval)){
                Toast.info('手机号码有误！请重新输入',1)
              }else if(code.length===0){
                Toast.info('请输入验证码',1)
              }else if(!codeReg.test(code)){
                Toast.info('请输入正确的验证码',1)
              }else if(phoneReg.test(phoneval)&codeReg.test(code)){
                Keyboard.dismiss()
              }
            }}
          >
            <View style={styles.LoginButton}>
              <Text style={styles.LoginButtonText}>
                重置
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{alignItems:'center',marginTop: 10}}>
            <TouchableOpacity
              onPress={()=>{
                this.props.navigation.goBack()
              }}
            >
              <Text style={{color:'rgb(25,160,148)'}}>已有账号，请登录</Text>
            </TouchableOpacity>
          </View>
          <WhiteSpace/>
          <WhiteSpace/>
        </List.Item>
      </List>
    )
  }
}
