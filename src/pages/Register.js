import React, {useState, Component } from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const navigation = useNavigation();

  onRegister = () => {
    if (!username && !password) {
      Alert.alert('Please input username and password!')
    } else if (!username) {
      Alert.alert('Please input username')
    } else if (!password) {
      Alert.alert('Please input password')
    } else if (password != password2) {
      Alert.alert('Password Confirmation Wrong')
    }
    else {
      Alert.alert('Register Success Please Login with your account');
      navigation.navigate('Login')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Register Account
      </Text>
      <TextInput
        value={username}
        onChangeText={(username) => setUsername(username)}
        placeholder={'Username'}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      <TextInput
        value={password2}
        onChangeText={(password2) => setPassword2(password2)}
        placeholder={'Password Confirmation'}
        secureTextEntry={true}
        style={styles.input}
      />
      
      <Button
        title={'Register'}
        style={styles.button}
        onPress={() => {
          onRegister()}
        }
      />
      <Text 
        style={styles.register}
        onPress={() => {
          navigation.navigate('Login')
        }}
      >
        Already have an account? Login!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 280,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 10
  },
  button: {
    
  },
  title: {
    marginBottom: 20,
    fontSize: 28,
    fontWeight: "bold"
  },
  register: {
    marginTop: 20,

  }
});