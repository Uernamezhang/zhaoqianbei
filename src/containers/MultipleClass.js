import { Provider,connect } from 'react-redux';
import MultipleClass from '../component/MultipleClass'
//映射对应组件
const mapStateToProps = (state) => {
  return {
    data:state.multipledatas.data,
    err:state.multipledatas.err
  }
}
const MultipleClasss = connect(mapStateToProps)(MultipleClass)
export default MultipleClasss
