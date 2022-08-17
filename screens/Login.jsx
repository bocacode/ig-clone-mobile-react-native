import { View, StyleSheet } from 'react-native'
import { Input, Button } from '@rneui/themed'

import { loginStyles } from '../assets/styles'

function Login() {
  return (
    <View style={loginStyles.container}>
      <Input placeholder='Email' keyboardType='email-address' />
      <Input placeholder='Password' secureTextEntry={true} />
      <Button title='login' />
    </View>
  )
}

export default Login
