//资料完善度
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import { WhiteSpace  , List  } from 'antd-mobile';
import {
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
export default class DataCompleteness extends React.Component{
  render(){
    const { data } = this.props.navigation.state.params
    return(
      <ScrollView>
        <WhiteSpace/>
        <WhiteSpace/>
        {/*
          onClick={()=>this.props.navigation.navigate('SetUserName')}
          onClick={()=>this.props.navigation.navigate('SetPhoneNumber')}
        */}
        <List.Item
          extra={
            <Image
              style={{height: 40,width: 40}}
              source={{uri:data.data.u_img_curl!=null?data.data.u_img_curl[0]==='h'?data.data.u_img_curl:`https://www.zhaoqianbei.com/${data.data.u_img_curl}`:'https://www.zhaoqianbei.com/main/Public/img/userDefault.png'}}
            />
          }
        >
          头像
        </List.Item>
        <List.Item
          extra={data.data.t_code}
        >
          推荐码
        </List.Item>
        <List.Item
          extra={data.data.user_name}
        >
          用户名
        </List.Item>

        {/* <List.Item
          extra='张程'
          >
          真实姓名
        </List.Item> */}
        <WhiteSpace/>
        <WhiteSpace/>
        {/* <List.Item
          extra='男'
          >
          性别
        </List.Item> */}
        <List.Item
          extra={data.data.phone}
        >
          手机号
        </List.Item>
        {/* <List.Item
          extra='1992-05-29'
          >
          出生日期
        </List.Item> */}
        {/* <List.Item
          extra='52755546'
          >
          QQ
          </List.Item>
          <WhiteSpace/>
          <WhiteSpace/>
          <List.Item
          extra='本科'
          >
          最高学历
          </List.Item>
          <List.Item
          extra='西南大学'
          >
          学校
          </List.Item>
          <List.Item
          extra='建筑工程'
          >
          专业
          </List.Item>
          <List.Item
          extra='20116-11-20'
          >
          毕业时间
          </List.Item>
          <WhiteSpace/>
        <WhiteSpace/> */}
      </ScrollView>
    )
  }
}
