//已结束
import React from 'react';
import SmallClassTemplates from '../containers/SmallClassTemplate';
import Pullref from './Pullref';
import Loadings from '../containers/Loading'
import {
  Text,
  View,
  ScrollView,
  RefreshControl,
  Image
} from 'react-native'
export default class OverClass extends React.Component {
  network(){
    fetch('https://www.zhaoqianbei.com/api/Index/xiaoke',{
      method:'GET'
    }).then((response)=>{
      if(response.ok===true){
        return response.json()
      }
    }).then((responseData)=>{
      this.props.dispatch({
        type:'SMALLCLASSOVER_DATA',
        data:responseData.data.data.xiaokeFinishs
      })
    }).catch(
      (e)=>{
       this.props.dispatch({
          type:'SMALLCLASSOVER_ERR',
        })
      }
    )
  }
  componentDidMount(){
    this.network()
  }
  render() {
    const { data , err } = this.props
    return (
      err===false?<Pullref networks={()=>this.network()}/>:
      data.length===undefined?<Loadings/>:
      <SmallClassTemplates Data={data}/>
    )
  }
}
