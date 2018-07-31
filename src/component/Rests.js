import React from 'react';
import LuckTemplate from './LuckTemplate';
import Pullref from './Pullref';
import Loadings from '../containers/Loading'
import {
  View,
  Text
} from 'react-native'
export default class Rests extends React.Component{
  network(){
    fetch('https://www.zhaoqianbei.com/api/Index/yuanfen',{
      method:'GET'
    }).then((response)=>{
      if(response.ok===true){
        this.props.dispatch({
          type:'RESTS_TRY'
        })
        return response.json()
      }
    }).then((responseData)=>{
      this.props.dispatch({
        type:'RESTS_DATA',
        data:responseData.data.data.yuanfenOthers
      })
    }).catch(
      (e)=>{
        this.props.dispatch({
          type:'RESTS_ERR'
        })
      }
    )
  }
  componentDidMount(){
    this.network()
  }
  render(){
    const { data , err , loginstata } = this.props
    return(
      err===false?<Pullref networks={()=>this.network()}/>:
      data.length===undefined?<Loadings/>:
      <LuckTemplate
        Data={data}
        navigate={this.props.navigate}
        loginstate={loginstata}
      />
    )
  }
}
