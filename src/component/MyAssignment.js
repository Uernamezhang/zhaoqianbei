import React from 'react';
import ScrollableTabView , { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { styles } from './styles';
import { Toast } from 'antd-mobile';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  Button
} from 'react-native';
//我的任务接口
network = (dispatch) => {
  fetch('https://www.zhaoqianbei.com/api/Index/xueRenwu',{
    metchod:'GET'
  }).then((res)=>{
    return res.json()
  }).then((resdata)=>{
    dispatch({
      type:'MYASSIGNMENT_DATA',
      data:resdata.data
    })
  }).catch((e)=>{
    Toast.offline('网络错误',2)
  })
}
//提交接口
tijiao = (id,state) => {
  let formdata = new FormData()
  formdata.append('id',id)
  formdata.append('state',state)
  fetch('https://www.zhaoqianbei.com/api/Ajax/tijiao',{
    method:'POST',
    body:formdata
  }).then((res)=>{
    return res.json()
  }).then((resdata)=>{
  }).catch((e)=>{
    Toast.offline('网络错误',2)
  })
}

//前辈信息组件

class MasterData extends React.Component{
  render(){
    return(
      <View style={styles.StudyMasterBox}>
        <View style={[styles.StudyMasterHeaderBox,{height: null,paddingTop:0,paddingBottom:0,justifyContent:'space-between'}]}>
            <View style={styles.StudyMasterTextListBox}>
              <Text style={styles.StudyText}>开始时间：<Text style={{color:'#555'}}>{new Date(this.props.time*1000).getFullYear()}-{new Date(this.props.time*1000).getMonth()+1}-{new Date(this.props.time*1000).getUTCDate()} {new Date(this.props.time*1000).getHours()}:{new Date(this.props.time*1000).getMinutes()}:{new Date(this.props.time*1000).getSeconds()}</Text></Text>
            </View>
            <View style={styles.StudyMasterTextListBox}>
              <Text style={styles.StudyText}>题分:<Text style={{color:'red'}}>{this.props.tifen}′</Text></Text>
            </View>
        </View>
        <View style={styles.StudyMasterDataBox}>
          <View style={{flexDirection:'row'}}>
            <View>
              <Text style={styles.StudyMasterDataTitle}>{this.props.title}</Text>
            </View>
            <View style={styles.LableBox}>
              <Text style={{fontSize:12,color:'#fff'}}>ID:{this.props.id}</Text>
            </View>
            <View style={styles.LableBox}>
              <Text style={{fontSize:12,color:'#fff'}}>第{this.props.jieduan==1?'一':this.props.jieduan==2?'二':this.props.jieduan==3?'三':this.props.jieduan==4?'四':null}阶段</Text>
            </View>
          </View>
          <Text style={{color:"#333",fontSize:14}}>
            <Text style={styles.StudyMasterDataTextColor}>
              {this.props.yaoqiu}
            </Text>
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
      <View style={[styles.StudyMasterButtonLeftBox,this.props.style]}>
        <Button
          title={this.props.buttonTitle}
          color={this.props.buttonColor}
          disabled={this.props.ButtonDis}
          onPress={this.props.buttonOnpree}
        />
      </View>
    )
  }
}
//任务进行组件
class Mission extends React.Component{
  render(){
    return(
      <View style={styles.StudyBox}>
        <MasterData
          title={this.props.title}
          tifen={this.props.tifen}
          yaoqiu={this.props.yaoqiu}
          jieduan={this.props.jieduan}
          time={this.props.time}
          id={this.props.id}
        />
        <View style={styles.StudyMasterButtonBox}>
          <Buttons
            buttonTitle={'终止'}
            ButtonDis={false}
            buttonColor='#ffc000'
            style={{marginRight:10}}
            buttonOnpree={this.props.zhongzhibutton}
          />
          <Buttons
            buttonTitle={this.props.buttontitle}
            ButtonDis={this.props.onoff}
            buttonColor='rgb(25,160,148)'
            buttonOnpree={this.props.tijiaobutton}
          />
        </View>
      </View>
    )
  }
}
//已终止的组件
class Over extends React.Component{
  render(){
    return(
      <View style={styles.StudyBox}>
        <MasterData
          title={this.props.title}
          tifen={this.props.tifen}
          yaoqiu={this.props.yaoqiu}
          jieduan={this.props.jieduan}
          time={this.props.time}
          id={this.props.id}
        />
        <View style={styles.StudyMasterButtonBox}>
          <Buttons
            buttonTitle={'已终止'}
            ButtonDis={true}
            buttonOnpree={()=>console.log('true')}
          />
        </View>
      </View>
    )
  }
}
//已完成的组件
class Achieve extends React.Component{
  render(){
    return(
      <View style={styles.StudyBox}>
        <MasterData
          title={this.props.title}
          tifen={this.props.tifen}
          yaoqiu={this.props.yaoqiu}
          jieduan={this.props.jieduan}
          time={this.props.time}
          id={this.props.id}
        />
        <View style={styles.StudyMasterButtonBox}>
          <Buttons
            buttonTitle={'已通过'}
            ButtonDis={true}
            buttonOnpree={()=>console.log('true')}
          />
        </View>
      </View>
    )
  }
}
//未通过的组件
class NoPass extends React.Component{
  render(){
    return(
      <View style={styles.StudyBox}>
        <MasterData
          title={this.props.title}
          tifen={this.props.tifen}
          yaoqiu={this.props.yaoqiu}
          jieduan={this.props.jieduan}
          time={this.props.time}
          id={this.props.id}
        />
        <View style={styles.StudyMasterButtonBox}>
          <Buttons
            buttonTitle={'未通过'}
            ButtonDis={true}
            buttonOnpree={()=>console.log('true')}
          />
        </View>
      </View>
    )
  }
}
// 正在进行板块
class Underway extends React.Component{
  render(){
    const { data } = this.props
    return(
      <FlatList
        keyExtractor={(item,index)=>index}
        ListFooterComponent={<Text/>}
        initialNumToRender={4}
        data={data}
        renderItem={({item})=>
          item.r_state==0||item.r_state==1?
            <Mission
              title={item.biaoti}
              tifen={item.fenshu}
              yaoqiu={item.yaoqiu}
              jieduan={item.jieduan}
              time={item.r_k_time}
              id={item.r_id}
              buttontitle={item.r_state==1?'等待点评':item.r_state==0?'提交':'提交'}
              onoff={item.r_state==1?true:item.r_state==0?false:false}
              zhongzhibutton={()=>{
                tijiao(item.rw_id,-1)
                network(this.props.dispatch)
              }}
              tijiaobutton={()=>{
                tijiao(item.rw_id,1)
                network(this.props.dispatch)
              }}
            />:null
        }
      />
    )
  }
}
//已终止板块
class Termination extends React.Component{
  render(){
    const { data } = this.props
    return(
      <FlatList
        keyExtractor={(item,index)=>index}
        initialNumToRender={4}
        data={data}
        ListFooterComponent={<Text/>}
        renderItem={({item})=>
          item.r_state==-1?
            <Over
              title={item.biaoti}
              tifen={item.fenshu}
              yaoqiu={item.yaoqiu}
              jieduan={item.jieduan}
              time={item.r_k_time}
              id={item.r_id}
            />:null
        }
      />
    )
  }
}
//已完成的板块
class Accomplish extends React.Component{
  render(){
    const { data } = this.props
    return(
      <FlatList
        keyExtractor={(item,index)=>index}
        initialNumToRender={4}
        data={data}
        ListFooterComponent={<Text/>}
        renderItem={({item})=>
          item.r_state==2?
            <Achieve
              title={item.biaoti}
              tifen={item.fenshu}
              yaoqiu={item.yaoqiu}
              jieduan={item.jieduan}
              time={item.r_k_time}
              id={item.r_id}
            />:null
        }
      />
    )
  }
}
//未通过
class NotPass extends React.Component{
  render(){
    const { data } = this.props
    return(
      <FlatList
        keyExtractor={(item,index)=>index}
        initialNumToRender={4}
        data={data}
        ListFooterComponent={<Text/>}
        renderItem={({item})=>
          item.r_state==-2?
            <NoPass
              title={item.biaoti}
              tifen={item.fenshu}
              yaoqiu={item.yaoqiu}
              jieduan={item.jieduan}
              time={item.r_k_time}
              id={item.r_id}
            />:null
        }
      />
    )
  }
}
export default class MyAssignment extends React.Component{
  componentDidMount(){
    network(this.props.dispatch)
  }
  componentWillUnmount(){
    this.props.dispatch({
      type:'MYASSIGNMENT_DATA',
      data:[]
    })
  }
  render(){
    const { state } = this.props
    return(
      <ScrollableTabView
        renderTabBar={()=> < DefaultTabBar style={{height:30,borderWidth: 0}}/>}
        tabBarUnderlineStyle={{backgroundColor:'#fff'}}
        tabBarBackgroundColor='rgb(25,160,148)'
        tabBarActiveTextColor='#fff'
        tabBarInactiveTextColor='#fff'
      >
        <Underway
          tabLabel='正在进行'
          data={state.data}
          dispatch={this.props.dispatch}
        />
        <Termination
          tabLabel='已终止'
          data={state.data}
        />
        <Accomplish
          tabLabel='已完成'
          data={state.data}
        />
        <NotPass
          tabLabel='未通过'
          data={state.data}
        />
      </ScrollableTabView>
    )
  }
}
