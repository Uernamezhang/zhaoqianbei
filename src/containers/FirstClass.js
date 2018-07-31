import { Provider,connect } from 'react-redux';
import FirstClass from '../component/FirstClass'
//映射对应组件
const mapStateToProps = (state) => {
  return {
    data:state.firstdatas.data,
    err:state.firstdatas.err
  }
}
const FirstClasss = connect(mapStateToProps)(FirstClass)
export default FirstClasss
