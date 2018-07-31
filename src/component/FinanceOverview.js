// 财务总览
import React from 'react';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NoticeBar} from 'antd-mobile';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
export default class FinanceOverview extends React.Component{
  render(){
    return(
      <ScrollView>
        <NoticeBar marqueeProps={{ loop: true}}>
          收入部分并未计算推荐提成，只计算课程教授收入！
        </NoticeBar>
        <View style={[styles.StudyMasterTextListBox,{marginTop:5,marginBottom:5,marginLeft:5}]}>
          <Text style={[styles.StudyText,{fontSize:14}]}>支付宝提现账户：
            <Text style={{color:'#777'}}>暂无账户  </Text>
            <Text style={{color:'#0a8cd2'}} onPress={()=>{this.props.navigation.navigate('Account')}}>
              <Icon name='edit' size={12}/>
              添加账户
            </Text>
          </Text>
        </View>
        <View style={styles.FinanceOverviewListBox}>
          <View style={styles.StudyMasterTextListBox}>
            <Text style={[styles.StudyText,{fontSize:14}]}>小课总收入：
              <Text style={{color:'#777'}}>0元   </Text>
              <Text
                style={{color:'rgb(25,160,148)'}}
                onPress={()=>this.props.navigation.navigate('RecommendExplain')}
              >
                <Icon name='rmb' size={14} color='rgb(25,160,148)'/>收入明细
              </Text>
            </Text>
          </View>
          <View style={styles.StudyMasterTextListBox}>
            <Text style={[styles.StudyText,{fontSize:14}]}>预估收入：<Text style={{color:'#777'}}>0元</Text></Text>
          </View>
          <View style={styles.StudyMasterTextListBox}>
            <Text style={[styles.StudyText,{fontSize:14}]}>可提现收入：<Text style={{color:'#777'}}>0元</Text></Text>
          </View>
        </View>
        <View style={styles.FinanceOverviewListBox}>
          <View style={styles.StudyMasterTextListBox}>
            <Text style={[styles.StudyText,{fontSize:14}]}>平台课程总收入：
              <Text style={{color:'#777'}}>0元   </Text>
              <Text
                style={{color:'rgb(25,160,148)'}}
                onPress={()=>this.props.navigation.navigate('RecommendExplain')}
              >
                <Icon name='rmb' size={14} color='rgb(25,160,148)'/>收入明细
              </Text></Text>
          </View>
          <View style={styles.StudyMasterTextListBox}>
            <Text style={[styles.StudyText,{fontSize:14}]}>预估收入：<Text style={{color:'#777'}}>0元</Text></Text>
          </View>
          <View style={styles.StudyMasterTextListBox}>
            <Text style={[styles.StudyText,{fontSize:14}]}>可提现收入：<Text style={{color:'#777'}}>0元</Text></Text>
          </View>
        </View>
        <View style={styles.FinanceOverviewListBox}>
          <View style={styles.StudyMasterTextListBox}>
            <Text style={[styles.StudyText,{fontSize:14}]}>总支出：
              <Text style={{color:'#777'}}>0元   </Text>
              <Text
                style={{color:'rgb(25,160,148)'}}
                onPress={()=>this.props.navigation.navigate('RecommendExplain')}
              >
                <Icon name='rmb' size={14} color='rgb(25,160,148)'/>支出明细
              </Text></Text>
          </View>
          <View style={styles.StudyMasterTextListBox}>
            <Text style={[styles.StudyText,{fontSize:14}]}>小课支出：<Text style={{color:'#777'}}>0元</Text></Text>
          </View>
          <View style={styles.StudyMasterTextListBox}>
            <Text style={[styles.StudyText,{fontSize:14}]}>平台课程支出：<Text style={{color:'#777'}}>0元</Text></Text>
          </View>
        </View>
        <View style={styles.FinanceOverviewListBox}>
          <View style={styles.StudyMasterTextListBox}>
            <Text style={[styles.StudyText,{fontSize:14}]}>建议总共提现：
              <Text style={{color:'#777'}}>0元   </Text>
              <Text
                style={{color:'rgb(25,160,148)'}}
                onPress={()=>this.props.navigation.navigate('RecommendExplain')}
              >
                <Icon name='rmb' size={14} color='rgb(25,160,148)'/>贡献明细
              </Text></Text>
          </View>
        </View>
        <View style={styles.FinanceOverviewListBox}>
          <View style={styles.StudyMasterTextListBox}>
            <Text style={[styles.StudyText,{fontSize:14}]}>总提现：
              <Text style={{color:'#777'}}>0元   </Text>
              <Text
                style={{color:'rgb(25,160,148)'}}
                onPress={()=>this.props.navigation.navigate('RecommendExplain')}
              >
                <Icon name='rmb' size={14} color='rgb(25,160,148)'/>提现记录
              </Text></Text>
          </View>
          <View style={styles.StudyMasterTextListBox}>
            <Text style={[styles.StudyText,{fontSize:14}]}>小课提现：<Text style={{color:'#777'}}>0元</Text></Text>
          </View>
          <View style={styles.StudyMasterTextListBox}>
            <Text style={[styles.StudyText,{fontSize:14}]}>平台课程提现：<Text style={{color:'#777'}}>0元</Text></Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}
