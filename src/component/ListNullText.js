import React from 'react';
import{
  Text,
  Image,
  View
} from 'react-native'
export default class ListNullText extends React.Component{
  render(){
    return(
      <View style={{flex:1 ,alignItems:'center'}}>
        <View style={{alignItems:'center',height:100}}>
          <Image source={require('../imge/zqblg.png')} style={{height:100,width:100}}/>
        </View>
        <View>
          <Text style={{color:'#999',fontSize:12}}>
            {this.props.text}
          </Text>
        </View>
      </View>
    )
  }
}
