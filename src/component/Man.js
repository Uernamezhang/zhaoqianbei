import React from 'react';
import LuckTemplate from './LuckTemplate';
import Pullref from './Pullref';
import Loadings from '../containers/Loading'
import{
  View,
  Text,
} from 'react-native';
export default class Man extends React.Component{
  network(){
    fetch('https://www.zhaoqianbei.com/api/Index/yuanfen',{
      method:'GET'
    }).then((response)=>{
      if(response.ok===true){
        this.props.dispatch({
          type:'MANS_TRY'
        })
        return response.json()
      }
    }).then((responseData)=>{
      this.props.dispatch({
        type:'MANS_DATA',
        data:responseData.data.data.yuanfenNans
      })
    }).catch(
      (e)=>{
        this.props.dispatch({
          type:'MANS_ERR'
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
