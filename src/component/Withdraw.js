// 申请提现
import React from 'react';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text
} from 'react-native';
export default class Withdraw extends React.Component{
  render(){
    return(
        <View>
          <Text style={{color:'red',fontSize:12,textAlign:'center'}}>我们将在1-3个工作日内，审核你的提现申请，并打款给您！</Text>
          <View style={[styles.StudyBox,{paddingBottom:20,paddingLeft:10}]}>
            <Text style={styles.StudyTextTitle}>请输入您提款相关信息</Text>
            <View style={styles.StudyMasterTextListBox}>
              <Text style={[styles.StudyText,{fontSize:14}]}>可提现额度：
                <Text style={{color:'#777'}}>0元   </Text>
                <Text
                  style={{color:'rgb(25,160,148)'}}
                  onPress={()=>this.props.navigation.navigate('RecommendExplain')}
                >
                  <Icon name='question-circle-o' size={14} color='rgb(25,160,148)'/>相关问题
                </Text></Text>
            </View>
            <View style={styles.StudyMasterTextListBox}>
              <Text style={[styles.StudyText,{fontSize:14}]}>提现类型：<Text style={{color:'#777'}}>小课提现</Text></Text>
            </View>
            <View style={styles.StudyMasterTextListBox}>
              <Text style={[styles.StudyText,{fontSize:14}]}>备注：<Text style={{color:'#777'}}>无可提现额度，加油，我们一起努力！</Text></Text>
            </View>
          </View>
        </View>
    )
  }
}
