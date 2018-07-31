import React from 'react';
import ScrollableTabView , { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { styles } from './styles';
import {
  View,
  Image,
  Text,
  ScrollView,
  Button
} from 'react-native';
//学员组件
class DiscipleData extends React.Component{
  render(){
    return(
      <View style={styles.StudyMasterBox}>
        <View style={styles.StudyMasterHeaderBox}>
          <View style={{height:85,width:85}}>
            <Image source={require('../imge/skrillex.jpg')} style={{height:85,width:85,borderRadius:85}}/>
          </View>
          <View style={styles.StudyMasterTextBox}>
            <View style={{height:25}}>
              <Text style={{fontSize:18,color:'#333',height:25}}>派大星</Text>
            </View>
            <View style={styles.StudyMasterTextListBox}>
              <Text style={styles.StudyText}>拜师时间：<Text style={{color:'#555'}}>2018-03-27 17:46:23</Text></Text>
            </View>
            <View style={styles.StudyMasterTextListBox}>
              <Text style={styles.StudyText}>确认时间：<Text style={{color:'#555'}}>2018-03-27 17:49:52</Text></Text>
            </View>
            <View style={styles.StudyMasterTextListBox}>
              <Text style={styles.StudyText}>开始时间：<Text style={{color:'#555'}}>2018-05-04 11:25:21 </Text></Text>
            </View>
            <View style={styles.StudyMasterTextListBox}>
              <Text style={styles.StudyText}>完成时间：<Text style={{color:'#555'}}>2018-05-09 15:17:01</Text></Text>
            </View>
            <View style={styles.StudyMasterTextListBox}>
              <Text style={styles.StudyText}>完成周期：<Text style={{color:'red'}}>123</Text>小时</Text>
            </View>
          </View>
        </View>
        <View style={styles.StudyMasterDataBox}>
          <View style={{flexDirection:'row'}}>
            <View>
              <Text style={styles.StudyMasterDataTitle}>写一个PC端页面</Text>
            </View>
            <View style={styles.LableBox}>
              <Text style={{fontSize:12,color:'#fff'}}>ID:27</Text>
            </View>
            <View style={styles.LableBox}>
              <Text style={{fontSize:12,color:'#fff'}}>web前端</Text>
            </View>
            <View style={styles.LableBox}>
              <Text style={{fontSize:12,color:'#fff'}}>第二阶段</Text>
            </View>
            <Text style={{fontSize:12,marginLeft:3,color:'red'}}>题分：5</Text>
          </View>
          <Text style={[styles.StudyMasterDataTextColor,{fontSize:12}]}>
            1、页面至少包括上中下三大部分，中间包括左中右三部分。可再bootstrap中文官网案例http://www.youzhan.org/中
            直接参考某个案例和官网大体布局。目前建议用：http://www.golaravel.com/，不用写的每个字都一样，但要有那个
            感觉！群里有个getcolor小工具，可以方便的进行屏幕取色。
          </Text>
        </View>
      </View>
    )
  }
}
//Button按钮组件
class Buttons extends React.Component{
  render(){
    return(
      <View style={[styles.StudyMasterButtonLeftBox,{marginRight:10}]}>
        <Button title={this.props.buttonTitle} color={this.props.buttonColor} disabled={this.props.ButtonDis}/>
      </View>
    )
  }
}
//点评单个组件
class AwaitCommentList extends React.Component{
  render(){
    return(
      <View style={styles.StudyBox}>
        <DiscipleData/>
        <View style={styles.StudyMasterButtonBox}>
          <Buttons
            buttonColor='rgb(25,160,148)'
            buttonTitle='通过'
          />
          <Buttons
            buttonColor='red'
            buttonTitle='不通过'
          />
        </View>
      </View>
    )
  }
}
//通过组件
class AlreadyPass extends React.Component{
  render(){
    return(
      <View style={styles.StudyBox}>
        <DiscipleData/>
      </View>
    )
  }
}
//未通过组件
class NoPass extends React.Component{
  render(){
    return(
      <View style={styles.StudyBox}>
        <DiscipleData/>
        <View style={styles.StudyMasterButtonBox}>
          <Buttons
            buttonTitle='未通过'
            ButtonDis={true}
          />
        </View>
      </View>
    )
  }
}
//等待点评
class AwaitComment extends React.Component{
  render(){
    return(
      <ScrollView>
        <AwaitCommentList/>
      </ScrollView>
    )
  }
}
//已通过
class Pass extends React.Component{
  render(){
    return(
      <ScrollView>
        <AlreadyPass/>
        <AlreadyPass/>
      </ScrollView>
    )
  }
}
//未通过
class NotPass extends React.Component{
  render(){
    return(
      <ScrollView>
        <NoPass/>
      </ScrollView>
    )
  }
}
export default class Comment extends React.Component{
  render(){
    return(
      <ScrollableTabView
        renderTabBar={()=> < DefaultTabBar style={{height:30}}/>}
        tabBarUnderlineStyle={{backgroundColor:'#fff'}}
        tabBarBackgroundColor='rgb(25,160,148)'
        tabBarActiveTextColor='#fff'
        tabBarInactiveTextColor='#fff'
      >
        <AwaitComment tabLabel='等待点评'/>
        <Pass tabLabel='已通过'/>
        <NotPass tabLabel='未通过'/>
      </ScrollableTabView>
    )
  }
}
