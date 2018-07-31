//小课主页面
import React from 'react';
import { TabNavigator } from "react-navigation";
import MultipleClasss from '../containers/MultipleClass';
import OverClasss from '../containers/OverClass';
import FirstClasss from '../containers/FirstClass';
import ScrollableTabView , { DefaultTabBar } from 'react-native-scrollable-tab-view';
class SmallClass extends React.Component{
  render(){
    return(
      <ScrollableTabView
        renderTabBar={()=> <DefaultTabBar style={{borderWidth: 0}}/>}
        tabBarUnderlineStyle={{backgroundColor:'white'}}
        tabBarBackgroundColor='rgb(25,160,148)'
        tabBarActiveTextColor='white'
        tabBarInactiveTextColor='white'
        >
          <FirstClasss tabLabel='首次开课'/>
          <MultipleClasss tabLabel='多次开课'/>
          <OverClasss tabLabel='已结束'/>
      </ScrollableTabView>
    )
  }
}
export default SmallClass
