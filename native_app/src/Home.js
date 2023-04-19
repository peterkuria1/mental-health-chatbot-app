import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Icon } from 'react-native-elements';
import moment from 'moment';
import FloatingButton from './FloatingButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons';

const Home = ({ navigation }) => {
  const [greeting, setGreeting] = useState('');
  const [hour, setHour] = useState(moment().hour());
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    const hour = moment().hour();
    if (hour >= 5 && hour < 12) {
      setGreeting(<> <Text style={styles.greeting}>Good morning,</Text></>);
    } else if (hour >= 12 && hour < 17) {
      setGreeting(<> <Text style={styles.greeting}>Good afternoon,</Text></>);
    } else {
      setGreeting(<> <Text style={styles.greeting}>Good evening,</Text></>);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/icons8-medium-risk-50.png')} style={styles.disclaimerImage}/>
          </View>
            <Text style={styles.disclaimerText}>Disclaimer:</Text>
            <Text style={styles.modalText}>
            • Our mental health application is designed to provide informational support and is not intended to replace professional medical advice, diagnosis, or treatment.{'\n'}{'\n'}
            • If you are experiencing a mental health crisis or emergency, please seek immediate assistance from a licensed healthcare provider or call your local emergency services.{'\n'}{'\n'}
            • The use of our chatbot is entirely voluntary, and we assume no liability for any decisions or actions taken based on the information provided by the chatbot.{'\n'}{'\n'}
            • By using our chatbot, you acknowledge and agree to these terms.
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.buttonText}>I agree</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <FloatingButton navigation={navigation} />
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>{greeting}</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/home_icon.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>"The best way to predict your future is to create it." - Abraham Lincoln</Text>
      </View>
      <View style={styles.button_row}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Chat')}
      >
        <Icon name="chat" size={35} color="#297373" />
        <Text style={styles.buttonText}>Chat</Text>
        <Text style={styles.buttonDesc}>Chat with our bot Wellness Buddy</Text>
        <Icon name="arrow-right" size={30} color="#000807" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Knowledge')}
      >
        <FontAwesomeIcon icon={faChalkboardUser} size={35} color="#297373"/>
        <Text style={styles.buttonText}>Learning Centre</Text>
        <Text style={styles.buttonDesc}>Learn more about Mental Health</Text>
        <Icon name="arrow-right" size={30} color="#000807" />
      </TouchableOpacity>
      </View>
      {/*
      <TouchableOpacity
        style={styles.button_emergency}
        onPress={() => navigation.navigate('Emergency')}
      >
        
        <FontAwesomeIcon icon={faHandHoldingMedical} size={30} color="#000"/>
        <Text style={styles.buttonText}>Emergency Services</Text>
        <Icon name="arrow-right" size={30} color="#000807" />
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Exercises')}
      >
        <Icon name="heart" type="font-awesome" size={30} color="#297373" />
        <Text style={styles.buttonText}>Exercises</Text>
        <Icon name="arrow-right" size={30} color="#000807" />
      </TouchableOpacity>
      */}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  imageContainer: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  greetingContainer: {
    alignItems: 'left',
    marginTop: 5,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  quoteContainer: {
    marginBottom: 20,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button_row: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#E8E9F3',
    padding: 20,
    borderRadius: 5,
    marginBottom: 50,
    marginTop: 10,
    margin: 10,
    width: '50%',
    height: '70%',
  },
  button_emergency: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2A65A',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000807',
    padding: 5,
    //marginLeft: 10,
    //marginRight: 10,
  },
  buttonDesc: {
    paddingTop: 5,
    paddingBottom : 5,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '55%',
    paddingBottom: 170,
    paddingTop: 3,
  },
  modalButton: {
    alignItems: 'center',
    backgroundColor: '#E8E9F3',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    margin: 10,
    width: '80%',
  },
  disclaimerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: -50,
  },
  disclaimerImage: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: -100,
  },
  modalText: {
    marginBottom: 10,
    paddingBottom: 10,
    textAlign: 'left',
    fontSize: 14,
  },
});

export default Home;
