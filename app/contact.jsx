import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import contactBg from '@/assets/images/img2.webp'; 
import { Link } from 'expo-router';
import { Linking } from 'react-native';

const ContactScreen = () => {
  const handlePhonePress = () => {
    Linking.openURL('tel:03060879970');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:support@coffeeshop.com');
  };

  return (
    <ImageBackground resizeMode="cover" source={contactBg} style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}>Contact Us</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>📍 123 Coffee Street, Java City</Text>

          <Pressable onPress={handlePhonePress}>
            <Text style={[styles.infoText, styles.linkText]}> 0306 08786237</Text>
          </Pressable>

          <Pressable onPress={handleEmailPress}>
            <Text style={[styles.infoText, styles.linkText]}>support@coffeeshop.com</Text>
          </Pressable>

          <Text style={styles.infoText}>🕒 Mon-Sun: 8AM - 12PM</Text>
        </View>

        <Link href="/" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Go Home</Text>
          </Pressable>
        </Link>
      </View>
    </ImageBackground>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    marginBottom: 20,
    paddingVertical: 10,
  },
  image: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  infoContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 40,
    width: '80%',
    alignItems: 'center',
  },
  infoText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  linkText: {
    textDecorationLine: 'underline',
    color: '#FFD700', // Gold color for emphasis
  },
  button: {
    justifyContent: 'center',
    height: 60,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 6,
    width: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
