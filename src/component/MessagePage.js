// 消息页面组件
import React from 'react';
import { styles } from './styles';
import { GoLogin } from './Register';
import Loading from './Loading';
import { ChatMessage } from '../containers/Message';
import { Toast } from 'antd-mobile';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  AsyncStorage
} from 'react-native';
let timer
export class Message extends React.Component{
  networks = ()=> {
    fetch('https://www.zhaoqianbei.com/api/Ajax/msg',{
      method:'GET'
    }).then((res)=>{
      return res.json()
    }).then((resdata)=>{
        //计算消息条数，添加到Tab导航栏
        // let num = 0
        // resdata.data.map((item,index)=>(
        //   num+=item.sum
        // ))
        // this.props.dispatch({
        //   type:'MESSAGE_NUM',
        //   num:num
        // })
        let strdata = JSON.stringify(resdata.data)
        AsyncStorage.setItem('chatlist',strdata,(e)=>{
          e?console.log(e):null
        })
        this.props.dispatch({
          type:'MESSAGE_DATA',
          data:resdata.data
        })
    }).catch((e)=>{
    })
  }
  componentDidMount(){
    AsyncStorage.getItem('chatlist',(e,data)=>{
      if(data!==null){
        let newdata = JSON.parse(data)
        this.props.dispatch({
          type:'MESSAGE_DATA',
          data:newdata
        })
      }
    })
    this.networks()
    timer = setInterval(()=>{
        this.networks()
      },2000)
   }
  componentWillUnmount(){
    clearInterval(timer)
  }
  render(){
    const { state } = this.props
    return(
      <View style={styles.messageBox}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.messageSearchBox}
          onPress={()=>{
            this.props.navigate('Searchs')
          }}
        >
          <Image
            source={require('../imge/icon-search.png')}
            style={styles.iconSearch}
          />
          <Text style={{color:'#858585'}}>搜索</Text>
        </TouchableOpacity>
        <FlatList
          data={state.data}
          keyExtractor={(item,index)=>index}
          style={{flexDirection:'column'}}
          initialNumToRender={10}
          renderItem={({item})=>
            <TouchableHighlight
              activeOpacity={0.8}
              underlayColor='#ebebeb'
              onPress={()=>this.props.navigate('Chats',{username:item.user_name,uid:item.u_id})}
            >
              <View style={styles.listMessage}>
                <Image
                  source={{uri:item.u_img_curl!=null?item.u_img_curl[0]=='h'?item.u_img_curl:`https://www.zhaoqianbei.com${item.u_img_curl}`:'https://www.zhaoqianbei.com/main/Public/img/userDefault.png'}}
                  style={styles.messageHeade}
                />
                <View style={styles.messageTextBox}>
                  <Text style={[styles.messageText,{fontSize:18,color:'black'}]}>{item.user_name}</Text>
                  <Text style={[styles.messageText,{fontSize:14}]}>{item.ip_location}</Text>
                </View>
                <View style={styles.messageTimeBox}>
                  <Text style={styles.messageText}>{item.time}</Text>
                  {
                    item.sum>0?
                      <View style={styles.warn}>
                        <Text style={{color:'white'}}>{item.sum}</Text>
                      </View>:null
                  }
                </View>
              </View>
            </TouchableHighlight>
          }
        />
      </View>
    )
  }
}
export default class MessagePage extends React.Component{
  componentWillMount(){
    //获取登录状态，判断是否显示登录跳转页面
    AsyncStorage.getItem('login',(e,data)=>{
      if(data!==null){
        let loginstate = JSON.parse(data)
          if(loginstate.loginstatu==true){
            this.props.dispatch({
              type:'LOGINSTATU'
            })
          }
      }
    })
  }
  render(){
    const { login } = this.props
    return(
      login==true?
      <ChatMessage
        navigate={this.props.navigation.navigate}
      />:
      <GoLogin
        navigate={this.props.navigation.navigate}
      />
    )
  }
}
