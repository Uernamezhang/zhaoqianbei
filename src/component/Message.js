//消息主页面
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { styles } from './styles';
import { Messages }from '../containers/Message';
import Chat from './Chat';
import {
  Text,
  View
} from 'react-native';
const Message = StackNavigator({
    Messages: {
        screen: Messages,
        navigationOptions:{
            headerTitle:<Text style={{color:'white',fontSize:16,flex:1,textAlign:'center',fontWeight:'100'}}>消息</Text>,
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
    headerMode: 'float',
});
export default Message
