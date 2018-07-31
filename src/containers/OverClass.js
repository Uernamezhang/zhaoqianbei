import { Provider,connect } from 'react-redux';
import OverClass from '../component/OverClass'
//映射对应组件
const mapStateToProps = (state) => {
  return {
    data:state.overdatas.data,
    err:state.overdatas.err
  }
}
const OverClasss = connect(mapStateToProps)(OverClass)
export default OverClasss
