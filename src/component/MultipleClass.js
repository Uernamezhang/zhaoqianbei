//多次开课
import React from 'react';
import SmallClassTemplates from '../containers/SmallClassTemplate';
import Pullref from './Pullref';
import Loadings from '../containers/Loading';
import {
  Text,
  ScrollView,
  RefreshControl,
  Image,
  View
} from 'react-native'
export default class MultipleClass extends React.Component {
  network(){
    fetch('https://www.zhaoqianbei.com/api/Index/xiaoke',{
      method:'GET'
    }).then((response)=>{
      if(response.ok===true){
        this.props.dispatch({
          type:'SMALLCLASSMULTIPLE_TRY'
        })
        return response.json()
      }
    }).then((responseData)=>{
      this.props.dispatch({
        type:'SMALLCLASSMULTIPLE_DATA',
        data:responseData.data.data.xiaokeRestarts
      })
    }).catch(
      (e)=>{
          this.props.dispatch({
          type:'SMALLCLASSMULTIPLE_ERR',
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
