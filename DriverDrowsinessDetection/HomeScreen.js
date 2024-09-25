// HomeScreen.js

import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity,Button,  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';


const categories = [
  { id: '1', name: 'Drowsiness', image: require('./assets/drowsiness.png') },
  { id: '2', name: 'Emotions', image: require('./assets/fatigue.jpg') },
  { id: '3', name: 'Dehazing', image: require('./assets/dehazing.png') },
  // Add more categories as needed
];

const FeaturesInfo = [
  { id: '1', name: 'Drowsiness Detection',  text: 'The system detects drowsiness in real time and sets up alarm if droziness is detected.', image: require('./assets/drowsiness.png'), screen: 'Drowsiness' },
  { id: '2', name: 'Emotions Detection',  text: 'The system continuously measures driver behavior and detect emotions indicating fatigue.', image: require('./assets/fatigue.jpg'), screen: 'Emotions' },
  { id: '3', name: 'Dehazing',  text: 'The system detects fog in environment and alert driver about environmental conditions.', image: require('./assets/dehazing.png'), screen: 'Dehazing' },

];

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.Container1}>
      
          <Text style={styles.TitleText}>Driver Drowsiness detection System</Text>
        
        </View>
      
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Features</Text>
       
      </View>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
        
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Features Info</Text>
      
      </View>
      <FlatList
        data={FeaturesInfo}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.featuresItem}>
            <Image source={item.image} style={styles.featuresImage} />
            <View style={styles.featuresInfo}>
              <Text style={styles.featuresName}>{item.name}</Text>
          
              <Text style={styles.featurestext}>{item.text}</Text>
              <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
              <MaterialIcons name="arrow-forward" size={30} color="#4E7D96" />
            </TouchableOpacity>
            
             
              
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.featureslist}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 0,
  },
  Container1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TitleText: {
    color: '#4E7D96',
    fontWeight: "bold",
    fontSize: 20,
  },
  location: {
    marginLeft: 5,
    color: '#4E7D96',
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4E7D96',
    marginTop: 20,
  },
  viewAll: {
    color: '#4E7D96',
  },
  categoryList: {
    paddingBottom: 50,
  },
  categoryItem: {
    marginRight: 10,
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 90,
    
  },
  categoryText: {
    marginTop: 5,
    color: '#4E7D96',
  },
  featureslist: {
    paddingBottom: 80,
  },
  featuresItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
  },
  featuresImage: {
    width: 100,
    height: 100,
  },
  featuresInfo: {
    flex: 1,
    padding: 10,
  },
  featuresName: {
    fontWeight: 'bold',
    color: '#4E7D96',
  },
  
  featurestext: {
    color: '#4E7D96',
  },
  
});

export default HomeScreen;
