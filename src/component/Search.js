// 搜索页面
import React from 'react';
import { styles } from './styles';
import {
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
  TextInput,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';
export default class Search extends React.Component{
  componentWillUnmount(){
    this.props.dispatch({
      type:'SEARCH_DATA',
      data:[]
    })
  }
  render(){
    const { state } = this.props
    console.log(state)
    return(
      <View style={styles.searchBox}>
        <StatusBar
          backgroundColor='white'
          barStyle='dark-content'
          animated={true}
        />
        <View style={styles.searchLine}>
          <View style={styles.search}>
            <Image
              source={require('../imge/icon-search.png')}
            />
            <TextInput
              style={styles.searchInput}
              autoFocus={true}
              placeholderTextColor='#858585'
              placeholder='搜索'
              underlineColorAndroid="transparent"
              onChangeText={(event)=>{
                //每次搜素前先清空列表数据
                state.data.splice(0,state.data.length);
                this.props.dispatch({
                  type:'SEARCH_DATA',
                  data:state.data
                })
                AsyncStorage.getItem('chatlist',(e,data)=>{
                  if(data!=null){
                    let jsondata = JSON.parse(data)
                    jsondata.map((item)=>{
                      //遍历符合查找的内容循环出来然后PUSH到数组
                      if(new RegExp(event).test(item.user_name)&event!=''){
                        state.data.push(item)
                        this.props.dispatch({
                          type:'SEARCH_DATA',
                          data:state.data
                        })
                      }
                    })
                  }
                })

              }}
            />
          </View>
          <TouchableOpacity
            onPress={()=>{
              this.props.navigation.goBack()
            }}
            style={styles.canceBox}>
            <Text style={styles.canceFont}>取消</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={state.data}
          keyExtractor={(item,index)=>index}
          style={{flexDirection:'column'}}
          initialNumToRender={10}
          renderItem={({item})=>
            <TouchableHighlight
              activeOpacity={0.8}
              underlayColor='#ebebeb'
              onPress={()=>this.props.navigation.navigate('Chats',{username:item.user_name,uid:item.u_id})}
            >
              <View style={styles.listMessage}>
                <Image
                  source={{uri:item.u_img_curl!=null?item.u_img_curl[0]=='h'?item.u_img_curl:`https://www.zhaoqianbei.com${item.u_img_curl}`:'https://www.zhaoqianbei.com/main/Public/img/userDefault.png'}}
                  style={styles.messageHeade}
                />
                <View style={styles.messageTextBox}>
                  <Text style={[styles.messageText,{fontSize:18,color:'black'}]}>{item.user_name}</Text>
                  <Text style={[styles.messageText,{fontSize:14}]}>{item.ip_location}</Text>
                </View>
                <View style={styles.messageTimeBox}>
                  <Text style={styles.messageText}>{item.time}</Text>
                  {
                    item.sum>0?
                      <View style={styles.warn}>
                        <Text style={{color:'white'}}>{item.sum}</Text>
                      </View>:null
                  }
                </View>
              </View>
            </TouchableHighlight>
          }
        />
      </View>
    )
  }
}
