import { Provider,connect } from 'react-redux';
import { MainScreenNavigator } from '../../App';
const TabState = (state) => {
  return {
    num:state.messagestates.num
  }
}
export const MainScreenNavigators = connect(TabState)(MainScreenNavigator)
