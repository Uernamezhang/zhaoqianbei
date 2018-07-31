import { Provider,connect } from 'react-redux';
import * as Login from '../component/Register'
//登录
const loginstate = ( state ) => {
  return{
    state:state.loginstates
  }
}
export const Logins = connect(loginstate)(Login.Login)
//注册
const registerstate = ( state ) =>{
  return{
    phoneval:state.registerstates.phoneval,
    code:state.registerstates.code,
    settimer:state.registerstates.timer,
    sendcode:state.registerstates.sendcode
  }
}
export const Registers = connect(registerstate)(Login.Register)
//找回密码
const retrievestate = ( state ) =>{
  return{
    phoneval:state.retrievestates.phoneval,
    code:state.retrievestates.code,
    settimer:state.retrievestates.timer,
    sendcode:state.retrievestates.sendcode
  }
}
export const RetrievePasswod = connect(retrievestate)(Login.RetrievePasswod)
