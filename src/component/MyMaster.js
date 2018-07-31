import React from 'react';
import ScrollableTabView , { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { MyMasterStudy , MyMasterOver} from '../containers/MyMaster';
import { styles } from './styles';
import {
  View,
  Text,
  ScrollView,
  Image,
  Button
} from 'react-native';
//前辈组件
export class StudyMaster extends React.Component{
  render(){
    return(
      <View style={styles.StudyMasterBox}>
        <View style={styles.StudyMasterHeaderBox}>
          <View style={styles.StudyMasterImage}>
            <Image source={{uri:this.props.img}} style={styles.StudyMasterImage}/>
          </View>
          <View style={styles.StudyMasterTextBox}>
            <View style={{height:25}}>
              <Text style={{fontSize:18,color:'#333',height:25}}>{this.props.username}</Text>
            </View>
            <View style={styles.StudyMasterTextListBox}>
              <Text style={styles.StudyText}>QQ：<Text style={{color:'#0a8cd2'}}>{this.props.qq}</Text></Text>
            </View>
            <View style={styles.StudyMasterTextListBox}>
              <Text style={styles.StudyText}>手机：<Text style={{color:'#555'}}>{this.props.phone==''?'保密':this.props.phone}</Text></Text>
            </View>
            <View style={styles.StudyMasterTextListBox}>
              <Text style={styles.StudyText}>课程：<Text style={{color:'#555'}}>{this.props.kecheng}</Text></Text>
            </View>
            <View style={styles.StudyMasterTextListBox}>
              <Text style={styles.StudyText}>收费：<Text style={{color:'red'}}>{this.props.price}</Text>元</Text>
            </View>
            <View style={[styles.StudyMasterTextListBox,{flexDirection:'row'}]}>
              <View style={styles.Studyyidai}>
                <Text style={styles.StudyyidaiText}>已带<Text style={{color:'red'}}>{this.props.yidai}</Text>人</Text>
              </View>
              <View style={[styles.Studyyidai,{paddingLeft:5}]}>
                <Text style={styles.StudyyidaiText}>在带<Text style={{color:'red'}}>{this.props.zaidai}</Text>人</Text>
              </View>
              <View style={{paddingLeft:5}}>
                <Text style={styles.StudyyidaiText}>好评<Text style={{color:'red'}}>{this.props.haopin}</Text></Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.StudyMasterDataBox}>
          <Text style={styles.StudyMasterDataTitle}>基本资料</Text>
          <Text style={styles.StudyMasterDataText}>公司：<Text style={styles.StudyMasterDataTextColor}>{this.props.company}</Text></Text>
          <Text style={styles.StudyMasterDataText}>工作时长：<Text style={styles.StudyMasterDataTextColor}>{this.props.time}</Text></Text>
          <Text style={styles.StudyMasterDataText}>擅长技术：<Text style={styles.StudyMasterDataTextColor}>Java</Text></Text>
          <Text style={{color:"#333",fontSize:14}}>介绍：<Text style={styles.StudyMasterDataTextColor}>{this.props.intro==''?'暂无介绍':this.props.intro}</Text></Text>
        </View>
      </View>
    )
  }
}
//按钮组件
export class Buttons extends React.Component{
  render(){
    return(
      <View style={[styles.StudyMasterButtonBox,{marginBottom: 10}]}>
        <View style={[styles.StudyMasterButtonLeftBox,{marginRight:10,alignItems: 'center',justifyContent: 'center',height:32}]}>
          <Text
            style={{color:'gray',fontSize:14}}
          >
            {this.props.ButtonLeftTitle}
          </Text>
        </View>
        <View style={styles.StudyMasterButtonLeftBox}>
          <Button
            title={this.props.ButtonRightTitle}
            disabled={this.props.disabled}
            color={this.props.RightButtonColor}
            onPress={this.props.buttonBuxue}
          />
        </View>
      </View>
    )
  }
}
//等待前辈确认
export class Tbc extends React.Component{
  render(){
    return(
      <View style={[styles.StudyBox,{marginBottom: 10}]}>
        <Text style={styles.StudyTextTitle}>{this.props.title}</Text>
        <StudyMaster
          username={this.props.username}
          qq={this.props.qq}
          phone={this.props.phone}
          kecheng={this.props.kecheng}
          price={this.props.price}
          yidai={this.props.yidai}
          zaidai={this.props.zaidai}
          haopin={this.props.haopin}
          img={this.props.img}
          company={this.props.company}
          intro={this.props.intro}
          time={this.props.time}
        />
        <Buttons
          ButtonDis={this.props.buttonoff}
          ButtonLeftTitle={this.props.buttonlefttitle}
          RightButtonColor='rgb(25,160,148)'
          ButtonRightTitle={this.props.buttonrighttitle}
          buttonBuxue={this.props.buttonBuxue}
          disabled={this.props.disabled}
        />
      </View>
    )
  }
}
//前辈拒收
export class Denied extends React.Component{
  render(){
    return(
      <View
        style={[styles.StudyBox,{marginBottom:10}]}
      >
        <Text style={styles.StudyTextTitle}>{this.props.title}</Text>
        <StudyMaster
          username={this.props.username}
          qq={this.props.qq}
          phone={this.props.phone}
          kecheng={this.props.kecheng}
          price={this.props.price}
          yidai={this.props.yidai}
          zaidai={this.props.zaidai}
          haopin={this.props.haopin}
          img={this.props.img}
          company={this.props.company}
          intro={this.props.intro}
          time={this.props.time}
        />
        <View style={styles.StudyMasterButtonBox}>
          <View style={[styles.StudyMasterButtonLeftBox]}>
            <Button title={this.props.buttontitle}
              disabled={true}
              onPress={()=>console.log('true')}
            />
          </View>
        </View>
      </View>
    )
  }
}

export class MyMaster extends React.Component{
  render(){
    return(
      <ScrollableTabView
        renderTabBar={()=> < DefaultTabBar style={{height:30,borderWidth: 0}}/>}
        tabBarUnderlineStyle={{backgroundColor:'#fff'}}
        tabBarBackgroundColor='rgb(25,160,148)'
        tabBarActiveTextColor='#fff'
        tabBarInactiveTextColor='#fff'
      >
        <MyMasterStudy tabLabel='求学中'/>
        <MyMasterOver tabLabel='已结束'/>
      </ScrollableTabView>
    )
  }
}
