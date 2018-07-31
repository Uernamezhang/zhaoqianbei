//修改密码
// import React from 'react';
// import { styles } from './styles';
// import {
//   View,
//   Text,
//   Button
// } from 'react-native';
// import {
//   MKTextField,
//   MKColor,
//   mdl,
// } from 'react-native-material-kit';
// const OldPassword = mdl.Textfield.textfieldWithFloatingLabel()
//   .withPassword(true)
//   .withPlaceholder('输入旧密码（请填写6到12位密码）')
//   .withHighlightColor('rgb(25,160,148)')
//   .withStyle({height:50})
//   .withTextInputStyle({flex: 1,fontSize:14})
//   // .withOnEndEditing((e) => alert(e.nativeEvent.text))
//   // .withOnSubmitEditing((e) => alert('SubmitEditing', e.nativeEvent.text))
//   // .withOnChangeText((e) => alert('ChangeText', e))
//   .build();
// const NewPassword = mdl.Textfield.textfieldWithFloatingLabel()
//    .withPassword(true)
//    .withPlaceholder('输入新密码（请填写6到12位密码）')
//    .withHighlightColor('rgb(25,160,148)')
//    .withStyle({height:50})
//    .withTextInputStyle({flex: 1,fontSize:14})
//     // .withOnEndEditing((e) => alert(e.nativeEvent.text))
//     // .withOnSubmitEditing((e) => alert('SubmitEditing', e.nativeEvent.text))
//     // .withOnChangeText((e) => alert('ChangeText', e))
//   .build();
//   const AffirmPassword = mdl.Textfield.textfieldWithFloatingLabel()
//      .withPassword(true)
//      .withPlaceholder('确认新密码（请填写6到12位密码）')
//      .withHighlightColor('rgb(25,160,148)')
//      .withStyle({height:50})
//      .withTextInputStyle({flex: 1,fontSize:14})
//       // .withOnEndEditing((e) => alert(e.nativeEvent.text))
//       // .withOnSubmitEditing((e) => alert('SubmitEditing', e.nativeEvent.text))
//       // .withOnChangeText((e) => alert('ChangeText', e))
//     .build();
// export default class ChangePassword extends React.Component{
//   render(){
//     return(
//       <View>
//         <Text style={{color:'red',fontSize:12,textAlign:'center'}}>通过大写字母+小写字母+数字+特殊字符（,./~!@#$%^*）的组合，能有效提高密码强度！</Text>
//         <View style={[styles.StudyBox,{paddingBottom:20,paddingRight: 20,paddingLeft:20}]}>
//           <Text style={styles.StudyTextTitle}>Skriilex</Text>
//           <OldPassword/>
//           <NewPassword/>
//           <AffirmPassword/>
//           <View style={{height:40,marginTop:40}}>
//             <Button title='提交' color='rgb(25,160,148)'/>
//           </View>
//           <View style={{height:40,marginTop:10}}>
//             <Button title='重置' color='#999'/>
//           </View>
//         </View>
//       </View>
//
//     )
//   }
// }
