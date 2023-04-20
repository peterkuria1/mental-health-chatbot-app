import React, { useState } from "react";
import { View, Text, Button, TextInput, Modal, Switch, StyleSheet } from "react-native";

const Settings = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [isPasscodeEnabled, setIsPasscodeEnabled] = useState(false);
  const [isChatHistoryDeleted, setIsChatHistoryDeleted] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setIsChatHistoryDeleted(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handlePasscodeChange = (value) => {
    setPasscode(value);
  };

  const handlePasscodeSwitchChange = (value) => {
    setIsPasscodeEnabled(value);
  };

  const handleDeleteChatHistory = () => {
    showModal();
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Accessibility</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Switch />
          <Text style={styles.quoteText}>Enable Dark Mode</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Switch />
          <Text style={styles.quoteText}>Enable Large Font</Text>
        </View>
      </View>
      <View>
        <Text style={styles.greeting}>Privacy</Text>
        <Button title="Delete Chat History" color="red" onPress={handleDeleteChatHistory} />
        {isChatHistoryDeleted && (
          <Text style={{ color: "red" }}>Chat history has been deleted.</Text>
        )}
      </View>
      <View>
        <Text style={styles.greeting}>Security</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Switch value={isPasscodeEnabled} onValueChange={handlePasscodeSwitchChange} />
          <Text style={styles.quoteText}>Enable Passcode</Text>
        </View>
        {isPasscodeEnabled && (
          <View>
            <TextInput placeholder="Enter Passcode" secureTextEntry={true} onChangeText={handlePasscodeChange} />
            <Text style={{ color: "red" }}>
              Your passcode is {passcode}. Please remember it.
            </Text>
          </View>
        )}
      </View>
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCancel}
      >
        <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.disclaimerText}>Delete Chat History</Text>
          <Text style={styles.modalText}>Are you sure you want to delete your chat history?</Text>
          <Button title="OK" onPress={handleOk} />
          <Button title="Cancel" onPress={handleCancel} />
          </View>
        </View>
      </Modal>
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
      paddingBottom: 7,
      paddingTop: 30,
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
      padding: 10,
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
      padding: 5,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      width: '75%',
      height: '27%',
      paddingBottom: -10,
      paddingTop: 50,
    },
    modalButton: {
      alignItems: 'center',
      backgroundColor: '#E8E9F3',
      padding: 15,
      borderRadius: 5,
      marginTop: 10,
      margin: 5,
      width: '70%',
      height: '16%',
    },
    modalButtonText: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000807',
    },
    disclaimerText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
      marginTop: -50,
    },
    disclaimerImage: {
      marginTop: 20,
      marginBottom: -100,
      color: '#F2A65A'
    },
    modalText: {
      marginBottom: 10,
      paddingBottom: 10,
      textAlign: 'left',
      fontSize: 14,
    },
  });

export default Settings;
