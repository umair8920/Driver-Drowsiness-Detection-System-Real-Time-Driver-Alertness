import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const Emotions = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./assets/fatigue.jpg')} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>Driver Emotion Detection</Text>
        
        <View style={styles.infoBox}>
          <Text style={styles.boxText}>The primary objective of the drive emotion detector is to monitor driver behavior in real-time and detect emotional states that indicate fatigue. </Text>

          <View style={styles.instruction}>
            <MaterialIcons name="info" size={24} color="#007bff" style={styles.infoIcon} />
            <Text style={styles.instructionText}> This camera is positioned to get a clear and unobstructed view of the driver's face.</Text>
          </View>
          
          <View style={styles.instruction}>
            <MaterialIcons name="info" size={24} color="#007bff" style={styles.infoIcon} />
            <Text style={styles.instructionText}>The software processes the captured video feed in real-time to identify and classify the driver’s emotions. Emotions such as tiredness, drowsiness, boredom, and stress are of particular interest as they are indicators of fatigue.</Text>
          </View>
          
          <View style={styles.instruction}>
            <MaterialIcons name="info" size={24} color="#007bff" style={styles.infoIcon} />
            <Text style={styles.instructionText}>Sound alarms is used to immediately grab the driver's attention.</Text>
          </View>
          
          <View style={styles.instruction}>
            <MaterialIcons name="info" size={24} color="#007bff" style={styles.infoIcon} />
            <Text style={styles.instructionText}>You just need to press the button below to start recording to detect Emotions causing fatigue.</Text>
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
  preview: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  previewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  previewImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
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

export default Emotions;
