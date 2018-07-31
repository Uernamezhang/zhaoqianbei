import { Provider,connect } from 'react-redux';
import Set from '../component/Set';
const mapStateToProps = (state) => {
  return{
    huancunoff:state.setstates.off,
    yijianoff:state.setstates.yijianoff,
    regoff:state.setstates.regoff,
    loginstatu:state.loginstates.loginstatu
  }
}
const Sets = connect(mapStateToProps)(Set)
export default Sets
