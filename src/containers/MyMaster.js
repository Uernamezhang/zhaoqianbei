import { Provider, connect } from 'react-redux';
import { Study , Over } from '../component/MyMasters';
import MyAssignment from '../component/MyAssignment';
//求学中
const masterstudystate = ( state ) => {
  return{
    state:state.mymasterstudystates
  }
}
export const MyMasterStudy = connect(masterstudystate)(Study)
const masteroverstate = ( state ) => {
  return{
    state:state.mymasterstudystates
  }
}
export const MyMasterOver = connect(masteroverstate)(Over)
//我的任务
const myassignmentstate = ( state ) => {
  return{
    state:state.myassignstates
  }
}
export const MyAssignments = connect(myassignmentstate)(MyAssignment)
