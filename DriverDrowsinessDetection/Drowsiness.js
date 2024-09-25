import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const Drowsiness = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./assets/drowsiness.png')} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>Driver Drowsiness Detection</Text>
        
        <View style={styles.infoBox}>
          <Text style={styles.boxText}>Driver drowsiness detection systems are crucial in enhancing road safety by preventing accidents caused by fatigued drivers.</Text>
          <Text style={styles.boxText}>A key feature of this system is Adaptive Alert Intensity, which adjusts the intensity of alerts based on the detected level of drowsiness.</Text>
          <View style={styles.instruction}>
            <MaterialIcons name="info" size={24} color="#007bff" style={styles.infoIcon} />
            <Text style={styles.instructionText}> The system tracks the rate and frequency of the driver's blinks using cameras and eye-tracking technology.</Text>
          </View>
          
          <View style={styles.instruction}>
            <MaterialIcons name="info" size={24} color="#007bff" style={styles.infoIcon} />
            <Text style={styles.instructionText}> The system monitors how long the driver's eyes remain closed during each blink. Longer eye closures suggest that the driver is struggling to stay awake.</Text>
          </View>
          
          <View style={styles.instruction}>
            <MaterialIcons name="info" size={24} color="#007bff" style={styles.infoIcon} />
            <Text style={styles.instructionText}>Based on the baseline, the system sets thresholds for different levels of drowsiness, the system generates an alert. </Text>
          </View>
          
          <View style={styles.instruction}>
            <MaterialIcons name="info" size={24} color="#007bff" style={styles.infoIcon} />
            <Text style={styles.instructionText}>You just need to press the button below to start recording to detect Drowsiness.</Text>
          </View>
        </View>


        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('RecordScreen')}
        >
          <Text style={styles.buttonText}>Start Recording</Text>
        </TouchableOpacity>
       
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4E7D96',
  },
 
 
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoBox: {
    backgroundColor: '#f0f0f0',
    width: '100%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  boxText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#4E7D96',
  },
  instruction: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  infoIcon: {
    marginRight: 10,
    marginTop: 3,
  },
  instructionText: {
    flex: 1,
    fontSize: 16,
    color: '#4E7D96',
  },
});

export default Drowsiness;
