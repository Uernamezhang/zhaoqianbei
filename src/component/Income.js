// 收入总览
import React from 'react';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Table, Row, Rows, TableWrapper  } from 'react-native-table-component';
import { NoticeBar } from 'antd-mobile';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
export default class Income extends React.Component{
  render(){
    let tableHeader = ['编号','用户名','平台课程收入（元）','收入时间','状态','小课收入（元）','收入时间','状态']
    let tableRowWidth = [40,60,120,70,40,100,60,40]
    let datas = [
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8],
    ]
    return(
      <View>
        <NoticeBar marqueeProps={{ loop:true}}>
          收入部分并未计算推荐提成，只计算小课和平台课程收入！
        </NoticeBar>
        <Text style={styles.StudyTextTitle}>收入详细情况</Text>
        <View style={styles.FinanceOverviewListBox}>
          <View style={styles.StudyMasterTextListBox}>
            <Text style={[styles.StudyText,{fontSize:14}]}>小课总收入：
              <Text style={{color:'#777'}}>0元   </Text>
              <Text
                style={{color:'rgb(25,160,148)'}}
                onPress={()=>this.props.navigation.navigate('RecommendExplain')}
              >
                <Icon name='rmb' size={14} color='rgb(25,160,148)'/>申请提现
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
                <Icon name='rmb' size={14} color='rgb(25,160,148)'/>申请提现
              </Text>
            </Text>
          </View>
          <View style={styles.StudyMasterTextListBox}>
            <Text style={[styles.StudyText,{fontSize:14}]}>预估收入：<Text style={{color:'#777'}}>0元</Text></Text>
          </View>
          <View style={styles.StudyMasterTextListBox}>
            <Text style={[styles.StudyText,{fontSize:14}]}>可提现收入<Text style={{color:'#777'}}>0元</Text></Text>
          </View>
        </View>
        <Text style={styles.StudyTextTitle}>收入详情</Text>
        <View style={styles.FinanceOverviewListBox}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            >
            <Table>
              <Row data={tableHeader} textStyle={{textAlign: 'center',fontSize:14,fontWeight: '500'}} widthArr={tableRowWidth}></Row>
              <Rows data={datas} textStyle={{textAlign: 'center',margin: 6}} widthArr={tableRowWidth}></Rows>
            </Table>
          </ScrollView>
        </View>
      </View>
    )
  }
}
