import React from 'react';
import ListText from './ListText';
import { Modal , List , TextareaItem , WhiteSpace , WingBlank , Toast } from 'antd-mobile';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  Button,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
const Item = List.Item
export default class Set extends React.Component{
  render(){
    const { huancunoff , yijianoff , regoff , dispatch } = this.props
    return(
      <View>
        <View style={{marginTop:10,marginBottom:10}}>
          <TouchableHighlight
            activeOpacity={0.8}
            onPress={()=>{
              Toast.info('暂未开放',2)
                // this.props.navigation.navigate('NewMessageNotification')
            }}
            underlayColor='black'
          >
            <View>
              <ListText title='新消息提醒'/>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.8}
            onPress={()=>{
              Toast.info('暂未开放',2)
              // this.props.navigation.navigate('SetUser')
            }}
            underlayColor='black'
          >
            <View>
              <ListText title='账号设置'/>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{marginBottom:10}}>
          <TouchableHighlight
            onPress={()=>{
              //清除缓存Action
              dispatch({
                type:'MODAL_TRUE'
              })
            }}
          >
            <ListText title='清除缓存'/>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={()=>{
              //意见反馈Action
              Toast.info('暂未开放',2)
              // dispatch({
              // type:'MODAL_YIJIANTRUE'
              // })
            }}
          >
            <ListText title='意见反馈'/>
          </TouchableHighlight>
        </View>
        <WhiteSpace/>
        <WhiteSpace/>
        <WhiteSpace/>
        <WhiteSpace/>
        <WingBlank>
          <Button
            onPress={()=>{
              //发送退出登录弹出层显示Action
              dispatch({
                 type:'MODAL_REGTRUE'
              })
            }}
            title='退出登录'
            color='rgb(25,160,148)'
          />
        </WingBlank>
        {/* 清除缓存弹出层 */}
        <Modal
          visible={huancunoff}
          popup={true}
          transparent={false}
          animationType={'slide-up'}
          onClose={()=>{
            //缓存Action
            dispatch({
              type:'MODAL_FALSE'
            })
          }}
          maskClosable={true}
        >
          <List renderHeader={()=>'清空缓存'}>
            <Item>
              消息缓存
            </Item>
            <Item>
              <Button
                onPress={()=>{
                  AsyncStorage.clear((e)=>{
                  e?console.log(e):null
                })
                Toast.info('清除成功',2)
                dispatch({
                  type:'MODAL_FALSE'
                })
              }}
                title='确定清除缓存'
                color='rgb(25,160,148)'
              />
            </Item>
          </List>
        </Modal>
        {/* 意见反馈弹出层 */}
        <Modal
          visible={yijianoff}
          closable={true}
          popup={true}
          transparent={true}
          onClose={()=>{this.props.dispatch({
            type:'MODAL_YIJIANFALSE'
          })}}
          maskClosable={true}
          title={<Text style={{color:'#999'}}>你的建议将是我们最大的动力</Text>}
        >
          <View style={{borderColor: '#ebebeb',borderWidth: 1,marginBottom: 10,marginTop: 10}}>
            <TextareaItem
              rows={5}
              placeholder='给点建议吧'
              count={300}
            />
          </View>
          <Button title='提交' onPress={()=>{alert(1)}}/>
        </Modal>
        {/* 退出登录弹出层 */}
        <Modal
          visible={regoff}
          popup={true}
          transparent={false}
          animationType={'slide-up'}
          onClose={()=>{
            //发送弹出层消失Action
            this.props.dispatch({
              type:'MODAL_REGFALSE'
            })}}
          maskClosable={true}
          title={<Text>你确定要退出登录吗？</Text>}
        >
          <List renderHeader={()=>'确定要退出登录吗？'}>
            <List.Item>
              <TouchableOpacity
                onPress={()=>{
                  this.props.navigation.goBack();
                  this.props.navigation.navigate('Logins');
                  //获取到之前登录状态的信息
                  AsyncStorage.getItem('login',(e,data)=>{
                    let newdata = JSON.parse(data)
                    newdata.loginstatu = false
                    let newsetdata = JSON.stringify(newdata)
                    //获取到之前登录状态然后更改在存储
                    AsyncStorage.setItem('login',newsetdata,(e)=>{
                      e?console.log(e):null
                    })
                  })
                  //发送弹出层消失Action
                  dispatch({
                    type:'MODAL_REGFALSE'
                  })
                  //登录状态
                  this.props.dispatch({
                    type:'LOGINSTATU_FALSE'
                  })
                }}
              >
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontSize: 16,color:'red'}}>确定</Text>
                </View>
              </TouchableOpacity>
            </List.Item>
          </List>
          <List>
            <List.Item>
              <TouchableOpacity
                onPress={()=>{
                  this.props.dispatch({
                    type:'MODAL_REGFALSE'
                  })
                }}
              >
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontSize: 16,color:'rgb(25,160,148)'}}>取消</Text>
                </View>
              </TouchableOpacity>
            </List.Item>
          </List>
        </Modal>
      </View>
    )
  }
}
