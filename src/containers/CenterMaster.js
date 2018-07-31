//我是前辈
import { Provider,connect } from 'react-redux';
import StudentAdministration from '../component/StudentAdministration';
const studentstate = (state) => {
  return {
    state:state.studentadministate
  }
}
export const StudentAdministrations = connect(studentstate)(StudentAdministration)
