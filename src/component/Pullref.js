import React from 'react'
import {
  ScrollView,
  View,
  Text,
  RefreshControl,
  Image,
  StatusBar
} from 'react-native'
export default class Pullref extends React.Component{
  render(){
    return(
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={this.props.networks}
            colors={['white']}
            progressBackgroundColor="rgb(25,160,148)"
          />
        }
      >
        <View style={{flex:1 ,alignItems:'center',marginTop:50}}>
          <View style={{alignItems:'center',height:100}}>
            <Image source={require('../imge/zqblg.png')} style={{height:100,width:100}}/>
          </View>
          <View>
            <Text style={{color:'#999'}}>
              网络请求失败，下拉刷新重试！
            </Text>
          </View>
        </View>
        <StatusBar
           backgroundColor='rgb(25,160,148)'
        />
      </ScrollView>
    )
  }
}
