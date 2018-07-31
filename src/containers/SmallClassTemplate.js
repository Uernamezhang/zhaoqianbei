import { Provider,connect } from 'react-redux';
import SmallClassTemplate from '../component/SmallClassTemplate';
//映射对应组件
const mapStateToProps = (state) => {
  return {
    onOff:state.smallmodalstates.onoff
  }
}
const SmallClassTemplates = connect(mapStateToProps)(SmallClassTemplate)
export default SmallClassTemplates
