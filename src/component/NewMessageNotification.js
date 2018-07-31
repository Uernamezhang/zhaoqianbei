//新消息通知设置
import React from 'react';
import { List , Switch  } from 'antd-mobile';
import {
  View,
  Text
} from 'react-native';
const Item = List.Item;
export default class NewMessageNotification extends React.Component{
  render(){
    return(
      <View>
        <List renderHeader={() => '关闭消息通知后，你将无法收到拜师提醒'}>
          <Item
            extra={
              <Switch
                checked={true}
                color='rgb(25,160,148)'
              />
            }
          >
            接受新消息通知
          </Item>
        </List>
      </View>
    )
  }
}
