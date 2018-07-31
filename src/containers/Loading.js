import { Provider,connect } from 'react-redux';
import Loading from '../component/Loading';
//映射对应组件
const mapStateToProps = (state) => {
  return {
    text:state.loadingstates.text
  }
}
const Loadings = connect(mapStateToProps)(Loading)
export default Loadings
