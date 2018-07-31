//我的主页面
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { styles } from './styles';
import Chat from './Chat';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GoLogin } from './Register';
import { MyCenter } from '../containers/Mycenter';
import Loading from './Loading';
import Pullref from './Pullref';
import { WhiteSpace } from 'antd-mobile';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  AsyncStorage,
  Button
} from 'react-native';
export class ListText extends React.Component{
  render(){
    return(
      <View style={styles.myCenterListBox}>
        <View style={styles.myCenterListIconBox}>
          <Icon
            name={this.props.iconname}
            size={16}
            color='#666'
          />
        </View>
        <Text style={styles.myCenterListText}>{this.props.title}</Text>
        <View style={styles.myCenterListIconRightBox}>
          <Icon name='angle-right' size={20} color='#666'/>
        </View>
      </View>
    )
  }
}
export class MyCenters extends React.Component{
  network = () => {
    fetch('https://www.zhaoqianbei.com/api/Index/userInfo',{
      method:'GET'
    }).then((res)=>{
      if(res.ok===true){
        this.props.dispatch({
          type:'MYCENTER_TRUE'
        })
        return res.json()
      }
    }).then((res)=>{
      let strdata = JSON.stringify(res)
      AsyncStorage.setItem('mycenter',strdata,(e) => {
        e?console.log(e):null
      })
      this.props.dispatch({
        type:'MYCENTER_DATA',
        data:res.data
      })
    }).catch((e)=>{
      this.props.dispatch({
        type:'MYCENTER_ERR'
      })
    })
  }
  componentDidMount(){
    this.network()
    let timer
    // timer = setInterval(()=>{
    //   if(this.props.state.network==false||this.props.state.data.user_name==undefined){
    //      this.network()
    //   }else{
    //     clearInterval(timer)
    //   }
    // },5000)
    AsyncStorage.getItem('mycenter',(e,data)=>{
      if(data!=null){
        let jsondata = JSON.parse(data)
        this.props.dispatch({
          type:'MYCENTER_DATA',
          data:jsondata.data
        })
        this.props.dispatch({
          type:'MYCENTER_TRUE'
        })
      }
    })
  }
  render(){
    const { state } = this.props
    return(
      state.network==true?state.data.user_name==undefined?<Loading/>:
      <View>
        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor='#fff'
          onPress={()=>{this.props.navigate('DataCompleteness',{data:state})}}
          style={{marginTop: 10,marginBottom: 10}}
        >
          <View style={[styles.myUsernameBox,{justifyContent: 'space-between'}]}>
            <Image
              style={{height:60,width:60,borderRadius:30}}
              source={{uri:state.data.u_img_curl!=null?state.data.u_img_curl[0]==='h'?state.data.u_img_curl:`https://www.zhaoqianbei.com/${state.data.u_img_curl}`:'https://www.zhaoqianbei.com/main/Public/img/userDefault.png'}}
            />
            <View style={styles.personalDataBox}>
              <Text style={styles.personalDataText}>{state.data.user_name}</Text>
              <Text style={[styles.personalDataText,{fontSize: 14}]}>个人详细资料</Text>
            </View>
            <View style={{alignItems:'center',flexDirection: 'row'}}>
              <Icon name='angle-right' size={30} color='#fff'/>
            </View>
          </View>
        </TouchableHighlight>
        <Text style={{color:'#999',marginLeft:10,fontSize: 14,fontWeight:'400',marginBottom:5}}>我是学生</Text>
        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor='black'
          onPress={()=>{this.props.navigate('MyMaster')}}
        >
          <View>
            <ListText iconname='address-book' title='我的前辈'/>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor='black'
          onPress={()=>{this.props.navigate('MyAssignments')}}
        >
          <View>
            <ListText iconname='calendar-minus-o' title='我的任务'/>
          </View>
        </TouchableHighlight>
        <Text style={{color:'#999',marginLeft:10,fontSize: 14,fontWeight:'400',marginBottom:5,marginTop: 10}}>我是前辈</Text>
        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor='black'
          onPress={()=>{this.props.navigate('StudentAdministrations')}}
        >
          <View>
            <ListText iconname='vcard' title='拜师管理'/>
          </View>
        </TouchableHighlight>
        {/* <TouchableHighlight
          activeOpacity={0.8}
          underlayColor='black'
          onPress={()=>{this.props.navigate('MyRecommend')}}
          >
          <View>
            <ListText iconname='hand-o-right' title='我的推荐'/>
          </View>
          </TouchableHighlight>
          <TouchableHighlight
          activeOpacity={0.8}
          underlayColor='black'
          onPress={()=>{this.props.navigate('FinancialManagement')}}
          >
          <View>
            <ListText iconname='yen' title='财务管理'/>
          </View>
          </TouchableHighlight>
          <TouchableHighlight
          activeOpacity={0.8}
          underlayColor='black'
          onPress = {()=>{this.props.navigate('DataAdministration')}}
          >
          <View>
            <ListText iconname='file-text' title='资料管理'/>
          </View>
        </TouchableHighlight> */}
        <Text style={{color:'#999',marginLeft:10,fontSize: 14,fontWeight:'400',marginBottom:5,marginTop: 10}}>设置</Text>
        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor='black'
          onPress={()=>{this.props.navigate('Set',{title:'设置'})}}
        >
          <View>
            <ListText iconname='cog' title='设置'/>
          </View>
        </TouchableHighlight>
      </View>:
      <Pullref
        networks={()=>{
          this.network()
        }}
      />
    )
  }
}
//判读登录显示哪个组件
export class MyCenterBox extends React.Component{
  componentDidMount(){
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
      
      <MyCenter
        navigate={this.props.navigation.navigate}
      />
    )
  }
}
