const bigclassstate = {
  err:true,
  kechengdata:{}
 }
export const bigclassstates = (state=bigclassstate,action) => {
  switch(action.type){
    case 'BIGCLASS_ERR':
    return{
      ...state,
      err:false
    }
    case 'BIGCLASS_TRY':
    return{
      ...state,
      err:true
    }
    case 'BIGCLASS_KECHENG':
    return{
      ...state,
      kechengdata:action.kechengdata
    }
    default:
    return state
  }
}
//PHP前辈列表
const phpstate = {
  masterdata:[],
  err:true,
  page:1,
  pagedata:[]
 }
export const masterphp = (state=phpstate,action) => {
  switch(action.type){
    case 'BIGCLASS_MASTERPHPDATA':
    return{
      ...state,
      masterdata:action.masterdata
    }
    case 'MASTERPHPDATA_TRY':
    return{
      ...state,
      err:true
    }
    case 'MASTERPHPDATA_ERR':
    return{
      ...state,
      err:false
    }
    case 'PAGE_PHPDATA':
    return{
      ...state,
      page:state.page+1
    }
    case 'PAGE_PHPDATALENG':
    return{
      ...state,
      pagedata:action.pagedata
    }
    default:
    return state
  }
}
//WEb前辈列表
const webstate = {
  masterdata:[],
  err:true,
  page:1,
  pagedata:[]
 }
export const masterweb = (state=webstate,action) => {
  switch(action.type){
    case 'BIGCLASS_MASTERWEBDATA':
    return{
      ...state,
      masterdata:action.masterdata
    }
    case 'MASTERWEBDATA_TRY':
    return{
      ...state,
      err:true
    }
    case 'MASTERWEBDATA_ERR':
    return{
      ...state,
      err:false
    }
    case 'PAGE_WEBDATA':
    return{
      ...state,
      page:state.page+1
    }
    case 'PAGE_WEBDATALENG':
    return{
      ...state,
      pagedata:action.pagedata
    }
    default:
    return state
  }
}

//java前辈列表
const javastate = {
  masterdata:[],
  err:true,
  page:1,
  pagedata:[]
 }
export const masterjava = (state=javastate,action) => {
  switch(action.type){
    case 'BIGCLASS_MASTERJAVADATA':
    return{
      ...state,
      masterdata:action.masterdata
    }
    case 'MASTERJAVADATA_TRY':
    return{
      ...state,
      err:true
    }
    case 'MASTERJAVADATA_ERR':
    return{
      ...state,
      err:false
    }
    case 'PAGE_JAVADATA':
    return{
      ...state,
      page:state.page+1
    }
    case 'PAGE_JAVADATALENG':
    return{
      ...state,
      pagedata:action.pagedata
    }
    default:
    return state
  }
}
//net前辈列表
const netstate = {
  masterdata:[],
  err:true,
  page:1,
  pagedata:[]
 }
export const masternet = (state=netstate,action) => {
  switch(action.type){
    case 'BIGCLASS_MASTERNETDATA':
    return{
      ...state,
      masterdata:action.masterdata
    }
    case 'MASTERNETDATA_TRY':
    return{
      ...state,
      err:true
    }
    case 'MASTERNETDATA_ERR':
    return{
      ...state,
      err:false
    }
    case 'PAGE_NETDATA':
    return{
      ...state,
      page:state.page+1
    }
    case 'PAGE_NETDATALENG':
    return{
      ...state,
      pagedata:action.pagedata
    }
    default:
    return state
  }
}
//android前辈列表
const androidstate = {
  masterdata:[],
  err:true,
  page:1,
  pagedata:[]
 }
export const masterandroid = (state=androidstate,action) => {
  switch(action.type){
    case 'BIGCLASS_MASTERANDROIDDATA':
    return{
      ...state,
      masterdata:action.masterdata
    }
    case 'MASTERANDROIDDATA_TRY':
    return{
      ...state,
      err:true
    }
    case 'MASTERANDROIDDATA_ERR':
    return{
      ...state,
      err:false
    }
    case 'PAGE_ANDROIDDATA':
    return{
      ...state,
      page:state.page+1
    }
    case 'PAGE_ANDROIDDATALENG':
    return{
      ...state,
      pagedata:action.pagedata
    }
    default:
    return state
  }
}
//ui前辈列表
const uistate = {
  masterdata:[],
  err:true,
  page:1,
  pagedata:[]
 }
