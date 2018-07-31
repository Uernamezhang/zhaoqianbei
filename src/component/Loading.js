import React from 'react';
import { ActivityIndicator } from 'antd-mobile';
import {
  View,
  Image,
  Text,
  StatusBar
} from 'react-native';
export default class Loading extends React.Component{

  render(){
    const { text } = this.props
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator size='large' color="rgb(25,160,148)"/>
        <Text style={{fontSize:14,color:'#999'}}>
          console.log('正在加载中')
        </Text>
        <StatusBar
           backgroundColor='rgb(25,160,148)'
        />
      </View>
    )
  }
}
