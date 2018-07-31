import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import Loading from './Loading';
import Pullref from './Pullref'
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
class TextModoul extends React.Component{
  render(){
    return(
      <View style={styles.BigClassDetailsTextModoulBox}>
        <Text style={styles.BigClassDetailsTextModoulText}>
          <Icon name={this.props.iconname} size={20} color='rgb(25,160,148)'/> {this.props.classTitle}
        </Text>
        {this.props.box}
      </View>
    )
  }
}
class TextDetails extends React.Component{
  render(){
    return(
      <View style={{marginTop:10}}>
        <Text style={styles.BigClassDetailsTextDetailsTitle}>{this.props.title}</Text>
        {this.props.textintro}
      </View>
    )
  }
}
class Texts extends React.Component{
  render(){
    return(
      <Text style={{fontSize:14,color:'#888'}}>{this.props.text}</Text>
    )
  }
}
class Texta extends React.Component{
  render(){
    return(
      <Text style={{fontSize:14,color:'#666'}}>{this.props.text}</Text>
    )
  }
}
export default class BigClassDetails extends React.Component{
  network = () => {
    let formdata = new FormData();
    formdata.append('keid',this.props.navigation.state.params.keid)
    fetch('https://www.zhaoqianbei.com/api/Index/keDetail',{
      method:'POST',
      body:formdata
    }).then((res)=>{
      if(res.ok){
        this.props.dispatch({
          type:'BIGACLASSDETAILS_TRY'
        })
        return res.json()
      }
    }).then((resdata)=>{
      this.props.dispatch({
        type:'BIGACLASSDETAILS_DATA',
        data:resdata.data.data.kechengDetail
      })
    }).catch((e)=>{
      this.props.dispatch({
        type:'BIGACLASSDETAILS_ERR'
      })
    })
  }
  componentDidMount(){
    this.network()
  }
  //组件移除清空状态
  componentWillUnmount(){
    this.props.dispatch({
      type:'WILLUNMOUNT_CLEARBIGDATA'
    })
  }
  render(){
    const { data , err } = this.props
    return(
      err===true?data.ke_id===undefined?<Loading/>:
      <ScrollView>
        <View style={styles.BigClassDetailsHeaderBox}>
          <View style={styles.BigClassDetailsHeaderClassTitleBox}>
            <Text style={styles.BigClassDetailsHeaderClassTitleText}>
              <Icon
                name="graduation-cap"
                size={16}
                color="white"
              />
              {data.ke_title}课程
            </Text>
          </View>
          <View style={styles.BigClassDetailsHeaderTitleBox}>
            <Text style={styles.BigClassDetailsHeaderTitle}>{data.ke_title}</Text>
          </View>
          <View style={styles.BigClassDetailsFooterBox}>
            <View style={{flex:1}}>
              <Text style={[styles.BigClassDetailsFooterText,{textDecorationLine:'line-through'}]} >
                <Icon name='rmb' size={12} color='white'/>
                原价:{data.ke_price}元
              </Text>
            </View>
            <View style={{flex:1}}>
              <Text style={styles.BigClassDetailsFooterText}>
                <Icon name='usd' size={12} color='white'/>
                优惠价:{data.ke_dis_price}元
              </Text>
            </View>
            <View style={{flex:1}}>
              <Text style={styles.BigClassDetailsFooterText}>
                <Icon name='hourglass-2' size={12} color='white'/>
                时间:{data.ke_period}个月左右
              </Text>
            </View>
          </View>
        </View>
        <TextModoul
          iconname='bars'
          classTitle='课程简介'
          box={
            <Texta
              text={data.ke_short_intro}
            />
          }
        />
        <TextModoul
          iconname='adjust'
          classTitle='特色'
          box={
            <Texta
              text={data.ke_special}
            />
          }
        />
        <TextModoul
          iconname='clipboard'
          classTitle='班级大小'
          box={
            <Texta
              text={`${data.ke_class}对${data.ke_class}`}
            />
          }
        />
        <TextModoul
          iconname='search-minus'
          classTitle='课程详情'
          box={
            <View>
              <TextDetails
                title='课程基本分为九个阶段，分为4个主要学习阶段：基础知识、基础练习、项目练习、中级知识。'
                textintro={
                  <Texts
                    text='注重知识的学习同时，更注重掌握实际的应用能力，很多人说我学了PHP、学了些框架，我就可以出去找工作，
                    为啥还要缴费学习，很简单，工作经验不是你掌握了多少知识，而是你怎么用你你掌握的知识。'
                  />
                }
              />
              <TextDetails
                title='工作经验是什么？'
                textintro={
                  <Texts
                    text='是应用有限知识解决问题的能力，是综合性应用各种知识解决问题的能力，是团队配合能力，是熟能生巧的具体表现。'
                  />
                }
              />
              <TextDetails
                title='能学到怎样的程度？'
                textintro={
                  <View>
                    <Texts
                      text='在找前辈，学习3个月左右，能够让你拥有行业内1-2年的工作经验，你会问为什么？'
                    />
                    <Texts
                      text='其一，你自学会走弯路，会在大量非常规知识上消耗很多时间。'
                    />
                    <Texts
                      text='其二、针对性的进行项目练习，其实在学习后期，就跟在上班没多大区别了，只是做事效率和成功率不高，当你能力高了，也就不用学习了。'
                    />
                  </View>
                }
              />
              <TextDetails
                title='能学哪些知识？'
                textintro={
                  <Texts
                    text='基本包括：前端基础、PHP系统、数据库、微信开发、支付宝开发、商城开发、Linux服务器、安全防护、团队协作、服务器等等'
                  />
                }
              />
              <TextDetails
                title='学习方式怎样的？'
                textintro={
                  <View>
                    <Texts
                      text='可以在线，可以实地到公司来学。'
                    />
                    <Texts
                      text='一对一教学，随到随学，像考驾校一样学习。'
                    />
                    <Texts
                      text='学习周期和内容，根据不同人制定，更具个性化。'
                    />
                  </View>
                }
              />
              <TextDetails
                title='学习费用？'
                textintro={
                  <View>
                    <Texts
                      text='1、不贷款，很多学这个的，要么学生，要么转行，本来钱不多，贷款+利息，坑死人。'
                    />
                    <Texts
                      text='2、不高价，现在线下学习课程，基本1.5万以上，我们连一半都不到。'
                    />
                    <Texts
                      text='3、7k的学费，出去工作，高的一个月工资，低的两个月工资的事情，我们有两期的学生就业数据。'
                    />
                  </View>
                }
              />
              <TextDetails
                title='为什么选择我们？'
                textintro={
                  <View>
                    <Texts
                      text='便宜啊！'
                    />
                    <Texts
                      text='一直可以学啊！'
                    />
                    <Texts
                      text='学习时间自由啊！'
                    />
                    <Texts
                      text='平台本身还能帮你赚钱，帮你找工作啊！'
                    />
                    <Texts
                      text='还能帮你找妹子啊！'
                    />
                  </View>
                }
              />
              <Text style={{fontSize:14,fontWeight:'500',color:'rgb(25,160,148)',marginBottom:5,marginTop:10}}>课程大纲：</Text>
              <TextDetails
                title='第一阶段：前端基础知识部分（1-2周）'
                textintro={
                  <View>
                    <Texts
                      text='学习目标：了解web前端基础，包括HTML\\CSS\\Javascript等'
                    />
                    <Texts
                      text='学习方法：课程学习、老师辅导'
                    />
                  </View>
                }
              />
              <TextDetails
                title='第二阶段：系统性PHP知识部分（1-4周）'
                textintro={
                  <View>
                    <Texts
                      text='学习目标：系统性了解PHP入门知识，包括PHP、MySQL、SQL等'
                    />
                    <Texts
                      text='学习方法：课程学习、老师辅导'
                    />
                  </View>
                }
              />
              <TextDetails
                title='第三阶段：开发准备（1天）'
                textintro={
                  <View>
                    <Texts
                      text='学习目标：了解和掌握环境开发、软件使用、多人开发模式'
                    />
                    <Texts
                      text='学习方法：讲课、操作'
                    />
                  </View>
                }
              />
              <TextDetails
                title='第四阶段：基础性练习（4周-8周）'
                textintro={
                  <View>
                    <Texts
                      text='目标：针对入门学习练手操作，并结合行业常用框架完成基本的功能模块'
                    />
                    <Texts
                      text='学习方法：练习、辅导、学习'
                    />
                  </View>
                }
              />
              <TextDetails
                title='第五阶段：项目准备（1天）'
                textintro={
                  <View>
                    <Texts
                      text='目标：熟悉新的版本控制、熟悉项目'
                    />
                    <Texts
                      text='学习方法：讲解、演示、互相沟通'
                    />
                  </View>
                }
              />
              <TextDetails
                title='第六阶段：项目实战（1-2个月）'
                textintro={
                  <View>
                    <Texts
                      text='学习目标：自主按需开发相关功能、模块'
                    />
                    <Texts
                      text='学习方法：讲解、实战、自主学习'
                    />
                  </View>
                }
              />
              <TextDetails
                title='第七阶段（结合第六阶段）：进阶学习（4-8周）'
                textintro={
                  <View>
                    <Texts
                      text='学习目标：了解并结合项目，学习服务器相关、安全维护、PHP中高级知识'
                    />
                    <Texts
                      text='学习方法：自学、讲解、辅导'
                    />
                  </View>
                }
              />
              <TextDetails
                title='第八阶段：辅助求职（1-4周）'
                textintro={
                  <View>
                    <Texts
                      text='目标：成功应聘'
                    />
                    <Texts
                      text='求职方案：推荐+自主求职+辅助'
                    />
                  </View>
                }
              />
              <TextDetails
                title='第九阶段：职后与重炼（整个职业周期）'
                textintro={
                  <View>
                    <Texts
                      text='目标：中高级学习、职后辅导、针对性学习'
                    />
                    <Texts
                      text='方法：回炉重炼、互帮互助、你问我答、自主学习'
                    />
                  </View>
                }
              />
            </View>
          }
        />
      </ScrollView>:
      <Pullref
        networks={this.network()}
      />
    )
  }
}
