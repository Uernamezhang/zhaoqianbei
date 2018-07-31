//拜师列表
import React from 'react';
import { styles } from './styles';
import ListNullText from './ListNullText';
import BigClassTemplate from './BigClassTemplate';
import { StackNavigator } from "react-navigation";
import { Toast } from 'antd-mobile';
import {
  Text,
  View,
  StatusBar,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
//封装拜师列表组件
export default class Msters extends React.Component {
  baishi = (qid,kid) => {
    let formdata = new FormData()
    formdata.append('qid',qid)
    formdata.append('kid',kid)
    fetch('https://www.zhaoqianbei.com/api/Ajax/baishi',{
      method:'POST',
      body:formdata
    }).then((res)=>{
      return res.json()
    }).then((resdata)=>{
      if(resdata.ret_msg==1){
        Toast.success('拜师成功，请等待老师回复',2)
      }else if(resdata.ret_msg==-1){
        Toast.offline('拜师失败',2)
      }else if(resdata.ret_msg==2){
        this.props.navigation.navigate('Logins')
      }else if(resdata.ret_msg==-2){
        Toast.fail('数据未传入',2)
      }else if(resdata.ret_msg==0){
        Toast.info('自己就是前辈',2)
      }
    }).catch((e)=>{
      Toast.offline('网络错误，请稍后再试',2)
    })
  }
  render(){
    return(
      <View style={styles.listBg}>
        <StatusBar
          backgroundColor='rgb(25,160,148)'
        />
        <FlatList
          ListHeaderComponent={
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={()=>this.props.navigate('BigClassDetail',{keid:this.props.keid})}
            >
              <BigClassTemplate
                price={this.props.prices}
                specialPrice={this.props.specialPrices}
                classes={this.props.classess}
                period={this.props.periods}
                intro={this.props.intros}
              />
            </TouchableOpacity>
          }
          ListFooterComponent={
            <Text style={{textAlign: 'center'}}>{this.props.ListFooter}</Text>
          }
          initialNumToRender={5}
          data={this.props.listData}
          refreshing={true}
          keyExtractor={(item,index)=>index}
          onEndReached={this.props.topRef}
          onEndReachedThreshold={0.3}
          renderItem={({item}) =>
            item.message?<ListNullText text={item.message}/>:
            <TouchableOpacity
              activeOpacity={0.7}
              style={{height: 100}}
              onPress={()=>this.props.navigate('MasterDetail',{titlecolor:'rgba(250,250,250,0)',qian_id:item.qian_id,user_name:item.user_name,uid:item.id})}
            >
              <View style={styles.listItem}>
                <View style={styles.listItemHeader}>
                  <View style={styles.headerBox}>
                    <Image source={{uri:item.u_img_curl[0]!=='h'?'https://www.zhaoqianbei.com'+item.u_img_curl:item.u_img_curl}} style={styles.header}/>
                    <View style={styles.names}>
                      <Text style={styles.name}>{item.user_name}</Text>
                      <Text numberOfLines={1} style={styles.experience}>{item.q_company}-{item.q_join_time}</Text>
                    </View>
                  </View>
                  <View style={styles.describeBox}>
                    <View style={styles.formerlyBox}>
                      <Text style={styles.formerlyColor}>已带{item.allStuIng}人</Text>
                      <Text style={styles.formerlyColor}>在带{item.allStuEnd}人</Text>
                      <Text style={styles.commentColor}>{item.pinjia}</Text>
                    </View>
                    <View>
                      <Text numberOfLines={2} style={styles.commentColor} allowFontScaling={true}>{item.q_intro}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.listItemButton}>
                  <Button
                    title={item.q_state==4?'拜师':item.q_state==1?'已拜师':item.q_state==2?'已结业':item.q_state==0?'等待收徒':item.q_state==-1?'中途退学':item.q_state==5?'自己就是前辈':'拜师'}
                    onPress={()=>{
                      AsyncStorage.getItem('login',(e,data)=>{
                        if(data!=null){
                          let newdata = JSON.parse(data)
                          if(newdata.loginstatu==true){
                            this.baishi(item.qian_id,item.q_k_id)
                          }else{
                            this.props.navigate('Logins')
                          }
                        }else{
                          this.props.navigate('Logins')
                        }
                      })
                    }
                  }
                    color="rgb(25,160,148)"
                    disabled={item.q_state==4?false:true}
                  />
                </View>
              </View>
            </TouchableOpacity>
          }
        />
      </View>
    )
  }
}
