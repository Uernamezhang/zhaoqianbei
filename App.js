// 首页配置页面
import React from 'react';
import { TabNavigator , StackNavigator } from "react-navigation";
import { Badge } from 'antd-mobile';
import { createStore , combineReducers } from 'redux';
import { Provider,connect } from 'react-redux';
import SmallClass from './src/component/Smallclass';
import Luck from './src/component/Luck';
import Message from './src/component/Message';
import { MyCenter } from './src/component/MycenterStk';
import { Chats , Searchs } from './src/containers/Message';
import MasterDetails from './src/component/MasterDetails';
import Sets from './src/containers/Set';
import reducer from './src/reducers/reducer';
import DataAdministration from './src/component/DataAdministration';
import MasterDetail from './src/containers/MasterDetailsContainer';
import { BigClass , BigClassDetail }from './src/containers/BigClass';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyRecommend from './src/component/MyRecommend';
import FinancialManagement from './src/component/FinancialManagement'
import { MyMaster } from './src/component/MyMaster';
import { MyAssignments } from './src/containers/MyMaster';
import { StudentAdministrations } from './src/containers/CenterMaster';
import Management from './src/component/Management';
import Comment from './src/component/Comment';
import RecommendRecord from './src/component/RecommendRecord';
import RecommendExplain from './src/component/RecommendExplain';
import Withdraw from './src/component/Withdraw';
import FinanceOverview from './src/component/FinanceOverview';
import Account from './src/component/Account';
import Income from './src/component/Income';
import Expense from './src/component/Expense';
import WithdrawalRecord from './src/component/WithdrawalRecord';
import Discount from './src/component/Discount';
//import ChangePassword from './src/component/ChangePassword';
import PersonalData from './src/component/PersonalData';
import   DataCompleteness  from './src/component/DataCompleteness';
import SetUserName from './src/component/SetUserName';
import  { SetPhoneNumber , ChangePhoneNumber }  from './src/component/SetPhoneNumber';
import NewMessageNotification from './src/component/NewMessageNotification';
import SetUser from './src/component/SetUser';
import { Logins , Registers , RetrievePasswod } from './src/containers/Reigister';
import Clause from './src/component/Clause';
import * as WeChat from 'react-native-wechat';

