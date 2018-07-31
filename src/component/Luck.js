//缘分主页面
import React from 'react';
import LuckTemplate from './LuckTemplate';
import { Ladys , Mans , Restss } from '../containers/Luck';
import ScrollableTabView , { DefaultTabBar } from 'react-native-scrollable-tab-view';
import {
  Text,
  View,
} from 'react-native';
export default class Luck extends React.Component{
  render(){
    return(
      <ScrollableTabView
        renderTabBar={()=> <DefaultTabBar style={{borderWidth: 0}}/>}
        tabBarUnderlineStyle={{backgroundColor:'white'}}
        tabBarBackgroundColor='rgb(25,160,148)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='white'
        >
          <Mans
            tabLabel='男士'
            navigate={this.props.navigation.navigate}
          />
          <Ladys
            tabLabel='女士'
            navigate={this.props.navigation.navigate}
          />
          <Restss
            tabLabel='其他'
            navigate={this.props.navigation.navigate}
          />
      </ScrollableTabView>
    )
  }
}
