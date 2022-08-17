import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/themed'

import Login from './screens/Login'
import PhotoList from './screens/PhotoList'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name='Home'
          component={PhotoList}
          options={() => ({
            tabBarIcon: () => <Icon name='house' size='20' />,
          })}
        />
        <Tab.Screen
          name='Login'
          component={Login}
          options={() => ({
            tabBarIcon: () => <Icon name='sc-telegram' type='evilicon' size='20' />,
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
