//服务条款
import React from 'react';
import { styles } from './styles';
import {
  View,
  Text,
  ScrollView,
  Linking
} from 'react-native';
export default class Clause extends React.Component{
  render(){
    return(
      <ScrollView>
        <View style={{backgroundColor: '#fff',padding:10}}>
          <Text style={[styles.MasterTitle,{marginTop: 10}]}>服务条款说明</Text>
          <Text style={{color:'#555',fontSize: 14}}>      欢迎使用找前辈 — IT编程学习网站，包括找老师，找朋友，发布小课，上小课等等。
            找前辈 由成都市梦之门科技有限公司（以下简称“梦之门科技”）开发运营。本服务条款是您与梦之门科技之间的协议，
            并在必要的时候进行修订，
            且无需另行通知。修订后的条款一旦在网页上公布即有效代替原来的服务条款。
          </Text>
          <Text style={[styles.MasterTitle,{marginTop: 10}]}>本网站的使用</Text>
          <Text style={{color:'#555',fontSize: 14}}>      梦之门科技许可您在您的计算机设备上浏览（使用）本网站展示的内容。您在使用 找
            前辈 之前需要注册 找前辈 的账户，同时您需要仔细阅读 找前辈的《隐私策略》和《服务条款》，并在充分阅读和理解了相关协议的约定后提
            交必要的个人及企业/团队信息完成注册。 梦之门科技因此获取的与您个人及您企业/团队相关的任何信息均将依照《隐私策略》中的相关条款
            安全使用。 使用 找前辈 是免费的，但不包括我们推出的高级/付费功能。
          </Text>
          <Text style={{color:'#555',fontSize: 14}}>      如果您有意愿使用 找前辈 的某些付费服务，这将表示您同意支付其中的所有费用。
            在您提交使用付费产品的申请后，梦之门科技将提供经我们认可的第三方在线服务机构的支付方式，并要求您支付相关费用。成功支付后，表明
            您、已经获得使用付费服务的权利并且已经达成此项交易，除非因梦之门科技的原因导致服务无法正常提供，否则我们将不退还您已经支付的服务费。
          </Text>
          <Text style={{color:'#555',fontSize: 14}}>      此外，由于您违反了《隐私策略》或者《服务条款》的相关规定而导致账户不可用，梦之门科技
            将不会退还付费产品的服务费。
          </Text>
          <Text style={{color:'red',fontSize: 14}}>      以下行为是我们坚决反对和禁止的：
          </Text>
          <Text style={{color:'red',fontSize: 12}}>
            （1） 使用找前辈的通信功能发送垃圾信息、频繁骚扰其他用户和造成用户反感的行为。
          </Text>
          <Text style={{color:'red',fontSize: 12}}>
            （2） 对网站服务器进行恶意攻击， 或者采取恶意手段使用 找前辈，造成服务器异常。
          </Text>
          <Text style={{color:'red',fontSize: 12}}>
            （3） 使用 找前辈 从事非法活动或者为非法活动提供帮助。
          </Text>
          <Text style={{color:'rgb(25,160,148)',fontSize: 14}}>      如果您采取了上述行为，我们有权终止/暂停您使用 找前辈 的权利，并将视该行为引起后果的严重性追究责任，并保留通过法律途径追偿合理损失的权利。
          </Text>
          <Text style={[styles.MasterTitle,{marginTop: 10}]}>知识产权声明</Text>
          <Text style={{color:'#555',fontSize: 14}}>      梦之门科技尊重访问本网站的任何个人的隐私信息。当您访问本网站的时候可能被要求提供您个人
            的基本资料(如姓名、电子邮件、电话号码等)，您可以自行选择是否提供。对于您提供的个人信息，梦之门科技将根据中华人民共和国相关法律进行保密
            并严格保管，不会将这些信息以任何方式提供或展示给任何第三方，但下述情况除外：
          </Text>
          <Text style={{color:'rgb(25,160,148)',fontSize: 12}}>
            （一） 当司法机关或行政机关依照法定程序和法定职权要求本网站披露个人资料时，我们将依法提供相关资料。对于此情况下的任何披露，本网站均得免责；
          </Text>
          <Text style={{color:'rgb(25,160,148)',fontSize: 12}}>
            （二） 对于任何由黑客攻击、计算机病毒侵入或发作、或政府管制而造成的暂时性关闭等影响网站正常运营的不可抗力事件所造成的个人资料的泄露、丢失、被盗用或被篡改等，本网站均得免责；
          </Text>
          <Text style={{color:'rgb(25,160,148)',fontSize: 12}}>
            （三） 对于用户将个人密码告知他人或与他人共享注册帐号所导致的任何个人资料泄露，丢失、被盗用或被篡改等,本网站不负任何责任；
          </Text>
          <Text style={{color:'rgb(25,160,148)',fontSize: 12}}>
            （四） 对于与本网站链接的任何其它网站的个人资料泄露，丢失、被盗用或被篡改等事件，本网站不负任何责任。
          </Text>
          <Text style={[styles.MasterTitle,{marginTop: 10}]}>不可抗力及免责</Text>
          <Text style={{color:'#555',fontSize: 14}}>      您理解并同意，在使用本服务的过程中，可能会遇到不可抗力等风险因素，使本服务发生中断。 不可抗力是指不能预见、不能克服并不能避免且对一方或双方造成重大影
            响的客观事件，包括但不限于自然灾害如洪水、地震、瘟疫流行和风暴等以及社会事件如战争、动乱、政府行为等。出现上述情况时，梦之门科技将努力
            在第一时间与相关单位配合，及时进行修复，但是由此给您造成的损失，梦之门科技在法律允许的范围内免责。
          </Text>
          <Text style={{color:'#555',fontSize: 14}}>      在法律允许的范围内，梦之门科技对以下情形导致的服务中断或受阻不承担责任：
          </Text>
          <Text style={{color:'rgb(25,160,148)',fontSize: 12}}>
            （1）受到计算机病毒、木马或其他恶意程序、黑客攻击的破坏；
          </Text>
          <Text style={{color:'rgb(25,160,148)',fontSize: 12}}>
            （2）用户或梦之门科技的电脑软件、系统、硬件和通信线路出现故障
          </Text>
          <Text style={{color:'rgb(25,160,148)',fontSize: 12}}>
            （3）用户操作不当
          </Text>
          <Text style={{color:'rgb(25,160,148)',fontSize: 12}}>
            （4）用户通过非梦之门科技授权的方式使用本服务
          </Text>
          <Text style={{color:'rgb(25,160,148)',fontSize: 12}}>
            （5）其他梦之门科技无法控制或合理预见的情形
          </Text>
          <Text style={{color:'#555',fontSize: 14}}>      您理解并同意，本服务并非为某些特定目的而设计，包括但不限于核设施、军事用途、 医疗设施、交通通讯等重要领域。如果因为软件或服务的原因导致上述操作失败而带来
            的人员伤亡、财产损失和环境破坏等， 梦之门科技不承担法律责任。
          </Text>
          <Text style={[styles.MasterTitle,{marginTop: 10}]}>生效与终止</Text>
          <Text style={{color:'#555',fontSize: 14}}>      使用梦之门科技的服务即视为您已阅读本协议并接受本协议的约束。梦之门科技有权在必要时修改本协议条款，您可以在相关服务页面查阅最新版本的协议条款。本协议条款变更后，如果您继续使用梦之门科技提供的软件或服务，即视为您已接受修改后的协议。 如果您不接受修改后的协议，
            应当停止使用梦之门科技提供的软件或服务。梦之门科技可能会对服务内容进行变更，也可能会中断、中止或终止服务。
          </Text>
          <Text style={{color:'#555',fontSize: 14}}>      如发生下列任何一种情形，梦之门科技有权不经通知而中断或终止向您提供的服务：
          </Text>
          <Text style={{color:'rgb(25,160,148)',fontSize: 12}}>
            （1）根据法律规定您应提交真实信息，而您提供的个人资料不真实、或与注册时信息不一致又未能提供合理证明；
          </Text>
          <Text style={{color:'rgb(25,160,148)',fontSize: 12}}>
            （2）您违反相关法律法规或本协议的约定；
          </Text>
          <Text style={{color:'rgb(25,160,148)',fontSize: 12}}>
            （3）按照法律规定或主管部门的要求；
          </Text>
          <Text style={{color:'rgb(25,160,148)',fontSize: 12}}>
            （4）出于安全的原因或其他必要的情形。
          </Text>
          <Text style={{color:'red',fontSize: 14}}>      若您使用了梦之门科技提供的付费服务，但您未按时足额付费，梦之门科技有权中断、中止或终止提供相关服务。
          </Text>
          <Text style={[styles.MasterTitle,{marginTop: 10}]}>准据法和管辖权</Text>
          <Text style={{color:'#555',fontSize: 14}}>      本网站内容及本使用条款的解释和适用均适用中华人民共和国法律，由于使用本网站而产生的一切纠纷，除另有约定，均由中华人民共和国(梦之门科技所在地)人民法院管辖。如果本使用条款中的部分条款被有关机关认定为无效，则此无效部分并不影响本使用条款其他部分的效力，其他部分仍然有效。
          </Text>
          <Text style={[styles.MasterTitle,{marginTop: 10}]}>其他</Text>
          <Text style={{color:'#555',fontSize: 14}}>      如果您对本协议或本服务有意见或建议，可与梦之门科技客户服务部门联系，联系方式为：
            <Text
              style={{color:'blue'}}
              onPress={()=>
                Linking.openURL('mailto:61819905@qq.com')
              }>
              61819905@qq.com
            </Text>
            ，我们会给予您必要的帮助。
          </Text>
          <Text style={{alignSelf: 'flex-end',marginTop: 20}}>
            最后更新：2017年7月7日
          </Text>
        </View>
      </ScrollView>
    )
  }
}
