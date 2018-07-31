//缘分模板
import React from 'react';
import { styles } from './styles';
import ListNullText from './ListNullText'
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  FlatList
} from 'react-native'
// 缘分列表
export default class LuckTemplate extends React.Component{
  render(){
    return(
      <FlatList
        ListEmptyComponent={
          <ListNullText text='抱歉，你的缘分还没到来'/>
        }
        data={this.props.Data}
        refreshing={true}
        style={{flex:1}}
        keyExtractor={(item,index)=>index}
        renderItem={({item,index}) =>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor='#333'
            onPress={()=>{
              this.props.loginstate==true?
              this.props.navigate('Chats',{username:item.user_name}):
              this.props.navigate('Logins')
            }
          }
            style={index===0?{marginTop:10}:{marginTop:0}}
          >
            <View style={styles.smallcalssListBox}>
              <View style={styles.smallclassImgBox}>
                <Image source={{uri:item.u_img_curl[0]==='h'?item.u_img_curl:`https://www.zhaoqianbei.com${item.u_img_curl}`}} style={styles.smallclassImg}/>
              </View>
              <View style={styles.smallclassTitleBox}>
                <View style={{height:20}}>
                  <Text style={[styles.smallclassTitle,{color:'#333'}]}>{item.user_name}</Text>
                </View>
                <View style={{height:20}}>
                  <Text style={styles.LuckText}>{item.province_name}-{item.city_name}-{item.u_d_edu}-{item.nation}</Text>
                </View>
                <View style={{height:20}}>
                  <Text style={styles.LuckText}>{item.u_year}</Text>
                </View>
                <View style={{height:40}}>
                  <Text style={styles.LuckFirendText} numberOfLines={2}>
                    <Text style={{color:'rgb(25,160,148)'}}>交友宣言：</Text>
                    <Text>{item.intro!==''?item.intro:<Text>我很懒的，没什么想说。</Text>}</Text>
                  </Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        }
      />
    )
  }
}
