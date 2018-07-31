//账号设置
import React from 'react';
import { List , WingBlank , Button } from 'antd-mobile';
import { styles } from './styles';
import {
  View,
  Text,
  Image
} from 'react-native';
export default class SetUser extends React.Component{
  render(){
    return(
      <View>
        <List renderHeader={() => '当前登录账号'}>
          <View style={styles.SetUserListBox}>
            <Image source={require('../imge/skrillex.jpg')} style={{height:50,width: 50}}/>
            <Text style={styles.SetUserListTitle}>Skrillex</Text>
          </View>
        </List>
        <WingBlank>
          <Button
            type='ghost'
            size={'small'}
            style={{marginTop: 20,borderColor: 'rgb(25,160,148)',padding:10}}><Text style={{color:'rgb(25,160,148)'}}>换个账号登录</Text></Button>
        </WingBlank>
      </View>
    )
  }
}
