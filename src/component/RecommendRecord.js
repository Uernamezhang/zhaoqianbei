//推荐记录页面
import React from 'react';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Table, Row, Rows, TableWrapper  } from 'react-native-table-component';
import { List } from 'antd-mobile';
import {
  View,
  Text,
  ScrollView,
  TouchableHighlight
} from 'react-native';
export default class RecommendRecord extends React.Component{
  render(){
    let tableHeader = ['编号','支出金额（元）','课程名称','类型','订单时间']
    let tableRowWidth = [40,100,160,70,100]
    let datas = [
      [1,99,'成渝经济区以及成都未来短期房价的趋势分析','小课','2018-05-02'],
      [1,2,3,4,5],
    ]
    return(
      <ScrollView>
        <List renderHeader={() => '推荐概况'} className="my-list">
          <List.Item extra={'U1asXS'}>推荐码：</List.Item>
          <List.Item extra={'0人'}>推荐码人数：</List.Item>
          <List.Item extra={'0元'}>小课推荐收入：</List.Item>
          <List.Item extra={'0元'}>平台课程推荐总收入：</List.Item>
          <List.Item extra={'0元'}>总收入：</List.Item>
        </List>
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
      </ScrollView>
    )
  }
}
