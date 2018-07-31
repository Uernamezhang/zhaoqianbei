import { Provider,connect } from 'react-redux';
import * as BigClassComponent from '../component/Bigclass';
import BigClassDetails from '../component/BigClassDetails';
//大课课程
const kechengmapStateToProps = (state) => {
  return {
    err:state.bigclassstates.err,
    kechengdata:state.bigclassstates.kechengdata,
    loginstate:state.loginstates
  }
}
export const BigClass = connect(kechengmapStateToProps)(BigClassComponent.BigClassNav)
//PHP前辈列表
const masterphpdata = ( state ) =>{
  return{
    data:state.masterphp.masterdata,
    err:state.masterphp.err,
    page:state.masterphp.page,
    pagedata:state.masterphp.pagedata,
    loginstate:state.loginstates
  }
}
export const MasterPhp = connect(masterphpdata)(BigClassComponent.Php)
//WEB前辈列表
const masterwebdata = ( state ) =>{
  return{
    data:state.masterweb.masterdata,
    err:state.masterweb.err,
    page:state.masterweb.page,
    pagedata:state.masterweb.pagedata
  }
}
export const MasterWeb = connect(masterwebdata)(BigClassComponent.Web)
//WEB前辈列表
const masterjavadata = ( state ) =>{
  return{
    data:state.masterjava.masterdata,
    err:state.masterjava.err,
    page:state.masterjava.page,
    pagedata:state.masterjava.pagedata
  }
}
export const MasterJava = connect(masterjavadata)(BigClassComponent.Java)
//WEB前辈列表
const masternetdata = ( state ) =>{
  return{
    data:state.masternet.masterdata,
    err:state.masternet.err,
    page:state.masternet.page,
    pagedata:state.masternet.pagedata
  }
}
export const MasterNet = connect(masternetdata)(BigClassComponent.Net)
//ANDROID前辈列表
const masterandroiddata = ( state ) =>{
  return{
    data:state.masterandroid.masterdata,
    err:state.masterandroid.err,
    page:state.masterandroid.page,
    pagedata:state.masterandroid.pagedata
  }
}
export const MasterAndroid = connect(masterandroiddata)(BigClassComponent.Android)
//ui前辈列表
const masteruidata = ( state ) =>{
  return{
    data:state.masterui.masterdata,
    err:state.masterui.err,
    page:state.masterui.page,
    pagedata:state.masterui.pagedata
  }
}
export const MasterUi = connect(masteruidata)(BigClassComponent.Ui)
//ui前辈列表
const masterpythondata = ( state ) =>{
  return{
    data:state.masterpython.masterdata,
    err:state.masterpython.err,
    page:state.masterpython.page,
    pagedata:state.masterpython.pagedata
  }
}
export const MasterPython = connect(masterpythondata)(BigClassComponent.Python)
//ui前辈列表
const mastercdata = ( state ) =>{
  return{
    data:state.masterc.masterdata,
    err:state.masterc.err,
    page:state.masterc.page,
    pagedata:state.masterc.pagedata
  }
}
export const MasterC = connect(mastercdata)(BigClassComponent.C)
const masterbigdatadata = ( state ) =>{
  return{
    data:state.masterbigdata.masterdata,
    err:state.masterbigdata.err,
    page:state.masterbigdata.page,
    pagedata:state.masterbigdata.pagedata
  }
}
export const MasterBigData = connect(masterbigdatadata)(BigClassComponent.BigData)

//课程详情
const bigclassdetailsdata = ( state ) =>{
  return{
    data:state.bigclassdetailsstate.data,
    err:state.bigclassdetailsstate.err
  }
}
export const BigClassDetail = connect(bigclassdetailsdata)(BigClassDetails)
