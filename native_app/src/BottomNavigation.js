import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import Home from './Home';
import Chat from './Chat';
import Settings from './Settings';
import PrivacyPolicy from './PrivacyPolicy';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Chat') {
            iconName = 'chat';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          } else if (route.name === 'Privacy') {
            iconName = 'lock';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarLabel: '', // set tabBarLabel to an empty string to hide the label
        tabBarActiveTintColor: '#A5CC6B',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingTop: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Privacy" component={PrivacyPolicy} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
