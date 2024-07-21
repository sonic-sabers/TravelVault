import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../components/CustomTextInput';
import KeyboardAwareComponent from '../components/hoc/KeyboardAwareComponent';
import useAuth from '../hooks/useAuth';
// import useAuth from '../../hooks/useAuth';

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) ? '' : 'Please enter a valid email address.';
};

const validatePassword = (password) => {
  return password.length >= 6 ? '' : 'Password must be at least 6 characters long.';
};



const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const animatedValue = useRef(new Animated.Value(0)).current;
  // const { handleLogin, loading, error } = useAuth();
  const navigation = useNavigation();

  const handleUserLogin = () => {
    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);

    setEmailError(emailValidationError);
    setPasswordError(passwordValidationError);

    navigation.navigate('Home')
    if (!emailValidationError && !passwordValidationError) {
      // handleLogin({ email, password });
    }
  };

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <KeyboardAwareComponent>
          <View style={{ height: '100%', justifyContent: 'center' }}>
            <Animated.View style={[styles.logoContainer, { transform: [{ scale: animatedValue }] }]}>
              <Text style={styles.logoText}>TravelVault</Text>
            </Animated.View>
            <View style={styles.inputContainer}>
              <CustomTextInput
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setEmailError(validateEmail(text));
                }}
                keyboardType="email-address"
                autoCapitalize="none"
                error={emailError}
              />
              <CustomTextInput
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setPasswordError(validatePassword(text));
                }}
                secureTextEntry
                autoCapitalize="none"
                error={passwordError}
                showPasswordIcon
              />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={handleUserLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareComponent>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.registerButtonText}>Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(245, 245, 245, 0.9)',
    height: '100%'

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(245, 245, 245, 0.9)',
    height: '100%'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#4A90E2',
    fontSize: 16,
  },
});

export default LoginScreen;