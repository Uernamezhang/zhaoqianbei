//大课页面模板
import React from 'react';
import { styles } from './styles';
import {
  View,
  Text,
  ScrollView
} from 'react-native'
export default class BigClassTemplate extends React.Component{
  render(){
    return(
        <View style={styles.phpPrice}>
          <View style={styles.price}>
            <Text style={styles.priceLeftFlex}>
              原价:
              <Text>{this.props.price}元</Text>
            </Text>
            <Text style={styles.priceRightFlex}>
              优惠价:
              <Text style={styles.SpecialPrice}>{this.props.specialPrice}元</Text>
            </Text>
          </View>
          <View style={styles.price}>
            <Text style={styles.priceLeftFlex}>班级大小:{this.props.classes}对{this.props.classes}</Text>
            <Text style={styles.priceRightFlex}>学习周期:{this.props.period}个月左右</Text>
          </View>
          <View style={styles.intro}>
            <Text style={styles.introFont} numberOfLines = {4}>
              {this.props.intro}
            </Text>
          </View>
        </View>
    )
  }
}
