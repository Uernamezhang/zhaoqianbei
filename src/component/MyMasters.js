import * as MyMasters from './MyMaster';
import React from 'react';
import { Toast } from 'antd-mobile';
import {
  ScrollView,
  FlatList,
  Text
}from 'react-native';
//求学中页面
export class Study extends React.Component{
  network = () => {
    fetch('https://www.zhaoqianbei.com/api/Index/qiuxue',{
      method:'GET'
    }).then((res)=>{
      return res.json()
    }).then((resdata)=>{
      this.props.dispatch({
        type:'STUDY_DATA',
        data:resdata.data
      })
    }).catch((e)=>{
      Toast.offline('网络错误',2)
      this.props.dispatch({
        type:'STUDY_DATA',
        data:[]
      })
    })
  }
  buxue = (sid) => {
    let formdata = new FormData()
    formdata.append('id',sid)
    fetch('https://www.zhaoqianbei.com/api/Ajax/buxue',{
      method:'POST',
      body:formdata
    }).then((res)=>{
      return res.json()
    }).then((resdata)=>{
      if(resdata.ret_msg==1){
        Toast.info('取消成功',2)
      }else if(resdata.ret_msg==0){
        Toast.info('取消失败',2)
      }
    }).catch((e)=>{
      Toast.offline('网络错误',2)
    })
  }
  componentDidMount(){
    this.network()
  }
  componentWillUnmount(){
    this.props.dispatch({
      type:'STUDY_DATA',
      data:[]
    })
  }
  render(){
    const { state } = this.props
    return(
      <FlatList
        keyExtractor={(item,index)=>index}
        refreshing={true}
        initialNumToRender={2}
        ListFooterComponent={<Text/>}
        data={state.data}
        getItemLayout={(data,index)=>({length:359,offset:359*index,index})}
        renderItem={({item})=>
          item.s_state==0||item.s_state==1?
            <MyMasters.Tbc
              title={item.s_state==1&item.jiaokuan==0?'等待付款':item.s_state==0?'等待前辈确认':item.s_state==1&item.jiaokuan==1?'付款成功':null}
              username={item.user_name}
              qq={item.qq}
              phone={item.phone}
              kecheng={item.q_k_name}
              price={item.s_price}
              yidai={item.allStuEnd}
              zaidai={item.allStuIng}
              haopin={item.q_zan}
              img={item.u_img_curl[0]!='h'?`https://www.zhaoqianbei.com/${item.u_img_curl}`:item.u_img_curl}
              company={item.q_company}
              intro={item.q_intro}
              time={item.q_join_time}
              buttonlefttitle={item.s_state==1&item.jiaokuan==0?'请到网页端付款':item.s_state==0?'等待确认':item.s_state==1&item.jiaokuan==1?'已付款':null}
              buttonoff={item.s_state==1&item.jiaokuan==0?true:item.s_state==0?true:item.s_state==1&item.jiaokuan==1?true:true}
              buttonrighttitle={item.s_state==1&item.jiaokuan==1?'网页端退款':'不学了'}
              disabled={item.s_state==1&item.jiaokuan==1?true:false}
              buttonBuxue={()=>
                {
                  this.buxue(item.s_id)
                  setTimeout(()=>{
                    this.network();
                  },1000)
                }
              }
            />:null
        }
      />

        )
    }
}
//已结束
export class Over extends React.Component{
    render(){
      const { state } = this.props
      return(
        <FlatList
          keyExtractor={(item,index)=>index}
          refreshing={true}
          initialNumToRender={2}
          ListFooterComponent={<Text/>}
          data={state.data}
          getItemLayout={(data,index)=>({length:359,offset:359*index,index})}
          renderItem={({item})=>
            item.s_state==-2||item.s_state==-1||item.s_state==2?
              <MyMasters.Denied
                title={item.s_state==-2?'前辈拒收':item.s_state==-1?'已取消拜师':item.s_state==2?'已结业':null}
                username={item.user_name}
                qq={item.qq}
                phone={item.phone}
                kecheng={item.q_k_name}
                price={item.s_price}
                yidai={item.allStuEnd}
                zaidai={item.allStuIng}
                haopin={item.q_zan}
                img={item.u_img_curl[0]!='h'?`https://www.zhaoqianbei.com/${item.u_img_curl}`:item.u_img_curl}
                company={item.q_company}
                intro={item.q_intro}
                time={item.q_join_time}
                buttontitle={item.s_state==-2?'前辈拒收':item.s_state==-1?'已取消':item.s_state==2?'已结业':null}
              />:item.s_state==1&item.jiaokuan==-1?
                <MyMasters.Denied
                  key={index}
                  title={item.s_state==1&item.jiaokuan==-1?'逾期未付款':null}
                  username={item.user_name}
                  qq={item.qq}
                  phone={item.phone}
                  kecheng={item.q_k_name}
                  price={item.s_price}
                  yidai={item.allStuEnd}
                  zaidai={item.allStuIng}
                  haopin={item.q_zan}
                  img={item.u_img_curl[0]!='h'?`https://www.zhaoqianbei.com/${item.u_img_curl}`:item.u_img_curl}
                  company={item.q_company}
                  intro={item.q_intro}
                  time={item.q_join_time}
                  buttontitle={item.s_state==1&item.jiaokuan==-1?'逾期未付款':null}
                />:null
          }
        />

    )
  }
}
