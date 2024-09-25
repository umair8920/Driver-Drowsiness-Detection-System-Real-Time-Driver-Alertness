import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const About = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.header}>
        <Image 
          source={require('./assets/background.jpg')}// Replace with your image URL
          style={styles.headerImage}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>ABOUT US</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionText}>
        In our Driver Drowsiness Detection project, we developed an advanced system that leverages sensors and machine learning algorithms to monitor a driver's alertness in real-time.  
        </Text>
        <Image 
          source={require('./assets/about1.jpeg')} // Replace with your image URL
          style={styles.sectionImage}
        />
      </View>

      <View style={styles.section}>
        <Image 
          source={require('./assets/about.jpg')}// Replace with your image URL
          style={styles.sectionImage1}
        />
        <Text style={styles.sectionText}>
         
In our Driver Emotion Indicating Fatigue project, we designed a sophisticated system that uses facial recognition and emotion analysis to detect early signs of driver fatigue. 
By monitoring and interpreting changes in facial expressions and emotional states, our technology can identify indicators of tiredness and reduced alertness. 
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionText}>
        We developed a cutting-edge system capable of detecting hazardous fog conditions in real-time. 
        By employing advanced image processing techniques, including dehazing algorithms, 
        our system can accurately identify the presence and severity of fog on the road ahead. 
        When fog levels reach a critical threshold, the system triggers alarms within the vehicle, 
        alerting the driver to the potentially dangerous conditions
        </Text>
        <Image 
          source={require('./assets/about3.jpg')} // Replace with your image URL
          style={styles.sectionImage2}
        />
      </View>

      <View style={styles.signatureContainer}>
        <Text style={styles.signatureText}>with love,</Text>
        <Text style={styles.signatureName}>Susan Harold</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    width: '100%',
    height: 300,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  headerTextContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -Dimensions.get('window').width / 2 }, { translateY: -25 }],
    alignItems: 'center',
  },
  headerText: {
    fontSize: 36,
    color: '#000000',
    fontWeight: 'bold',
    marginLeft: 90,
   
  },
  section: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  sectionText: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    paddingRight: 10,
  },
  sectionImage: {
    width: 150,
    height: 250,
    marginLeft: 10,
  },
  sectionImage1: {
    width: 150,
    height: 250,
    marginRight: 10,
  },
  sectionImage2: {
    width: 150,
    height: 400,
    marginRight: 10,
  },
  signatureContainer: {
    padding: 20,
    alignItems: 'center',
  },
  signatureText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#000000',
    textAlign: 'center',
  },
  signatureName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
});

export default About;
