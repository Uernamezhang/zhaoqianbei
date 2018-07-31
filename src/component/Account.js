//支付宝账户
import React from 'react';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView
} from 'react-native';
export default class Account extends React.Component{
  render(){
    return(
        <View>
          <Text style={{color:'red',fontSize:12,textAlign:'center'}}>支付宝账户将作为提现的唯一账户，请你务必填写正确你的账户！</Text>
          <View style={styles.AccountListBox}>
            <Text style={[styles.StudyText,{fontSize:14}]}>支付宝提现账户：
              <Text style={{color:'#777'}}>暂无账户  </Text>
              <Text
                style={{color:'#0a8cd2'}}
                onPress={()=>this.props.navigation.navigate('RecommendExplain')}
              >
                <Icon name='question-circle-o' size={14}/>相关问题
              </Text>
            </Text>
          </View>
          <View style={styles.AccountListBox}>
            <Text style={[styles.StudyText,{fontSize:14}]}>新支付宝账户：</Text>
            <TextInput
              placeholder={'请输入你的新支付宝账户'}
              placeholderTextColor='#999'
              underlineColorAndroid="transparent"
              style={{height:20,width: 200,padding: 0}}
            />
          </View>
          <View style={styles.AccountListBox}>
            <Text style={[styles.StudyText,{fontSize:14}]}>确认账户：
            </Text>
            <TextInput
              placeholder={'再次输入新支付宝账户'}
              placeholderTextColor='#999'
              underlineColorAndroid="transparent"
              style={{height:20,width: 200,padding: 0}}
            />
          </View>
          <View style={{height:40,marginTop:50,paddingLeft:20,paddingRight: 20}}>
            <Button title={'确认账户'} color='rgb(25,160,148)'/>
          </View>
          <View style={{height:40,paddingLeft:20,paddingRight: 20,marginTop: 10}}>
            <Button title='重置' color='#999' />
          </View>
        </View>
    )
  }
}
