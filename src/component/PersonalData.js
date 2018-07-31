//个人详细资料
import React from 'react';
import { styles } from './styles';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
//封装信息组件
class MasterText extends React.Component{
  render(){
    return(
      <View style={styles.MasterTitleRowBox}>
        <Text style={styles.MasterTitleKey}>{this.props.name}</Text>
        <Text style={styles.MasterResumekeys}>{this.props.namekey}</Text>
      </View>
    )
  }
}
export default class PersonalData extends React.Component{
  render(){
    return(
      <ScrollView>
        <Text style={[styles.MasterTitle,{marginTop: 10}]}>个人基本信息</Text>
        <View style={styles.MasterTitleBox}>
          <MasterText name='审核状态：' namekey='现在你已经是前辈了'/>
          <MasterText name='提交时间：' namekey='2018年03月30日 23:03:11 星期五'/>
          <MasterText name='真实姓名：' namekey='张程'/>
          <MasterText name='性别：' namekey='张程'/>
          <MasterText name='年龄：' namekey='男'/>
          <MasterText name='手机：' namekey='18281862597'/>
          <MasterText name='QQ：' namekey='52755546'/>
          <MasterText name='地址：' namekey='成都市'/>
        </View>
        <Text style={styles.MasterTitle}>教育及技术</Text>
        <View style={styles.MasterTitleBox}>
          <MasterText name='大学：' namekey='现在你已经是前辈了'/>
          <MasterText name='学历：' namekey='专科'/>
          <MasterText name='专业：' namekey='建筑工程技术'/>
        </View>
        <Text style={styles.MasterTitle}>空闲时间</Text>
        <View style={styles.MasterTitleBox}>
          <MasterText name='星期一：' namekey='晚上'/>
          <MasterText name='星期二：' namekey='晚上'/>
          <MasterText name='星期三：' namekey='晚上'/>
          <MasterText name='星期四：' namekey='晚上'/>
          <MasterText name='星期五：' namekey='晚上'/>
          <MasterText name='星期六：' namekey='晚上'/>
          <MasterText name='星期日：' namekey='晚上'/>
        </View>
      </ScrollView>
    )
  }
}
