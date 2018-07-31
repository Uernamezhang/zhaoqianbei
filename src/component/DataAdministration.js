//资料管理
import React from 'react';
import ListText from './ListText';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';


export default class DataAdministration extends React.Component{
  render(){
    return(
      <View>
        <View>
          <View style={{marginTop:10,marginBottom:10}}>
            <TouchableHighlight
              activeOpacity={0.8}
              underlayColor='black'
              onPress = {()=>{this.props.navigation.navigate('ChangePassword')}}
            >
              <View>
                <ListText title='密码修改'/>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={0.8}
              underlayColor='black'
              onPress={()=>{this.props.navigation.navigate('PersonalData')}}
              >
              <ListText title='个人详细资料'/>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}
