import React from 'react';
import { styles } from './styles';
import ListNullText from './ListNullText';
import SmallClassModal from './SmallClassModal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Toast } from 'antd-mobile';
import {
  View,
  Text,
  Image,
  TouchableOpacity ,
  FlatList,
  Button
} from 'react-native'
export default class SmallClassTemplate extends React.Component{
  onoff = () => {
    this.props.dispatch({
      type:'MODAL_ONOFF_FALSE'
    })
  }
  //获取时间戳
  newdate = (time) => {
    let date = new Date(time*1000)
    let month = date.getMonth()+1;
    let day = date.getDate();
    let hours = date.getHours();
    let min = date.getMinutes();
    let week = date.getDay();
    let weekday = [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六',
    ]
    return `${month}-${day} ${hours}:${min} ${weekday[week]}`
  }
  render(){
    const { onOff } = this.props
    return(
      <View style={{flex:1}}>
        {/* 弹出层 */}
        <SmallClassModal
          onoff={onOff}
          onFunction={this.onoff}
        />
        <FlatList
          ListEmptyComponent={
            <ListNullText text='暂无小课，看看隔壁吧→'/>
          }
          data={this.props.Data}
          style={{flex:1}}
          keyExtractor={(item,index)=>index}
          renderItem={({item,index}) =>
            <TouchableOpacity
              activeOpacity={1}
              //暂未开放，如果开放清除下面dispatch注释
              onPress={()=>{
                Toast.info('暂未开放',2)
                //this.props.dispatch({
                //  type:'MODAL_ONOFF_TRUE'
                //})
              }}
              style={index===0?{marginTop:10}:{marginTop:0}}
            >
              <View style={styles.smallcalssListBox}>
                <View style={styles.smallclassImgBox}>
                  <Image source={{uri:item.u_img_curl[0]==='h'?item.u_img_curl:`https://www.zhaoqianbei.com${item.u_img_curl}`}} style={styles.smallclassImg}/>
                </View>
                <View style={styles.smallclassTitleBox}>
                  <View style={{height:20}}>
                    <Text numberOfLines={1} style={[styles.smallclassTitle,{color:'#333'}]}>{item.name}</Text>
                  </View>
                  <View style={{height:20}}>
                    <Text style={[styles.smallclassTitle,{fontSize:14}]}>{this.newdate(item.time)}</Text>
                  </View>
                  <View style={{height:20,flexDirection:'row',alignItems:'center'}}>
                    <Icon name='map-marker' size={12} color='#999'/>
                    <Text style={[styles.smallclassTitle,{fontSize:12}]}>  {item.address}</Text>
                  </View>
                  <View style={{height:20,marginTop:10,flexDirection:'row',alignItems:'center'}}>
                    <Text style={[styles.smallcalssPrice,{marginRight:10,width:100}]}>{item.discountPrice}元</Text>
                    <Button title='购买' onPress={()=>Toast.info('暂未开放',)} color="rgb(25,160,148)"/>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          }
        />
      </View>
            )
          }
}
