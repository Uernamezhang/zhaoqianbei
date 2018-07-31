//个人中心导航，单独放一个模块是因为连接Redux无法解析模块
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { MyCenterContainer } from '../containers/Mycenter';
import { Text } from 'react-native';
export const MyCenter = StackNavigator({
    MyCenterContainer: {
        screen: MyCenterContainer,
        navigationOptions:{
            headerTitle:<Text style={{color:'white',fontSize:16,flex:1,textAlign:'center',fontWeight:'100'}}>个人中心</Text>,
            headerStyle:{
              elevation: 0,
              height:40,
              backgroundColor:'rgb(25,160,148)'
            },
            headerTitleStyle:{
              alignSelf:'center',
              color:'white',
              fontSize:16,
            }
        },
    }
}, {
    mode:'card',
    headerMode:'float',
});
