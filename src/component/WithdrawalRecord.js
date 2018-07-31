import React from 'react';
import { styles } from './styles';
import { Table, Row, Rows, TableWrapper  } from 'react-native-table-component';
import { NoticeBar } from 'antd-mobile';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
export default class WithdrawalRecord extends React.Component{
  render(){
    let tableHeader = ['编号','支出金额（元）','课程名称','类型','订单时间']
    let tableRowWidth = [40,100,160,70,100]
    let datas = [
      [1,99,'成渝经济区以及成都未来短期房价的趋势分析','小课','2018-05-02'],
      [1,2,3,4,5],
    ]
    return(
      <View>
        <NoticeBar marqueeProps={{ loop: true }}>
          收入部分并未计算推荐提成，只计算小课和平台课程收入！
        </NoticeBar>
        <Text style={styles.StudyTextTitle}>提现记录</Text>
        <View style={styles.FinanceOverviewListBox}>
          <View style={styles.StudyMasterTextListBox}>
            <Text style={[styles.StudyText,{fontSize:16}]}>总提现：
              <Text style={{color:'red'}}>0元</Text>
            </Text>
          </View>
          <View style={[styles.StudyMasterTextListBox,{marginTop:5}]}>
            <Text style={[styles.StudyText,{fontSize:14}]}>小课提现：
              <Text style={{color:'#777'}}>0元</Text>
            </Text>
          </View>
          <View style={[styles.StudyMasterTextListBox,{marginTop:5}]}>
            <Text style={[styles.StudyText,{fontSize:14}]}>课程提现：
              <Text style={{color:'#777'}}>0元</Text>
            </Text>
          </View>
          <View style={[styles.StudyMasterTextListBox,{marginTop:5}]}>
            <Text style={[styles.StudyText,{fontSize:14}]}>推荐提现：
              <Text style={{color:'#777'}}>0元</Text>
            </Text>
          </View>
          <View style={[styles.StudyMasterTextListBox,{marginTop:5}]}>
            <Text style={[styles.StudyText,{fontSize:14}]}>贡献提现：
              <Text style={{color:'#777'}}>0元</Text>
            </Text>
          </View>
        </View>
        <Text style={styles.StudyTextTitle}>推荐详情</Text>
        <View style={styles.FinanceOverviewListBox}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <Table>
              <Row data={tableHeader} textStyle={{textAlign: 'center',fontSize:14,fontWeight: '500'}} widthArr={tableRowWidth}></Row>
              <Rows data={datas} textStyle={{textAlign: 'center',margin:6}} widthArr={tableRowWidth}></Rows>
            </Table>
          </ScrollView>
        </View>
      </View>
    )
  }
}
