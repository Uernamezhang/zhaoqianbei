//优惠券
import React from 'react';
import { styles } from './styles';
import { Table, Row, Rows, TableWrapper  } from 'react-native-table-component';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
export default class Discount extends React.Component{
  render(){
    let tableHeader = ['编号','支出金额（元）','课程名称','类型','订单时间']
    let tableRowWidth = [40,100,160,70,100]
    let datas = [
      [1,99,'成渝经济区以及成都未来短期房价的趋势分析','小课','2018-05-02'],
      [1,2,3,4,5],
    ]
    return(
      <View>
        <Text style={{color:'red',fontSize:12,textAlign:'center'}}>感谢您对平台的贡献，我们会努力的！</Text>
        <Text style={styles.StudyTextTitle}>我的优惠券</Text>
        <View style={styles.FinanceOverviewListBox}>
          <View style={styles.StudyMasterTextListBox}>
            <Text style={[styles.StudyText,{fontSize:14}]}>优惠券：
              <Text style={{color:'rgb(25,160,148)'}}>0 </Text>
              张
            </Text>
          </View>
        </View>
        <Text style={styles.StudyTextTitle}>有效优惠券</Text>
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
