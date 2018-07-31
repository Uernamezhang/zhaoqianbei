import React from 'react';
import ScrollableTabView , { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { styles } from './styles';
import {
  View,
  Text,
  ScrollView,
  Image,
  Button
} from 'react-native';
//学员组件
class DiscipleData extends React.Component{
  render(){
    return(
      <View style={styles.StudyBox}>
        <View style={styles.StudyMasterBox}>
          <View style={styles.StudyMasterHeaderBox}>
            <View style={{width:85,height:85}}>
              <Image source={require('../imge/skrillex.jpg')} style={{width:85,height:85,borderRadius:85}}/>
            </View>
            <View style={[styles.StudyMasterTextBox,{height:100}]}>
              <View style={{height:25,flexDirection:'row'}}>
                <Text style={{fontSize:18,color:'#333',height:25}}>派大星</Text>
                <View style={styles.ManagementLableBox}>
                  <Text style={styles.ManagementLableTitle}>web前端</Text>
                </View>
                <View style={styles.ManagementLableBox}>
                  <Text style={styles.ManagementLableTitle}>2月前</Text>
                </View>
              </View>
              <View style={styles.StudyMasterTextListBox}>
                <Text style={styles.StudyText}>QQ：<Text style={{color:'#0a8cd2'}}>673579460</Text></Text>
              </View>
              <View style={styles.StudyMasterTextListBox}>
                <Text style={styles.StudyText}>手机：<Text style={{color:'#555'}}>18401214029</Text></Text>
              </View>
              <View style={styles.StudyMasterTextListBox}>
                <Text style={styles.StudyText}>拜师时间：<Text style={{color:'#555'}}> 2018年05月09日 16:05:30</Text></Text>
              </View>
              <View style={styles.StudyMasterTextListBox}>
                <Text style={styles.StudyText}>收徒：<Text style={{color:'#555'}}>2018-03-27</Text></Text>
              </View>
              <View style={styles.StudyMasterTextListBox}>
                <Text style={styles.StudyText}>阶段得分：<Text style={{color:'red'}}>5</Text></Text>
              </View>
            </View>
          </View>
          <View style={styles.StudyMasterDataBox}>
            <Text style={styles.StudyMasterDataTitle}>基本资料</Text>
            <Text style={styles.StudyMasterDataText}>年龄：<Text style={styles.StudyMasterDataTextColor}>25岁</Text></Text>
            <Text style={styles.StudyMasterDataText}>性别：<Text style={styles.StudyMasterDataTextColor}>男 </Text></Text>
            <Text style={styles.StudyMasterDataText}>地址：<Text style={styles.StudyMasterDataTextColor}>北京 - 北京市 - 西城区</Text></Text>
            <Text style={[styles.StudyMasterDataTitle,{marginTop:10}]}>教育及工作</Text>
            <Text style={styles.StudyMasterDataText}>学时：<Text style={styles.StudyMasterDataTextColor}>1 个月</Text></Text>
            <Text style={styles.StudyMasterDataText}>之前学习方式：<Text style={styles.StudyMasterDataTextColor}>自学</Text></Text>
            <Text style={styles.StudyMasterDataText}>学历：<Text style={styles.StudyMasterDataTextColor}>专科</Text></Text>
            <Text style={styles.StudyMasterDataText}>专业：<Text style={styles.StudyMasterDataTextColor}>建筑工程</Text></Text>
            <Text style={styles.StudyMasterDataText}>之前工作：<Text style={styles.StudyMasterDataTextColor}>建筑工程</Text></Text>
            <Text style={styles.StudyMasterDataText}>工作时间：<Text style={styles.StudyMasterDataTextColor}>1个月</Text></Text>
          </View>
          <View style={styles.StudyMasterButtonBox}>
            <View style={styles.StudyMasterButtonLeftBox}>
            <Button
              title='管理任务'
              color='rgb(25,160,148)'
            />
          </View>
        </View>
      </View>
    </View>
    )
  }
}
//第一阶段
class OnPhases extends React.Component{
  render(){
    return(
      <ScrollView>
        <DiscipleData/>
      </ScrollView>
    )
  }
}
export default class Management extends React.Component{
  render(){
    return(
      <ScrollableTabView
        renderTabBar={()=> < DefaultTabBar style={{height:30,borderWidth: 0}}/>}
        tabBarUnderlineStyle={{backgroundColor:'#fff'}}
        tabBarBackgroundColor='rgb(25,160,148)'
        tabBarActiveTextColor='#fff'
        tabBarInactiveTextColor='#fff'
        >
          <OnPhases tabLabel='第一阶段'/>
          <OnPhases tabLabel='第二阶段'/>
          <OnPhases tabLabel='第三阶段'/>
          <OnPhases tabLabel='第四阶段'/>
          <OnPhases tabLabel='结业'/>
      </ScrollableTabView>
    )
  }
}
