import React from 'react';
import { styles } from './styles';
import { Toast } from 'antd-mobile';
import {
  Text,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button,
  FlatList,
  AsyncStorage,
  StatusBar
} from 'react-native';
let timer
export default class Chat extends React.Component{
  //获取所有消息并存储一次
  // network = () => {
  //   fetch(`https://www.zhaoqianbei.com/api/Ajax/listmsg/uid/${this.props.navigation.state.params.uid}`,{
  //     method:'GET'
  //   }).then((res)=>{
  //       return res.json()
  //   }).then((resdata)=>{
  //     //let jsonstrdata = JSON.stringify(resdata.data)
  //     console.log(resdata)
  //     // 存储最新消息
  //     // AsyncStorage.setItem(this.props.navigation.state.params.uid,jsonstrdata,(e)=>{
  //     //   e?console.log(e):null
  //     // })
  //     this.props.dispatch({
  //       type:'CHATLIST_DATA',
  //       data:resdata.data
  //     })
  //   }).catch((e)=>{
  //     console.log(e)
  //   })
  // }
  //开始轮询最新消息
  queryNetwork = () => {
    let formdata = new FormData()
    formdata.append('uid',this.props.navigation.state.params.uid)
    fetch('https://www.zhaoqianbei.com/api/Ajax/ajaxMsg/uid',{
      method:'POST',
      body:formdata
    }).then((res)=>{
        return res.json()
    }).then((resdata)=>{
      //轮询出来的消息拼接到现有的消息后面
      let newmsgdata = resdata.data.concat(this.props.state.msgdata)
      this.props.dispatch({
        type:'CHATLIST_DATA',
        data:newmsgdata
      })
      let strdata = JSON.stringify(newmsgdata)
      //在更新储存已拼接的数据
      AsyncStorage.setItem(`${this.props.userdata.data.id}tochatmsg${this.props.navigation.state.params.uid}`,strdata,(e)=>{
        e?console.log(e):null
      })
    }).catch((e)=>{})
  }
  //发送消息
  sendmsg = (err) => {
    let formdata = new FormData()
    formdata.append('uid',this.props.navigation.state.params.uid)
    formdata.append('cont',this.props.state.chatmessage)
    fetch('https://www.zhaoqianbei.com/api/Ajax/liao/uid',{
      method:'POST',
      body:formdata
    }).then((res)=>{
      return res.json()
    }).then((resdata)=>{
      this.props.dispatch({
        type:'SEND_TRY'
      })
    }).catch((e)=>{
      this.props.dispatch({
        type:'SEND_ERR'
      })
    })
  }
componentDidMount(){
  // 先显示本地储存
  AsyncStorage.getItem(`${this.props.userdata.data.id}tochatmsg${this.props.navigation.state.params.uid}`,(e,data)=>{
    if(data!=null){
      let jsondata = JSON.parse(data)
      this.props.dispatch({
        type:'CHATLIST_DATA',
        data:jsondata
      })
    }
  })
  //this.network()
  this.queryNetwork()
  timer = setInterval(()=>{
    this.queryNetwork()
  },1000)
}
componentWillUnmount(){
  clearInterval(timer)
  this.props.dispatch({
    type:'CHATLIST_DATA',
    data:[]
  })
}
  render(){
    const { state , dispatch , userdata } = this.props
    return(
      <KeyboardAvoidingView
        style={styles.chatBox}
      >
        <StatusBar
          backgroundColor='rgb(25,160,148)'
          barStyle='default'
          animated={true}
        />
        <FlatList
          style={{paddingLeft:20,paddingRight:20,flex:1}}
          data={state.msgdata}
          inverted={-1}
          keyExtractor={(item,index)=>index}
          renderItem={({item}) =>
            <View style={[styles.messageListsBox]}>
              <View style={[styles.messageListTimeBox]}>
                <Text style={{backgroundColor:'#ebebeb',color:'#fff',paddingTop:2,paddingBottom: 2,paddingLeft: 5,paddingRight: 5,borderRadius: 2}}>
                  {`${new Date(item.msg_time*1000).getMonth()+1}月${new Date(item.msg_time*1000).getDate()}日 ${new Date(item.msg_time*1000).getHours()}:${new Date(item.msg_time*1000).getMinutes()<10?`0${new Date(item.msg_time*1000).getMinutes()}`:new Date(item.msg_time*1000).getMinutes()}`}
                </Text>
              </View>
              {
                item.user_name!=userdata.data.user_name?
                  <View style={styles.messageListBox}>
                    <Image
                      style={{height:40,width:40,borderRadius:20}}
                      source={{uri:item.u_img_curl!=null?item.u_img_curl[0]=='h'?item.u_img_curl:`https://www.zhaoqianbei.com${item.u_img_curl}`:'https://www.zhaoqianbei.com/main/Public/img/userDefault.png'}}
                    />
                    <View style={styles.messageContent}>
                      {
                        item.msg_cat==1?
                        <Text style={{fontSize:14}}>
                          您收到了一条系统消息：
                          <Text style={{color:'red'}}>
                            {item.msg_content}；
                          </Text>
                          快去个人中心查看吧
                        </Text>:
                        <Text style={{fontSize:14}}>
                          {item.msg_content}
                        </Text>
                      }
                    </View>
                  </View>:
                  <View style={[styles.messageListBox,{justifyContent:'flex-end',paddingLeft: 80,paddingRight:0}]}>
                    {
                      item.sendstate==1?<Text style={{color: 'red',fontSize:10}}>发送失败</Text>:null
                    }
                    <View style={[styles.messageContent,{backgroundColor: 'rgb(25,160,148)',marginRight: 10}]}>
                      <Text style={{fontSize:14,color: '#fff'}}>
                        {item.msg_content}
                      </Text>
                    </View>
                    <Image
                      style={{height:40,width:40,borderRadius:20}}
                      source={{uri:item.u_img_curl!=null?item.u_img_curl[0]=='h'?item.u_img_curl:`https://www.zhaoqianbei.com${item.u_img_curl}`:'https://www.zhaoqianbei.com/main/Public/img/userDefault.png'}}
                    />
                  </View>
              }
            </View>
          }
        />
        <View style={styles.keyBox}>
          <View
            style={styles.keyInputBox}
          >
            {/* <TouchableOpacity
              style={{position:'absolute',bottom:5,left:5}}
            >
              <Image
                style={{height:20,width:20,borderRadius:10}}
                source={require('../imge/icon-photo.png')}
              />
            </TouchableOpacity> */}
            <TextInput
              underlineColorAndroid='transparent'
              multiline={true}
              style={[styles.keyInput,state.inputviewheight>60?{height:60}:{height:null}]}
              onContentSizeChange={(event)=>{
                //判断输入框内容高度使输入框自适应高度，到一定高度设定死高度
                dispatch({
                  type:'INPUTVIEW_HEIGHT',
                  height:event.nativeEvent.contentSize.height
                })
              }}
              value={state.chatmessage}
              onChangeText ={(event)=>{
                dispatch({
                  type:'CHAT_MESSAGE',
                  val:event
                })
              }}
            />
          </View>
          <View style={styles.sendButtonBox}>
            <Button
              color="rgb(25,160,148)"
              title='发送'
              disabled={state.chatmessage==''?true:false}
              onPress={()=>{
                if(state.chatmessage!=''){
                  this.sendmsg()
                  let messagedat = {
                    msg_content:state.chatmessage,
                    u_img_curl:userdata.data.u_img_curl,
                    msg_time:Date.parse(new Date())/1000,
                    user_name:userdata.data.user_name,
                    sendstate:state.sendstate
                  }
                  state.msgdata.unshift(messagedat)
                  dispatch({
                    type:'CHAT_MESSAGE',
                    val:''
                  })
                }
              }}
            />
          </View>
        </View>
        <StatusBar
          backgroundColor='rgb(25,160,148)'
          translucent={false}
        />
      </KeyboardAvoidingView>
    )
  }
}
