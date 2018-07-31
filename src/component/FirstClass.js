//首次开课
import React from 'react';
import SmallClassTemplates from '../containers/SmallClassTemplate';
import Pullref from './Pullref';
import Loadings from '../containers/Loading';
import { RefreshControl } from 'react-native';
export default class FirstClass extends React.Component {
  network(){
    fetch('https://www.zhaoqianbei.com/api/Index/xiaoke#0',{
      method:'GET'
    }).then((response)=>{
      if(response.ok===true){
        this.props.dispatch({
          type:'SMALLCLASSFRIST_TRY'
        })
        return response.json()
      }
    }).then((responseData)=>{
      this.props.dispatch({
        type:'SMALLCLASSFIRST_DATA',
        data:responseData.data.data.xiaokeFirsts
      })
    }).catch(
      (e)=>{
          this.props.dispatch({
          type:'SMALLCLASSFIRST_ERR',
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
