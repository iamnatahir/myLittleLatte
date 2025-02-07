import { View, Text,StyleSheet, ImageBackground , Pressable} from 'react-native'
import icedcoffeeimg from '@/assets/images/coldcoffeee.png'
import {Link} from 'expo-router';
const app = () => {
  return (
    <ImageBackground resizeMode='cover' source={icedcoffeeimg} style={styles.image}>
      <View style={styles.container}>
      <Text style={styles.title}> Little Latte House</Text>


      <Link href="/contact" asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttontext}>
        Contact Us
        </Text>
      </Pressable>
      </Link>


      <Link href="/menu" asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttontext}>
       Our Menu
        </Text>
      </Pressable>
      </Link>


    </View>
    </ImageBackground>
    
  )
  
}

export default app;


const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  title:{
    color:'white',
    fontSize:35,
    fontWeight:'bold',
    textAlign:"center",
    backgroundColor:'rgba(0,0,0,0.5)',
    width:'100%',
    marginBottom:90,
    padding:10
    
  },
  image:{
    resizeMode:'cover',
    height:'100%',
    width:'100%',
    flex:1,
    justifyContent:'center',

  },
  link:{
    color:'white',
    fontSize:42,
    fontWeight:'bold',
    textAlign:"center",
    textDecorationLine:"underline",
    padding:4,
    backgroundColor:'rgba(0,0,0,0.5)',
    width:'100%',
    
  },
  buttontext:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
    textAlign:"center",
    padding:4,
  },
  button:{
   justifyContent:'center',
    height:60,
    borderRadius:20,
    backgroundColor:'rgba(0,0,0,0.75)',
    padding:6,
    marginBottom:50,
    width:150

  }
})