export const masterui = (state=uistate,action) => {
  switch(action.type){
    case 'BIGCLASS_MASTERUIDATA':
    return{
      ...state,
      masterdata:action.masterdata
    }
    case 'MASTERUIDATA_TRY':
    return{
      ...state,
      err:true
    }
    case 'MASTERUIDATA_ERR':
    return{
      ...state,
      err:false
    }
    case 'PAGE_UIDATA':
    return{
      ...state,
      page:state.page+1
    }
    case 'PAGE_UIDATALENG':
    return{
      ...state,
      pagedata:action.pagedata
    }
    default:
    return state
  }
}
//python前辈列表
const pythonstate = {
  masterdata:[],
  err:true,
  page:1,
  pagedata:[]
 }
export const masterpython = (state=pythonstate,action) => {
  switch(action.type){
    case 'BIGCLASS_MASTERPYTHONDATA':
    return{
      ...state,
      masterdata:action.masterdata
    }
    case 'MASTERPYTHONDATA_TRY':
    return{
      ...state,
      err:true
    }
    case 'MASTERPYTHONDATA_ERR':
    return{
      ...state,
      err:false
    }
    case 'PAGE_PYTHONDATA':
    return{
      ...state,
      page:state.page+1
    }
    case 'PAGE_PYTHONDATALENG':
    return{
      ...state,
      pagedata:action.pagedata
    }
    default:
    return state
  }
}
//c前辈列表
const cstate = {
  masterdata:[],
  err:true,
  page:1,
  pagedata:[]
 }
export const masterc = (state=cstate,action) => {
  switch(action.type){
    case 'BIGCLASS_MASTERCDATA':
    return{
      ...state,
      masterdata:action.masterdata
    }
    case 'MASTERCDATA_TRY':
    return{
      ...state,
      err:true
    }
    case 'MASTERCDATA_ERR':
    return{
      ...state,
      err:false
    }
    case 'PAGE_CDATA':
    return{
      ...state,
      page:state.page+1
    }
    case 'PAGE_CDATALENG':
    return{
      ...state,
      pagedata:action.pagedata
    }
    default:
    return state
  }
}
//大数据前辈列表
const bigdatastate = {
  masterdata:[],
  err:true,
  page:1,
  pagedata:[]
 }
export const masterbigdata = (state=bigdatastate,action) => {
  switch(action.type){
    case 'BIGCLASS_MASTERBIGDATA':
    return{
      ...state,
      masterdata:action.masterdata
    }
    case 'MASTERCBIGDATA_TRY':
    return{
      ...state,
      err:true
    }
    case 'MASTERBIGDATA_ERR':
    return{
      ...state,
      err:false
    }
    case 'PAGE_BIGDATA':
    return{
      ...state,
      page:state.page+1
    }
    case 'PAGE_BIGDATADATALENG':
    return{
      ...state,
      pagedata:action.pagedata
    }
    default:
    return state
  }
}
//Loding正在加载
let loadingstate = {
  text :'',
}
export const loadingstates = (state=loadingstate,action) => {
  switch(action.type){
    case 'LOADING_ANIMATED':
    return {
      ...state,
      text:state.text+=action.text
    }
    case 'LOADING_CLEAR':
    return{
      ...state,
      text:''
    }
    default:
    return state
  }
}
//缘分
let mandata = {
  data:{},
  err:true
}
export const mandatas = (state=mandata,action) => {
  switch(action.type){
    case 'MANS_DATA':
      return{
        ...state,
        data:action.data
      }
    case 'MANS_ERR':
      return{
        ...state,
        err:false
      }
    case 'MANS_TRY':
      return{
        ...state,
        err:true
      }
    default:
      return state
  }
}
let ladydata = {
  data:{},
  err:true
}
export const ladydatas = (state=ladydata,action) => {
  switch (action.type) {
    case "LADYS_DATA":
      return {
        ...state,
        data:action.data
      }
    case 'LADYS_ERR':
      return {
        ...state,
        err:false
      }
    case 'LADYS_TRY':
      return{
        ...state,
        err:true
      }
    default:
      return state
  }
}
let restssdata = {
  data:{},
  err:true
}
export const restssdatas = (state=restssdata,action) => {
  switch (action.type) {
    case 'RESTS_DATA':
      return {
        ...state,
        data:action.data
      }
    case 'RESTS_ERR':
      return {
        ...state,
        err:false
      }
    case 'RESTS_TRY':
      return{
        ...state,
        err:true
      }
    default:
      return state
  }
}

