//前辈详情
import React from 'react';
import { styles } from './styles';
import Lodings from '../containers/Loading';
import {
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  RefreshControl,
  TouchableHighlight,
  Linking
} from 'react-native';
//封装信息组件
class MasterText extends React.Component{
  render(){
    return(
      <View style={styles.MasterTitleRowBox}>
        <Text style={styles.MasterTitleKey}>{this.props.name}</Text>
        <Text style={styles.MasterResumekeys}>{this.props.namekey}</Text>
      </View>
    )
  }
}
export default class MasterDetails extends React.Component{
  //打开项目连接
  projectlink = ( url )=> {
    Linking.openURL(url)
  }
  network(){
    this.props.dispatch({
      type:"MSTER_STATUBARTOP"
    })
    let formData = new FormData();
        formData.append('rid',this.props.navigation.state.params.qian_id)
    fetch('https://www.zhaoqianbei.com/api/Index/qianbeiDetail',{
      method:'POST',
      body:formData
    }).then(
      (response)=>{
        if(response.ok===true){
          this.props.dispatch({
            type:'MASTERDETAILS_TRY'
          })
          return response.json()
        }
      }
    ).then(
      (responseData)=>{
        this.props.dispatch({
          type:'MASTERDETAILS_DATA',
          data:responseData.data.data
        })
      }
    ).catch(
      (e)=>{
        this.props.dispatch({
          type:'MASTERDETAILS_ERROR'
        })
      }
    )
  }
  componentDidMount(){
    this.network()
    let timer
    // timer = setInterval(()=>{
    //   if(this.props.qianbeiDetail!=undefined){
    //     this.props.navigation.setParams({uersname:this.props.qianbeiDetail.teacher_name})
    //     this.props.navigation.setParams({uid:this.props.qianbeiDetail.u_id})
    //     clearInterval(timer)
    //   }
    // },500)

  }
  //组件移除清空状态
  componentWillUnmount(){
    this.props.dispatch({
      type:'WILLUNMOUNT'
    })
  }
  render(){
    const statubarHeight = StatusBar.currentHeight
    const { offsetYColor , error , projects , qianbeiDetail , shitus , zuopings } = this.props
    return(
      <ScrollView style={[styles.masterDetailsBox,{top:-(40+statubarHeight)}]}
        onScroll = {(e)=>{
          let offsetY = e.nativeEvent.contentOffset.y
          if(offsetY>30){
            //根据滚动位置是否显示导航栏
            //发送显示导航Action
            this.props.dispatch({
              type:"MSTER_STATUBARBOTTOM"
            })
            this.props.navigation.setParams({titlecolor:'rgb(25,160,148)'})
          } else{
            //发送导航消失Action
            this.props.dispatch({
              type:"MSTER_STATUBARTOP"
            })
            this.props.navigation.setParams({titlecolor:'rgba(250,250,250,0)'})
          }
        }
        }
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={()=>this.network()}
            colors={['white']}
            progressBackgroundColor="rgb(25,160,148)"
          />
        }
      >
        <View style={{flex:1,height:140}}>
          <Image
            source={require('../imge/masterbg.jpg')}
            style={{height:140}}
          />
        </View>
        {
          error===false?<Text style={{textAlign:'center',marginTop:50}}>网络错误,下拉刷新重试</Text>:
          qianbeiDetail===undefined?
            <Lodings/>:
            <View>
              <View style={styles.MasterHeaderBox}>
                <Image source={{uri:qianbeiDetail.u_img_curl[0]!=='h'?`https://www.zhaoqianbei.com${qianbeiDetail.u_img_curl}`:qianbeiDetail.u_img_curl}} style={styles.MasterHeaderPhoto}/>
                <View style={styles.MasterHeaderTitleBox}>
                  <View style={styles.MasterNameBox}>
                    <Text style={styles.MasterName}>{qianbeiDetail.teacher_name}</Text>
                    <Text style={styles.MasterResume}>{qianbeiDetail.u_d_edu_name}</Text><Text style={styles.MasterResume}>{qianbeiDetail.u_d_birthday}</Text><Text style={{fontSize:12,lineHeight:35,color:'white'}}>{qianbeiDetail.province_name}-{qianbeiDetail.city_name}-{qianbeiDetail.area_name}</Text>
                  </View>
                  <View style={{height:35}}>
                    <Text numberOfLines={2} style={{color:'#333',fontSize:14,paddingRight:10}}>Motto:{qianbeiDetail.u_d_motto!==''?qianbeiDetail.u_d_motto:<Text>暂无宣言</Text>}</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.MasterTitle}>工作经历</Text>
              <View style={styles.MasterTitleBox}>
                <MasterText name='任职公司：' namekey={qianbeiDetail.q_company}/>
                <MasterText name='职        位：' namekey={qianbeiDetail.q_job}/>
                <MasterText name='技        能：' namekey={qianbeiDetail.q_tech}/>
                <MasterText name='入行时间：' namekey={qianbeiDetail.ruhang}/>
              </View>
              <Text style={styles.MasterTitle}>教育经历</Text>
              <View style={styles.MasterTitleBox}>
                <MasterText name='学校名称：' namekey={qianbeiDetail.u_d_collage_name}/>
                <MasterText name='专       业：' namekey={qianbeiDetail.u_d_major}/>
                <MasterText name='最高学历：' namekey={qianbeiDetail.u_d_edu_name}/>
                <MasterText name='毕业时间：' namekey={qianbeiDetail.u_d_edu_time_view}/>
              </View>
              <Text style={styles.MasterTitle}>项目经验</Text>
              <View style={styles.MasterTitleBox}>
                {
                  projects.length!==0?
                    projects.map((data,index)=>(
                      <View key={index}>
                        <Text style={styles.projectNum}
                        >项目{index+1}</Text>
                        <View style={styles.MasterTitleRowBox}>
                          <Text style={[styles.MasterTitleKey,{width:75}]}>已开发项目：</Text>
                          <Text style={styles.MasterResumekeys}>{data.p_title}</Text>
                        </View>
                        <View style={styles.MasterTitleRowBox}>
                          <Text style={[styles.MasterTitleKey,{width:75}]}>项目职责：</Text>
                          <Text style={styles.MasterResumekeys}>{data.p_work}</Text>
                        </View>
                        <View style={styles.MasterTitleRowBox}>
                          <Text style={[styles.MasterTitleKey,{width:75}]}>开发时间：</Text>
                          <Text style={styles.MasterResumekeys}>{data.p_pro_time}</Text>
                        </View>
                        <View style={{flexDirection:'row' ,flex:1,paddingRight:10}} >
                          <Text style={[styles.MasterTitleKey,{width:75}]}>项目地址：</Text>
                          <Text
                            numberOfLines={1}
                            onPress={()=>this.projectlink(data.p_url)}
                            style={[styles.MasterResumekeys,{color:'rgb(25,160,148)',flex:0.8}]}>
                            {data.p_url}
                          </Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                          <Text style={[styles.MasterTitleKey,{width:75}]}>项目描述：</Text>
                          <Text numberOfLines={3}
                            style={[styles.MasterResumekeys,{flex:0.8}]}
                          >
                            {data.p_intro}
                          </Text>
                        </View>
                      </View>
                    )):<Text style={{color:'#999'}}>该前辈没有已做过的项目</Text>
                }
              </View>
              <Text style={styles.MasterTitle}>作品展示</Text>
              <View style={zuopings.length>1?styles.JudgeMasterTitleBox:styles.MasterTitleBox}>
                {
                  zuopings.length!==0?
                    zuopings.map((data,index)=>(
                      <View style={zuopings.length>1?styles.MasterDemoBox:styles.JudgeMasterDemoBox} key={index}>
                        <View style={styles.DemoImgBox}>
                          <Image source={{uri:data.u_z_url}} style={styles.DemoImg}/>
                        </View>
                        <View style={styles.DemoTextBox}>
                          <View style={styles.DemoTextTitleBox}>
                            {/* 标题 */}
                            <Text style={styles.DemoText}>{data.u_z_title}</Text>
                          </View>
                          <View style={styles.DemoTextTitleBox}>
                            {/* 时间 */}
                            <Text  style={styles.DemoText}>{data.u_z_f_time}个月</Text>
                          </View>
                          <View style={styles.DemoTextTitleBox}>
                            {/* 连接 */}
                            <Text
                              numberOfLines={1}
                              onPress={()=>this.projectlink(data.u_z_url)}
                              style={{color:'rgb(25,160,148)',height:20 ,lineHeight:20,fontSize:14}}
                            >
                              {data.u_z_url}
                            </Text>
                          </View>
                          <ScrollView style={{height:40}}>
                            <Text numberOfLines={2} style={styles.DemoText}>
                              {data.u_z_intro}
                            </Text>
                          </ScrollView>
                        </View>
                      </View>
                    )):
                    <Text style={{color:'#999'}}>该前辈暂无作品展示</Text>
                }
              </View>
              <Text style={styles.MasterTitle}>联系方式</Text>
              <View style={styles.MasterTitleBox}>
                <MasterText name='手      机：' namekey={qianbeiDetail.phone_view}/>
                <MasterText name='QQ邮箱：' namekey={qianbeiDetail.email}/>
              </View>
              <Text style={styles.MasterTitle}>自我评价</Text>
              <View style={styles.MasterTitleBox}>
                <View>
                  <Text style={styles.MasterResumekeys}>{qianbeiDetail.q_intro!==''?qianbeiDetail.q_intro:<Text>前辈很忙，连自我评价的时间也没有</Text>}</Text>
                </View>
              </View>
              <Text style={styles.MasterTitle}>带领学员-{shitus.length}人</Text>
              <View style={{marginBottom:20}}>
                {
                  shitus.length!==0?
                    shitus.map((data,index)=>(
                      <View key={index}>
                        <View style={styles.ApprenticeListBox} >
                          <View>
                            <Image source={{uri:data.s_d_curl[0]!=='h'?`https://www.zhaoqianbei.com${data.s_d_curl}`:data.s_d_curl}} style={styles.ApprenticePhoto}/>
                          </View>
                          <View style={styles.ApprenticeNmaeBox}>
                            <View style={{height:25}}>
                              <Text style={styles.ApprenticeNmae}>{data.s_d_name}-{data.s_d_ke_title}</Text>
                            </View>
                            <View style={{height:25}}>
                              <Text style={styles.ApprenticeTime}>{data.s_d_stime}</Text>
                            </View>
                          </View>
                        </View>
                        <View style={{borderTopWidth:1,borderColor:'#ebebeb'}}/>
                      </View>
                    )):
                    <View style={styles.MasterTitleBox}>
                      <Text style={{color:'#999'}}>该前辈暂未收徒,赶快拜他为师吧！</Text>
                    </View>
                }
              </View>
            </View>
        }
        <StatusBar
          translucent={true}
          hidden={false}
          backgroundColor={offsetYColor}
        />
      </ScrollView>
    )
  }
}
