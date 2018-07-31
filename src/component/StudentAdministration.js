import React from 'react';
import { styles } from './styles';
import { Toast } from 'antd-mobile';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Button,
  Image
} from 'react-native';

//按钮组件
class Buttons extends React.Component{
  render(){
    return(
      <View style={[styles.StudyMasterButtonLeftBox,this.props.stylemargin]}>
        <Button
          title={this.props.buttonTitle}
          color={this.props.buttonColor}
          disabled={this.props.ButtonDis}
          onPress={this.props.clickbutton}
        />
      </View>
    )
  }
}
export default class StudentAdministration extends React.Component{
  shoutu = (sid,states) => {
    let formdata = new FormData()
    formdata.append('sid',sid)
    formdata.append('state',states)
    fetch('https://www.zhaoqianbei.com/api/Ajax/shoutu',{
      method:'POST',
      body:formdata
    }).then((res)=>{
      return res.json()
    }).then((resdata)=>{
      if(resdata.ret_msg==1){
        Toast.info('操作成功',2)
        this.baishi()
      }else if(resdata.ret_msg==0){
        Toast.info('操作失败',2)
      }else if(resdata.ret_msg==-1){
        Toast.info('无权限',2)
      }else if(resdata.ret_msg==-2){
        Toast.info('数据错误',2)
      }
    }).catch((e)=>{
      Toast.info('网络错误，请稍后再试',2)
    })
  }
  baishi = () => {
    fetch('https://www.zhaoqianbei.com/api/index/baishi',{
      metchod:'GET'
    }).then((res)=>{
      return res.json()
    }).then((resdata)=>{

      this.props.dispatch({
        type:'STUDENT_DATA',
        data:resdata.data
      })
    }).catch((e)=>{
      this.props.dispatch({
        type:'STUDENT_DATA',
        data:[]
      })
    })
  }
  componentDidMount(){
    this.baishi()
  }
  componentWillUnmount(){
    this.props.dispatch({
      type:'STUDENT_DATA',
      data:[]
    })
  }
  render(){
    const { state } = this.props
    return(
      <FlatList
        data={state.data}
        keyExtractor={(item,index)=>index}
        initialNumToRender={4}
        renderItem={({item})=>
          <View style={styles.StudyBox}>
            {/* <Text style={styles.StudyTextTitle}>{item.s_state==0?'申请的学员':item.s_state==1&item.jiaokuan==0?'待付款':item.s_state==1&item.jiaokuan==1?'成功收徒':item.s_state==2?'已结业':'申请的学员'}</Text> */}
            <View style={styles.StudyMasterBox}>
              <View style={[styles.StudyMasterHeaderBox,{height: null,paddingTop: 0,paddingBottom: 0}]}>
                <View style={{width:40,height:40}}>
                  <Image source={{uri:item.u_img_curl!=null?item.u_img_curl[0]=='h'?item.u_img_curl:`https://www.zhaoqianbei.com${item.u_img_curl}`:'https://www.zhaoqianbei.com/main/Public/img/userDefault.png'}} style={{width:40,height:40,borderRadius:40}}/>
                </View>
                <View style={[styles.StudyMasterTextBox,{height: null}]}>
                  <View style={{height:25,flexDirection: 'row',justifyContent:'space-between',alignItems: 'center'}}>
                    <Text style={{fontSize:18,color:'#333'}}>{item.user_name}</Text>
                    <View>
                      <Text style={{fontSize: 14,color: 'rgb(25,160,148)'}}>{item.s_state==0?'申请的学员':item.s_state==1&item.jiaokuan==0?'待付款':item.s_state==1&item.jiaokuan==1?'成功收徒':item.s_state==2?'已结业':'申请的学员'}</Text>
                    </View>
                  </View>
                  <View style={styles.StudyMasterTextListBox}>
                    <Text style={styles.StudyText}>拜师时间：<Text style={{color:'#555'}}>{new Date(item.baishi_time*1000).getFullYear()}-{new Date(item.baishi_time*1000).getMonth()+1}-{new Date(item.baishi_time*1000).getDay()}</Text></Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.StudyMasterButtonBox}>
              {
                item.s_state==2?null:
                <Buttons
                  buttonTitle={item.s_state==0?'收徒':item.s_state==1&item.jiaokuan==0?'等待付款':item.s_state==1&item.jiaokuan==1?'已付款':'收徒'}
                  ButtonDis={item.s_state==0?false:item.s_state==1&item.jiaokuan==0?true:item.s_state==1&item.jiaokuan==1?true:false}
                  buttonColor='rgb(25,160,148)'
                  stylemargin={{marginRight:10}}
                  clickbutton={
                    item.s_state==0?
                    ()=>this.shoutu(item.s_id,1):
                    item.s_state==1&item.jiaokuan==0?
                    ()=>console.log('true'):
                    item.s_state==1&item.jiaokuan==1?
                    ()=>console.log('true'):
                    ()=>this.shoutu(item.s_id,1)
                  }
                />
              }
              <Buttons
                buttonTitle={item.s_state==0?'不收':item.s_state==1&item.jiaokuan==0?'不收':item.s_state==1&item.jiaokuan==1?'成功收徒':item.s_state==2?'已结业':'不收'}
                ButtonDis={item.s_state==0?false:item.s_state==1&item.jiaokuan==0?false:item.s_state==1&item.jiaokuan==1?true:item.s_state==2?true:false}
                clickbutton={
                  item.s_state==0?
                  ()=>this.shoutu(item.s_id,-2):
                  item.s_state==1&item.jiaokuan==0?
                  ()=>this.shoutu(item.s_id,-2):
                  item.s_state==1&item.jiaokuan==1?
                  ()=>console.log('true'):
                  item.s_state==2?
                  ()=>console.log('true'):
                  ()=>this.shoutu(item.s_id,-2)
                }
              />
            </View>
          </View>
        }
      />
    )
  }
}