//前辈详情导航栏颜色状态
let MasterStatubar = {
  offsetY:'rgba(250,250,250,0)',
  masterdetailsdata:{},
  error:null
}
export const Master = (state = MasterStatubar, action) => {
  switch (action.type) {
    case 'MSTER_STATUBARBOTTOM':
      return {
        ...state,
        offsetY:'rgb(25,160,148)'
      }
    case 'MSTER_STATUBARTOP':
      return {
        ...state,
        offsetY:'rgba(250,250,250,0)'
      }
    case 'MASTERDETAILS_DATA':
      return {
        ...state,
        masterdetailsdata:action.data
      }
    case 'WILLUNMOUNT':
      return {
        ...state,
        masterdetailsdata:{}
      }
    case 'MASTERDETAILS_ERROR':
      return {
        ...state,
        error:false
      }
    case 'MASTERDETAILS_TRY':
      return {
        ...state,
        error:true
      }
    default:
      return state
  }
}
//课程详情
let bigclassdetails = {
  data:{},
  err:true
}
export const bigclassdetailsstate = (state=bigclassdetails,action) => {
  switch(action.type){
    case 'BIGACLASSDETAILS_DATA':
    return {
      ...state,
      data:action.data
    }
    case 'BIGACLASSDETAILS_ERR':
    return {
      ...state,
      err:false
    }
    case 'BIGACLASSDETAILS_TRY':
    return {
      ...state,
      err:true
    }
    case 'WILLUNMOUNT_CLEARBIGDATA':
    return {
      ...state,
      data:{}
    }
    default:
    return state
  }
}
//设置
let setstate = {
  off:false,
  yijianoff:false,
  regoff:false
}
export const setstates = (state=setstate,action) => {
  switch(action.type){
    case 'MODAL_TRUE':
      return{
        ...state,
        off:true
      }
    case 'MODAL_FALSE':
      return{
        ...state,
        off:false
      }
    case 'MODAL_YIJIANTRUE':
      return{
        ...state,
        yijianoff:true
      }
    case 'MODAL_YIJIANFALSE':
      return{
        ...state,
        yijianoff:false
      }
    case 'MODAL_REGTRUE':
      return{
        ...state,
        regoff:true
      }
    case 'MODAL_REGFALSE':
      return{
        ...state,
        regoff:false
      }
    default:
      return state
  }
}
//小课
let firstdata = {
  data:{},
  err:null
}
export const firstdatas = (state=firstdata,action)=>{
  switch (action.type){
    case 'SMALLCLASSFIRST_DATA':
      return{
        ...state,
        data:action.data
      }
    case 'SMALLCLASSFIRST_ERR':
      return{
        ...state,
        err:false
      }
    case 'SMALLCLASSFRIST_TRY':
      return{
        ...state,
        err:true
      }
    default:
      return state
  }
}
let multipledata = {
  data:{},
  err:null
}
export const multipledatas = (state=multipledata,action)=>{
  switch (action.type) {
    case 'SMALLCLASSMULTIPLE_DATA':
      return{
        ...state,
        data:action.data
      }
    case 'SMALLCLASSMULTIPLE_ERR':
      return{
        ...state,
        err:false
      }
    case 'SMALLCLASSMULTIPLE_TRY':
      return{
        ...state,
        err:true
      }
    default:
      return state
  }
}
let overdata = {
  data:{},
  err:true
}
export const overdatas = (state = overdata,action)=>{
  switch (action.type){
    case 'SMALLCLASSOVER_DATA':
      return {
        ...state,
        data:action.data
      }
    case 'SMALLCLASSOVER_ERR':
      return{
        ...state,
        err:false
      }
    case 'SMALLCLASSOVER_TRY':
      return{
        ...state,
        err:true
      }
    default:
      return state
  }
}
//小课弹出层
let smallmodalstate = {
  onoff:false
}
export const smallmodalstates = (state=smallmodalstate,action)=>{
  switch(action.type){
    case 'MODAL_ONOFF_TRUE':
    return{
      ...state,
      onoff:true
    }
    case 'MODAL_ONOFF_FALSE':
    return{
      ...state,
      onoff:false
    }
    default:
    return state
  }
}
//登录
let loginstate = {
  phoneval:'',
  passwordval:'',
  loginstatu:false
}
export const loginstates = (state = loginstate,action) => {
  switch(action.type){
    case 'LOGOINPHONE_VAL':
    return{
      ...state,
      phoneval:action.val
    }
    case 'LOGOINPASSWORD_VAL':
    return{
      ...state,
      passwordval:action.val
    }
    case 'LOGINSTATU':
    return{
      ...state,
      loginstatu:true
    }
    case 'LOGINSTATU_FALSE':
    return{
      ...state,
      loginstatu:false
    }
    default:
    return state
  }
}
//注册
let registerstate = {
  phoneval:'',
  code:'',
  timer:120,
  sendcode:false
}
export const registerstates = (state = registerstate,action) => {
  switch(action.type){
    case 'REGINPHONE_VAL':
    return{
      ...state,
      phoneval:action.val
    }
    case 'REGCODE':
    return{
      ...state,
      code:action.val
    }
    case 'SENDCODE_TRUE':
    return{
      ...state,
      sendcode:true
    }
    case 'SENDCODE_FALSE':
    return{
      ...state,
      sendcode:false,
      timer:action.num
    }
    case 'SETTIMER':
    return{
      ...state,
      timer:action.num
    }
    default:
    return state
  }
}
//找回密码
let retrievestate = {
  phoneval:'',
  code:'',
  timer:120,
  sendcode:false
}
export const retrievestates = (state = retrievestate,action) => {
  switch(action.type){
    case 'RETINPHONE_VAL':
    return{
      ...state,
      phoneval:action.val
    }
    case 'RETCODE':
    return{
      ...state,
      code:action.val
    }
    case 'RETSENDCODE_TRUE':
    return{
      ...state,
      sendcode:true
    }
    case 'RETSENDCODE_FALSE':
    return{
      ...state,
      sendcode:false,
      timer:action.num
    }
    case 'RETSETTIMER':
    return{
      ...state,
      timer:action.num
    }
    default:
    return state
  }
}
//消息
let messagestate = {
  data:[],
  num:0
}
export const messagestates = (state=messagestate,action) => {
  switch(action.type){
    case 'MESSAGE_DATA':
    return{
      ...state,
      data:action.data
    }
    case 'MESSAGE_NUM':
    return{
      ...state,
      num:action.num
    }
    default :
    return state
  }
}
//聊天
let chatstate = {
  inputviewheight:30,
  chatmessage:'',
  msgdata:[],
  senderr:false,
  sendstate:0
}
export const chatstates = (state = chatstate,action) => {
  switch(action.type){
    case 'INPUTVIEW_HEIGHT':
    return{
      ...state,
      inputviewheight:action.height
    }
    case 'CHAT_MESSAGE':
    return{
      ...state,
      chatmessage:action.val
    }
    case 'CHATLIST_DATA':
    return{
      ...state,
      msgdata:action.data
    }
    case 'SEND_ERR':
    return{
      ...state,
      sendstate:1
    }
    case 'SEND_TRY':
    return{
      ...state,
      sendstate:0
    }
    return{
      ...state,
      msgdata:action.data
    }
    default:
    return state
  }
}
//搜素
let searchstate = {
  data:[]
}
export const searchstates = (state=searchstate,action) => {
  switch(action.type){
    case 'SEARCH_DATA':
    return{
      ...state,
      data:action.data
    }
    default:
    return state
  }
}
//个人中心
let mycenterstate = {
  data:{},
  network:true
}
export const mycenterstates = (state = mycenterstate,action) => {
  switch(action.type){
    case 'MYCENTER_DATA':
    return{
      ...state,
      data:action.data
    }
    case 'MYCENTER_TRUE':
    return{
      ...state,
      network:true
    }
    case 'MYCENTER_ERR':
    return{
      ...state,
      network:false
    }
    default:
    return state
  }
}
//我的前辈
let mymasterstudystate = {
  data:[]
}
export const mymasterstudystates = (state = mymasterstudystate,action) => {
  switch (action.type) {
    case 'STUDY_DATA':
      return{
        ...state,
        data:action.data
      }
    default:
      return state
  }
}
//我的任务
let myassignstate = {
  data:[]
}
export const myassignstates = (state = myassignstate,action) => {
  switch(action.type){
    case 'MYASSIGNMENT_DATA':
    return{
      ...state,
      data:action.data
    }
    default:
    return state
  }
}
//拜师管理
let studentadmini = {
  data:[]
}
export const studentadministate = (state = studentadmini,action) => {
  switch(action.type){
    case 'STUDENT_DATA':
    return{
      ...state,
      data:action.data
    }
    default:
    return state
  }
}