import {
  View,
  Text,
  Image,
  StyleSheet,
  AppRegistry,
  Button,
  StatusBar,
  TouchableOpacity,
  AsyncStorage,
  Keyboard,
  Alert,
  Linking,
  Platform
} from 'react-native';
import {
  isFirstTime,
  isRolledBack,
  packageVersion,
  currentVersion,
  checkUpdate,
  downloadUpdate,
  switchVersion,
  switchVersionLater,
  markSuccess,
} from 'react-native-update';
import _updateConfig from './update.json';
const {appKey} = _updateConfig[Platform.OS];
const store = createStore(reducer)
//二级TAB底部导航
export const MainScreenNavigator = TabNavigator({
  BigClassStack: {
    screen: BigClass,
    navigationOptions: ({navigation})=>({
      tabBarLabel: '大课',
      tabBarIcon:({tintColor,focused})=>(
        focused?
        <Icon
          name='file-text'
          size={20}
          color='rgb(25,160,148)'
        />:
        <Icon
          name='file-text-o'
          size={20}
          color='#666'
        />
      )
    }),
  },
  SmallClass: {
    screen: SmallClass,
    navigationOptions: ({navigation})=>({
      tabBarLabel: '小课',
      tabBarIcon:({tintColor,focused})=>(
        focused?
        <Icon
          name='check-square'
          size={20}
          color='rgb(25,160,148)'
        />:
        <Icon
          name='check-square-o'
          size={20}
          color='#666'
        />
      )
    }),
  },
  // Luck:{
  //   screen: Luck,
  //   navigationOptions: {
  //     tabBarLabel: '缘分',
  //     tabBarIcon:({tintColor,focused})=>(
  //       focused?
  //       <Icon
  //         name='heartbeat'
  //         size={20}
  //         color='rgb(25,160,148)'
  //       />:
  //       <Icon
  //         name='heart-o'
  //         size={20}
  //         color='#666'
  //       />
  //     )
  //   },
  // },
  Message:{
    screen: Message,
    navigationOptions: {
      tabBarLabel:'消息',
      tabBarIcon:({tintColor,focused})=>(
        <View style={{flex:1}}>
          {
            focused?
              <Icon
                name='comments'
                size={20}
                color='rgb(25,160,148)'
              />:
              <Icon
                name='comments-o'
                size={20}
                color='#666'
              />
          }
        </View>
      )
    },
  },
  MyCenter:{
    screen: MyCenter,
    navigationOptions: {
      tabBarLabel:'我的',
      tabBarIcon:({tintColor,focused})=>(
          focused?
          <Icon
            name='user'
            size={20}
            color='rgb(25,160,148)'
          />:
          <Icon
            name='user-o'
            size={20}
            color='#666'
          />
          )
    },
  }
},{
  tabBarPosition: 'bottom',
  initialRouteName:'BigClassStack',
  lazy:true,
  removeClippedSubviews:true,
  backBehavior:true,
  swipeEnabled:false,
  animationEnabled:false,
  tabBarOptions: {
    activeTintColor: 'rgb(25,160,148)',
    inactiveTintColor:'#555',
    showIcon:true,
    indicatorStyle:{
      height:0
    },
    style:{
      backgroundColor: 'white',
      borderTopWidth:1,
      borderTopColor:'#ebebeb',
      height:60,
      elevation: 0,
    },
  },
 }
)
class TitleText extends React.Component{
  render(){
    return(
      <Text
        style={{color:'white',fontSize:16,flex:1,textAlign:'center',fontWeight:'100'}}>
      {this.props.text}
    </Text>
    )
  }
}
//一级隐藏导航
const statubarHeight = StatusBar.currentHeight
const StartApp = StackNavigator ({
  //Tab
  MainScreenNavigator:{
    screen:MainScreenNavigator,
    navigationOptions:{
      header:null,
    }
  },
  //前辈详情
  MasterDetail:{
    screen: MasterDetail,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='前辈详情'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          marginTop:statubarHeight,
          backgroundColor:navigation.state.params.titlecolor,
        },
        headerRight:
        <TouchableOpacity
          style={{marginRight: 20}}
          onPress={()=>{
            AsyncStorage.getItem('login',(e,data)=>{
              if(data!=null){
                let newdata = JSON.parse(data)
                if(newdata.loginstatu==true){
                  navigation.navigate('Chats',{username:navigation.state.params.user_name,uid:navigation.state.params.uid})
                }else {
                  navigation.navigate('Logins')
                }
              }else{
                navigation.navigate('Logins')
              }
            })
          }}
          >
          <Icon name='commenting' size={20} color='#fff'/>
        </TouchableOpacity>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //聊天
  Chats:{
    screen: Chats,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text={navigation.state.params.username}/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerTitleStyle:{
          alignSelf:'center',
          color:'white',
          fontSize:20,
          fontWeight:'100'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //我的前辈
  MyMaster:{
    screen: MyMaster,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='我的前辈'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerTitleStyle:{
          alignSelf:'center',
          color:'white',
          fontSize:20,
          fontWeight:'100'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //我的任务
  MyAssignments:{
    screen: MyAssignments,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='我的任务'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerTitleStyle:{
          alignSelf:'center',
          color:'white',
          fontSize:20,
          fontWeight:'100'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //财务管理
  FinancialManagement:{
    screen: FinancialManagement,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='财务管理'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerTitleStyle:{
          alignSelf:'center',
          color:'white',
          fontSize:20,
          fontWeight:'100'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //设置
  Set:{
    screen: Sets,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text={navigation.state.params.title}/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)',
        },
        headerTitleStyle:{
          color:'white',
          fontSize:20,
          fontWeight:'100'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //大课详情介绍
  BigClassDetail:{
    screen: BigClassDetail,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='课程介绍'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)',
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //我的推荐
  MyRecommend:{
    screen: MyRecommend,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='我的推荐'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)',
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //资料管理
  DataAdministration:{
    screen:DataAdministration,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='资料管理'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //聊天搜索界面
  Searchs:{
    screen:Searchs,
    navigationOptions:{
      header:null,
    }
  },
  //拜师管理
  StudentAdministrations:{
    screen:StudentAdministrations,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='拜师管理'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //学员管理
  Management:{
    screen:Management,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='学员管理'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //任务点评
  Comment:{
    screen:Comment,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='任务点评'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //推荐记录
  RecommendRecord:{
    screen:RecommendRecord,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='推荐记录'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //推荐说明
  RecommendExplain:{
    screen:RecommendExplain,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='推荐分成说明'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //推荐说明
  Withdraw:{
    screen:Withdraw,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='申请提现'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //财务总览
  FinanceOverview:{
    screen:FinanceOverview,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='财务总览'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //支付宝账户
  Account:{
    screen:Account,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='我的账户'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //收入
  Income:{
    screen:Income,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='收入总览'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //支出记录
  Expense:{
    screen:Expense,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='支出记录'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //提现记录
  WithdrawalRecord:{
    screen:WithdrawalRecord,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='提现记录'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //优惠券
  Discount:{
    screen:Discount,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='优惠券'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //修改密码
  // ChangePassword:{
  //   screen:ChangePassword,
  //   navigationOptions:({navigation}) => ({
  //       headerTitle:<TitleText text='修改密码'/>,
  //       headerStyle:{
  //         elevation: 0,
  //         height:40,
  //         backgroundColor:'rgb(25,160,148)'
  //       },
  //       headerRight:<Text/>,
  //       headerTintColor:'white',
  //       gesturesEnabled:true,
  //       gestureResponseDistance:{horizontal:50},
  //   }),
  // },
  //个人详细资料
  PersonalData:{
    screen:PersonalData,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='个人详细资料'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //资料完善度
  DataCompleteness:{
    screen:DataCompleteness,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='资料完善度'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //设置用户名称
  SetUserName:{
    screen:SetUserName,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='设置名字'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //设置手机号
  SetPhoneNumber:{
    screen:SetPhoneNumber,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='手机号'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //更改手机号
  ChangePhoneNumber:{
    screen:ChangePhoneNumber,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='更改手机号'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //新消息通知
  NewMessageNotification:{
    screen:NewMessageNotification,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='新消息通知'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //账号设置
  SetUser:{
    screen:SetUser,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='账号设置'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  // //注册页面‘
  Registers:{
    screen:Registers,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='注册'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:
        <TouchableOpacity
          style={{marginRight: 10}}
          onPress={()=>{
            Keyboard.dismiss()
            navigation.navigate('Clause')
          }}
          >
          <Text style={{color:'#fff'}}>服务条款</Text>
        </TouchableOpacity>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //登录页面‘
  Logins:{
    screen:Logins,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='登录'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //服务条款
  Clause:{
    screen:Clause,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='服务条款'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
  //找回密码
  RetrievePasswod:{
    screen:RetrievePasswod,
    navigationOptions:({navigation}) => ({
        headerTitle:<TitleText text='找回密码'/>,
        headerStyle:{
          elevation: 0,
          height:40,
          backgroundColor:'rgb(25,160,148)'
        },
        headerRight:<Text/>,
        headerTintColor:'white',
        gesturesEnabled:true,
        gestureResponseDistance:{horizontal:50},
    }),
  },
},{
    mode:'card',
    initialRouteName:'MainScreenNavigator',
}
)
const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
//store.subscribe(()=>console.log(store.getState()));
class Strat extends React.Component{
  doUpdate = info => {
    downloadUpdate(info).then(hash => {
      Alert.alert('提示', '下载完毕,是否重启应用?', [
        {text: '是', onPress: ()=>{switchVersion(hash);}},
        {text: '否',},
        {text: '下次启动时', onPress: ()=>{switchVersionLater(hash);}},
      ]);
    }).catch(err => {
      Alert.alert('提示', '更新失败.');
    });
  };
  checkUpdate = () => {
    checkUpdate(appKey).then(info => {
      if (info.expired) {
        Alert.alert('提示', '您的应用版本已更新,请前往应用商店下载新的版本', [
          {text: '确定', onPress: ()=>{info.downloadUrl && Linking.openURL(info.downloadUrl)}},
        ]);
      } else if (info.upToDate) {

      } else {
        Alert.alert('提示', '检查到新的版本'+info.name+',是否下载?\n'+ info.description, [
          {text: '是', onPress: ()=>{this.doUpdate(info)}},
          {text: '否',},
        ]);
      }
    }).catch(err => {
      //Alert.alert('提示', '更新失败.');
    });
  };
  componentWillMount(){
    WeChat.registerApp('wx1d317ff3350cdbe2');
    this.checkUpdate()
    if (isFirstTime) {
      markSuccess();
    } else if (isRolledBack) {
      Alert.alert('提示', '刚刚更新失败了,版本被回滚.');
    }
  }
  render(){
    return(
      <Provider store={store}>
        <StartApp/>
      </Provider>
    )
  }
}
AppRegistry.registerComponent('zhaoqianbei', () => Strat);
