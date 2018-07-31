import { Provider,connect } from 'react-redux';
import Lady from '../component/Lady';
import Rests from '../component/Rests';
import Man from '../component/Man';
const ladystate = (state) => {
  return{
    data:state.ladydatas.data,
    err:state.ladydatas.err,
    loginstata:state.loginstates.loginstatu
  }
}
export const Ladys = connect(ladystate)(Lady)
const manstate = (state) => {
  return{
    data:state.mandatas.data,
    err:state.mandatas.err,
    loginstata:state.loginstates.loginstatu
  }
}
export const Mans = connect(manstate)(Man)
const resstate = (state) => {
  return{
    data:state.restssdatas.data,
    err:state.restssdatas.err,
    loginstata:state.loginstates.loginstatu
  }
}
export const Restss = connect(resstate)(Rests)
