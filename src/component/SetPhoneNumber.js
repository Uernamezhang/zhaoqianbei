//设置手机号码
import React from 'react';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
export class SetPhoneNumber extends React.Component{
  render(){
    return(
      <View>
        <View style={{alignItems: 'center'}}>
          <Icon name='mobile-phone' size={120} color='#999'/>
          <Text style={{fontSize:16,color: '#000' }}>你的手机号：18281862597</Text>
        </View>
        <View style={styles.SetUserNameButton}>
          <View style={{height: 40,flex:0.8}}>
            <Button title='更换手机号' color='rgb(25,160,148)' onPress={()=>{this.props.navigation.navigate('ChangePhoneNumber')}}/>
          </View>
        </View>
      </View>
    )
  }
}
export class ChangePhoneNumber extends React.Component{
  render(){
    return(
      <View>
        <View style={styles.SetUserNameInputBox}>
          <Text style={{color:'#000',marginRight: 10,fontSize: 14}}>手机号</Text>
          <TextInput
            style={[styles.SetUserNameInput,{fontSize: 14}]}
            underlineColorAndroid="transparent"
            placeholder='请输入手机号码'
            placeholderTextColor='#999'
            keyboardType='numeric'
          />
          <View style={{height: 30}}>
            <Button title={'获取验证码'} color='rgb(25,160,148)' onPress={()=>{alert(1)}}/>
          </View>
        </View>
        <View style={styles.SetUserNameInputBox}>
          <Text style={{color:'#000',marginRight: 10,fontSize: 14}}>验证码</Text>
          <TextInput
            style={[styles.SetUserNameInput,{fontSize: 14}]}
            underlineColorAndroid="transparent"
            placeholder='请输入收到的手机短信验证码'
            placeholderTextColor='#999'
            keyboardType='numeric'
          />
        </View>
        <View style={styles.SetUserNameButton}>
          <View style={{height: 40,flex:0.8}}>
            <Button title='提交' color='rgb(25,160,148)' onPress={()=>{alert(1)}}/>
          </View>
        </View>
      </View>
    )
  }
}
