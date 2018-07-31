import React from 'react';
import { styles } from './styles';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
export default class RecommendExplain extends React.Component{
  render(){
    return(
      <ScrollView>
        <View style={[styles.StudyBox,{paddingBottom:20,paddingRight: 10,paddingLeft:10}]}>
          <Text style={styles.StudyTextTitle}>推荐说明</Text>
          <Text style={styles.RecommendExplainTitle}>推荐码说明</Text>
          <Text style={styles.RecommendExplainColor}>1、注册时，自动生成推荐码，可以在个人中心查看。</Text>
          <Text style={styles.RecommendExplainColor}>2、推荐码可以多性生成（PC操作），原推荐码自动作废，原推荐码推荐成员继续有效。</Text>
          <Text style={styles.RecommendExplainColor}>3、用户注册时填入推荐码，不能补录。</Text>
          <Text style={styles.RecommendExplainColor}>4、被推荐用户部分支出，您可以获得一定比例提成。</Text>
          <Text style={styles.RecommendExplainColor}>5、推荐只有一级，即您推荐另一个人。而另一个人再推荐，跟您无关。</Text>
          <Text style={styles.RecommendExplainTitle}>奖励说明</Text>
          <Text style={styles.RecommendExplainColor}>1、只要用户扫您的二维码注册，就推荐成功。</Text>
          <Text style={styles.RecommendExplainColor}>2、推荐的用户，产生的第一笔小课和大课支出，您将得到奖励。</Text>
          <Text style={styles.RecommendExplainColor}>3、奖励比例目前定为5%。</Text>
        </View>
        <View style={[styles.StudyBox,{paddingBottom:20,paddingRight: 10,paddingLeft:10}]}>
          <Text style={styles.StudyTextTitle}>结算及提现</Text>
          <Text style={styles.RecommendExplainTitle}>结算</Text>
          <Text style={styles.RecommendExplainColor}>1、不设结算周期，结算金额实时。</Text>
          <Text style={styles.RecommendExplainColor}>2、计算所有您推荐的已缴费学员作为预计收入。</Text>
          <Text style={styles.RecommendExplainColor}>3、计算所有您推荐的已结业学员，作为可提现收入。</Text>
          <Text style={styles.RecommendExplainTitle}>提现</Text>
          <Text style={styles.RecommendExplainColor}>1、您可以在任何时候进行提现操作。</Text>
          <Text style={styles.RecommendExplainColor}>2、您只能提现可提现收益部分。</Text>
          <Text style={styles.RecommendExplainColor}>3、提现收入在1-3个工作日内，审核打入您的账户。</Text>
        </View>
      </ScrollView>
    )
  }
}
