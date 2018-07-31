import React from 'react';
import { styles } from './styles';
import {
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class ListText extends React.Component{
  render(){
    return(
      <View style={styles.myCenterListBox}>
        <Text style={styles.myCenterListText}>{this.props.title}</Text>
        <View style={styles.myCenterListIconRightBox}>
          <Icon name='angle-right' size={20} color='#666'/>
        </View>
     </View>
    )
  }
}
