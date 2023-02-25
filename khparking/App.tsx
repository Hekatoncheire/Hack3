import { Text, View, Image} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Svg, { Path } from 'react-native-svg';
import { FontAwesome5 } from '@expo/vector-icons';
import HomeScreen from './screens/Home';
import ParkingLotScreen from './screens/ParkingLot';
import SettingsScreen from './screens/SettingsScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import RewardsScreen from './screens/RewardsScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return <MyTabs />
}

const MyTabs: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: true,
        headerStyle: {
          backgroundColor: '#00AEEF'
        },
        headerTitleStyle:{
          color: 'white'
        },
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: '#00AEEF',
          position: 'absolute',
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          color: 'white'
        },
        tabBarIconStyle: {
          height: 60,
          width: 60
        },
        tabBarLabel: () => null
      })}>
        <Tab.Screen name="Tabella" component={LeaderboardScreen} options={{
          tabBarIcon: ({ focused, color, size }) => (
            <>
              {focused && (
                <><Image source={require('../khparking/assets/icon_background.png')} style={{ zIndex: 1, position: 'absolute', top: 0}} /><Ionicons name='ios-trophy-outline' size={size} color='#00AEEF' style={{zIndex:2}}/></>
              )}
              {!focused && (
                <Ionicons name="ios-trophy-outline" size={size} color='white'/>
              )}
            </>
          ),
        }} />
        <Tab.Screen name="Parkolóház" component={ParkingLotScreen} options={{
          tabBarIcon: ({ focused, color, size }) => (
            <>
              {focused && (
                <><Image source={require('../khparking/assets/icon_background.png')} style={{ zIndex: 1, position: 'absolute', top: 0}} /><FontAwesome5 name="parking" size={24} color="#00AEEF" style={{zIndex: 2}}/></>
              )}
              {!focused && (
                <FontAwesome5 name="parking" size={24} color="white" />
              )}
            </>
          ),
        }} />
        <Tab.Screen name="Kezdőlap" component={HomeScreen} options={{
          tabBarIcon: ({ focused, color, size }) => (
            <>
              {focused && (
                <><Image source={require('../khparking/assets/icon_background.png')} style={{ zIndex: 1, position: 'absolute', top: 0}} /><Ionicons name='ios-home-outline' size={size} color='#00AEEF' style={{zIndex:2}}/></>
              )}
              {!focused && (
                <Ionicons name="ios-home" size={size} color='white'/>
              )}
            </>
          ),
        }} />
        <Tab.Screen name="Jutalmak" component={RewardsScreen} options={{
          tabBarIcon: ({ focused, color, size }) => (
            <>
              {focused && (
                <><Image source={require('../khparking/assets/icon_background.png')} style={{ zIndex: 1, position: 'absolute', top: 0}} /><FontAwesome5 name="coins" size={24} color='#00AEEF' style={{zIndex: 2}}/></>
              )}
              {!focused && (
                <FontAwesome5 name="coins" size={24} color='white' style={{zIndex: 2}}/>
              )}
            </>
          ),
        }} />
        <Tab.Screen name="Beállítások" component={SettingsScreen} options={{
          tabBarIcon: ({ focused, color, size }) => (
            <>
              {focused && (
                <><Image source={require('../khparking/assets/icon_background.png')} style={{ zIndex: 1, position: 'absolute', top: 0}} /><Ionicons name='ios-settings' size={size} color='#00AEEF' style={{zIndex:2}}/></>
              )}
              {!focused && (
                <Ionicons name="ios-settings" size={size} color='white'/>
              )}
            </>
          ),
        }} />
        
      </Tab.Navigator>
    </NavigationContainer>

  );
};
