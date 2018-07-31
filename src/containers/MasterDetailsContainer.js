//前辈详情
import { Provider,connect } from 'react-redux';
import MasterDetails from '../component/MasterDetails';
//映射对应组件
const mapStateToProps = (state) => {
  return {
    offsetYColor:state.Master.offsetY,
    error:state.Master.error,
    projects:state.Master.masterdetailsdata.projects,
    qianbeiDetail:state.Master.masterdetailsdata.qianbeiDetail,
    shitus:state.Master.masterdetailsdata.shitus,
    zuopings:state.Master.masterdetailsdata.zuopings
  }
}
const MasterDetail = connect(mapStateToProps)(MasterDetails)
export default MasterDetail
