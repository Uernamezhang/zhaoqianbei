import { Provider,connect } from 'react-redux';
import MessagePage , { Message } from '../component/MessagePage';
import Chat from '../component/Chat';
import Search from '../component/Search';
const messagestate = ( state ) => {
  return{
    login:state.loginstates.loginstatu
  }
}
export const Messages = connect(messagestate)(MessagePage)
const messagedatastate = ( state ) => {
  return{
    state:state.messagestates,
    login:state.loginstates.loginstatu
  }
}
export const ChatMessage = connect(messagedatastate)(Message)
const chatstate = ( state ) => {
  return{
    state:state.chatstates,
    userdata:state.mycenterstates
  }
}
export const Chats = connect(chatstate)(Chat)
const searchstate = ( state ) => {
  return{
    state:state.searchstates
  }
}
export const Searchs = connect(searchstate)(Search)
