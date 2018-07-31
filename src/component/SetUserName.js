//设置用户名
import React from 'react';
import { styles } from './styles';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
export default class SetUserName extends React.Component{
  render(){
    return(
      <View>
        <View style={styles.SetUserNameInputBox}>
          <TextInput
            style={styles.SetUserNameInput}
            autoFocus={true}
            underlineColorAndroid="transparent"
            defaultValue ="skrillex"
          />
        </View>
        <View style={styles.SetUserNameButton}>
          <View style={{height: 40,flex:0.4,flexDirection: 'row',justifyContent:'space-between'}}>
            <View style={{flex:0.4}}>
              <Button title='提交' color='rgb(25,160,148)' onPress={()=>{alert(1)}}/>
            </View>
            <View style={{flex:0.4}}>
              <Button title='重置' color='#999' onPress={()=>{alert(1)}}/>

            </View>
          </View>
        </View>
      </View>
    )
  }
}
