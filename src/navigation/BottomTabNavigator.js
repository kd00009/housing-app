import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SavedScreen from '../screens/SavedScreen';
import CityExpertScreen from '../screens/CityExpertScreen';
import InvestorScreen from '../screens/InvestorScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { images } from '../constants/Svgs';
import { SvgFromXml } from 'react-native-svg';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const TabLabel = ({ focused, label }) => (
  <Text style={{ color: focused ? 'orange' : 'gray' }}>{label}</Text>
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 12 }, 
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => <TabLabel focused={focused} label="Home" />,
          tabBarIcon: ({ focused }) => (
            <SvgFromXml
              xml={focused ? images.Home_Active : images.Home}
              height={18}
              width={20}
              stroke={focused ? 'orange' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CityExpert"
        component={CityExpertScreen}
        options={{
          tabBarLabel: ({ focused }) => <TabLabel focused={focused} label="City Expert" />,
          tabBarIcon: ({ focused }) => (
            <SvgFromXml
              xml={focused ? images.expert_Active : images.expert}
              height={18}
              width={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => <TabLabel focused={focused} label="Saved" />,
          tabBarIcon: ({ focused }) => (
            <SvgFromXml
              xml={focused ? images.Heart_Active : images.Heart}
              height={18}
              width={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Investor"
        component={InvestorScreen}
        options={{
          tabBarLabel: ({ focused }) => <TabLabel focused={focused} label="Investor" />,
          tabBarIcon: ({ focused }) => (
            <SvgFromXml
              xml={focused ? images.investor_Active : images.investor}
              height={18}
              width={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ focused }) => <TabLabel focused={focused} label="Profile" />,
          tabBarIcon: ({ focused }) => (
            <SvgFromXml
              xml={focused ? images.profile_Ative : images.profile}
              height={18}
              width={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
