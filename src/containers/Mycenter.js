import { Provider,connect } from 'react-redux';
import { MyCenterBox , MyCenters } from '../component/Mycenter';
const mycenterstate = ( state ) => {
  return{
    login:state.loginstates.loginstatu
  }
}
export const MyCenterContainer = connect(mycenterstate)(MyCenterBox)
const mycenter = ( state ) => {
  return{
    state:state.mycenterstates
  }
}
export const MyCenter = connect(mycenter)(MyCenters)
