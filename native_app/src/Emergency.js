import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native';
import { Icon } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Emergency = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mental Health</Text>

      <TouchableOpacity style={styles.sectionContainer} onPress={() => Linking.openURL('https://www.nimh.nih.gov/health/topics/depression/index.shtml')}>
        <Icon name='smile-o' type='font-awesome' color='#4E878C' size={50} />
        <Text style={styles.sectionTitle}>Depression</Text>
        <Text style={styles.sectionDescription}>
          Depression is a common and serious medical illness that negatively affects how you feel, the way you think and how you act.
        </Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.sectionReference}>Learn more about depression </Text>
        <FontAwesomeIcon icon={faExternalLinkAlt} color='#007AFF' size={14}/>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sectionContainer} onPress={() => Linking.openURL('https://www.nimh.nih.gov/health/topics/anxiety-disorders/index.shtml')}>
        <Icon name='heartbeat' type='font-awesome' color='#4E878C' size={50} />
        <Text style={styles.sectionTitle}>Anxiety</Text>
        <Text style={styles.sectionDescription}>
          Anxiety disorders involve excessive and unrealistic worry about everyday events, or fear or terror that is out of proportion to the situation.
        </Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.sectionReference}>Learn more about anxiety disorders </Text>
        <FontAwesomeIcon icon={faExternalLinkAlt} color='#007AFF' size={14}/>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sectionContainer} onPress={() => Linking.openURL('https://www.nationaleatingdisorders.org/learn/by-eating-disorder/anorexia')}>
        <Icon name='cutlery' type='font-awesome' color='#4E878C' size={50} />
        <Text style={styles.sectionTitle}>Eating Disorders</Text>
        <Text style={styles.sectionDescription}>
          Eating disorders are serious mental illnesses marked by severe disturbances to a person's eating behaviors.
        </Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.sectionReference}>Learn more about eating disorders </Text>
        <FontAwesomeIcon icon={faExternalLinkAlt} color='#007AFF' size={14}/>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionContainer: {
    backgroundColor: '#E8E9F3',
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  sectionReference: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Emergency;
