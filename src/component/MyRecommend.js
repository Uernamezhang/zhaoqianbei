import React from 'react';
import ListText from './ListText';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
export default class MyRecommend extends React.Component{
  render(){
    return(
      <View>
        <View>
          <View style={{marginTop:10,marginBottom:10}}>
            <TouchableHighlight
              activeOpacity={0.8}
              underlayColor='black'
              onPress={()=>this.props.navigation.navigate('RecommendRecord')}
            >
              <View>
                <ListText title='推荐记录'/>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}
