import React from 'react';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Modal,
  View,
  Text,
  Image,
  TouchableHighlight,
  Button,
  StatusBar
} from 'react-native' ;
export default class SmallClassModal extends React.Component{
  render(){
    return(
      <Modal
        animationType='fade'
        visible={this.props.onoff}
        onRequestClose={() =>alert(1)}
        transparent={true}
      >
        <View style={styles.SmallClassModalBox}>
          <View style={styles.ModalBox}>
            <View style={styles.closeBox}>
              <TouchableHighlight
                style={styles.close}
                onPress={this.props.onFunction}
                underlayColor="rgba(250,250,250,0.5)"
              >
                <Icon name='close' size={20} color='rgb(25,160,148)'/>
              </TouchableHighlight>
            </View>
            <View style={styles.smallContentBox}>
              <View style={styles.smallContentImgBox}>
                <Image source={require('../imge/skrillex.jpg')} style={{height:120,width:120}}/>
              </View>
              <View style={styles.smallModalTextBox}>
                {/* 标题 */}
                <Text
                  numberOfLines={2}
                  style={[styles.smallModalText,{height:34,fontSize:14}]}>
                  成渝经济区以及成都未来短期房价的趋势分析
                </Text>
                {/* 收费 */}
                <Text style={[styles.smallModalText,{height:17,fontSize:12}]} numberOfLines={1} >
                  收费:<Text style={{textDecorationLine:'line-through',color:'#999'}}>原价:200元 </Text>现价:
                  <Text style={{color:'rgb(25,160,148)'}}>99.00</Text>元
                </Text>
                {/*上课老师*/}
                <Text style={[styles.smallModalText,{height:17,fontSize:12}]} numberOfLines={1}>上课老师：<Text style={{color:'rgb(25,160,148)'}}>找前辈</Text></Text>
                {/* 时间 */}
                <Text style={[styles.smallModalText,{height:17,fontSize:12}]} numberOfLines={1}>时间：<Text style={{color:'#999'}}>2018-02-14 09:30:00</Text></Text>
                {/* 地点 */}
                <Text style={[styles.smallModalText,{height:34,fontSize:12}]} numberOfLines={2}>方式或地点：<Text style={{color:'#999'}}>空港国际城一期一栋一单元318室</Text></Text>

              </View>
            </View>
            <View style={styles.modalContent}>
              <Text
                style={{color:'#333',fontSize:14}}
                numberOfLines={5}
              >主要内容：
                <Text style={{color:'#999',fontSize:14}}>
                  主要是就成渝经济发展做个总结性报告，结合历史、现状和未来。 同时针对成都房价的未来发展，
                  结合国内经济发展总趋势，给出趋势性预测和进入建议。 欢迎参与！
                </Text>
              </Text>
            </View>
            <View style={{height:30}}>
              <View style={styles.shoppinButoon}>
                <Button color={'rgb(25,160,148)'} title='购买' onPress={()=>alert(1)}/>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}
