import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import Icon from 'react-native-vector-icons/MaterialIcons';
const HomeScreen = ({navigation}) => {

  const images = [
    require('../assets/image4.png'),
    require('../assets/image2.png'),
    require('../assets/image1.png'),
  ];

  return (
        <View style={styles.container}>
           <ImageSlider images={images} /> 
          <View style={styles.iconContainer}>       
            <TouchableOpacity style={styles.statementButton}>
              <Text style={styles.iconText}>View Statement</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
            <Icon name="group" size={30} color="white" />
              <Text style={styles.iconText}>Members</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
            <Icon name="attach-money" size={30} color="white" />
              <Text style={styles.iconText}>Deposits</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
            <Icon name="monetization-on" size={30} color="white" />
              <Text style={styles.iconText}>Shares</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
            <Icon name="event" size={30} color="white" />
              <Text style={styles.iconText}>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
            <Icon name="payment" size={30} color="white" />
              <Text style={styles.iconText}>Deposit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
            <Icon name="account-balance" size={30} color="white" />
              <Text style={styles.iconText}>Buy Shares</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabContainer}>
            
                <TouchableOpacity style={styles.btns} >
                <Icon name="home" size={40} color="white" />
                <Text style={styles.iconText}>Home</Text>
                </TouchableOpacity>
            
              <Text style={{fontSize:50,color:'white'}}>||</Text>
            
                <TouchableOpacity style={styles.btns}>
                <Icon name="question-answer" size={30} color="white" />
                <Text style={styles.iconText}>Faqs</Text>
                </TouchableOpacity>
            
            
           
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
  iconContainer: {
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  iconButton: {
    backgroundColor: 'maroon',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  statementButton: {
    backgroundColor: 'maroon',
    width: 340,
    height: 70,
    justifyContent: 'center',
    padding:10,
    borderRadius: 10,
    marginBottom:20,
  },
  tabButton: {
    justifyContent: 'center',
    alignContent:'center',
    padding:20,
  },
  tabContainer: {
    justifyContent:'space-between',
    flexDirection: 'row',
    height: 80,
    backgroundColor: 'maroon',
  },
  btns:{
    paddingLeft: 20,
    backgroundColor: 'maroon',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    justifyContent: 'center',
    alignContent:'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;