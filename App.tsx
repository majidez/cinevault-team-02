import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { cineVaultTheme, colors } from './theme';
export default function App() {
 return <PaperProvider theme={cineVaultTheme}><SafeAreaView style={s.safe}><LinearGradient colors={['#273E4D','#111722','#090B12']} style={s.background}><View style={s.mark}><Text style={s.markText}>C</Text></View><Text style={s.brand}>CINEVAULT</Text><Text style={s.kicker}>BUILD YOUR FILM COLLECTION</Text><Text style={s.title}>A home for stories worth keeping.</Text><Text style={s.copy}>Your cinematic film discovery experience starts here.</Text><View style={s.footer}><Text style={s.footerText}>EXPO  ×  REACT NATIVE PAPER</Text></View></LinearGradient></SafeAreaView></PaperProvider>;
}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:colors.background},background:{flex:1,justifyContent:'center',alignItems:'center',padding:30},mark:{width:58,height:58,borderRadius:20,borderWidth:1,borderColor:'#8A7046',alignItems:'center',justifyContent:'center',backgroundColor:'#181711',marginBottom:19},markText:{color:colors.gold,fontSize:30,fontFamily:'serif',fontWeight:'800'},brand:{color:colors.text,fontSize:13,letterSpacing:4,fontWeight:'800'},kicker:{color:colors.gold,fontSize:9,letterSpacing:2,marginTop:37,marginBottom:12,fontWeight:'700'},title:{color:colors.text,fontSize:30,fontWeight:'700',textAlign:'center',lineHeight:37,maxWidth:300},copy:{color:colors.muted,fontSize:14,textAlign:'center',marginTop:13,lineHeight:21,maxWidth:280},footer:{position:'absolute',bottom:25},footerText:{color:'#687080',fontSize:9,letterSpacing:1.4}});
