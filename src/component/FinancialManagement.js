//财务管理
import React from 'react';
import ListText from './ListText';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
export default class FinancialManagement extends React.Component{
  render(){
    return(
      <View>
        <View>
          <View style={{marginTop:10,marginBottom:10}}>
            <TouchableHighlight
              onPress={()=>{this.props.navigation.navigate('FinanceOverview')}}
              activeOpacity={0.8}
              underlayColor='black'
            >
              <View>
                <ListText title='财务总览'/>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={()=>{this.props.navigation.navigate('Income')}}
              activeOpacity={0.8}
              underlayColor='black'
            >
              <View>
                <ListText title='收入总览'/>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={()=>{this.props.navigation.navigate('Expense')}}
              activeOpacity={0.8}
              underlayColor='black'
            >
              <View>
                <ListText title='支出记录'/>
              </View>
            </TouchableHighlight>
          </View>
          <View style={{marginTop:10,marginBottom:10}}>
            <TouchableHighlight
              onPress={()=>{this.props.navigation.navigate('WithdrawalRecord')}}
              activeOpacity={0.8}
              underlayColor='black'
              >
                <View>
                  <ListText title='提现记录'/>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={()=>{this.props.navigation.navigate('Discount')}}
              activeOpacity={0.8}
              underlayColor='black'
              >
                <View>
                  <ListText title='优惠券'/>
                </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}
