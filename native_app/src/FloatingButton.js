import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const FloatingButton = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Feedback');
  };

  return (
    <TouchableOpacity style={styles.floatingButton} onPress={handlePress}>
      <Icon name="feedback" size={27} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'rgba(242, 166, 90, 0.7)',
    borderRadius: 50,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    zIndex: 1,
  },
});

export default FloatingButton;
