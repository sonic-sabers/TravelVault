// src/components/CustomTextInput.js

import React, { useState, forwardRef, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

const CustomTextInput = forwardRef(({
  label,
  error,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  autoCapitalize = 'none',
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  showPasswordIcon = false,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(!secureTextEntry);
  const animatedLabelPosition = useSharedValue(0);
  const errorOpacity = useSharedValue(0);

  useEffect(() => {
    animatedLabelPosition.value = isFocused || value ? withSpring(-20) : withSpring(0);
  }, [isFocused, value, animatedLabelPosition]);

  useEffect(() => {
    errorOpacity.value = withTiming(error ? 1 : 0, { duration: 300 });
  }, [error, errorOpacity]);

  const animatedLabelStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: animatedLabelPosition.value }],
    zIndex: isFocused || value ? 1 : -1,
  }));

  const animatedErrorStyle = useAnimatedStyle(() => ({
    opacity: errorOpacity.value,
  }));

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Animated.Text style={[styles.label, labelStyle, animatedLabelStyle]}>
          {label}
        </Animated.Text>
      )}
      <View style={styles.inputWrapper}>
        <TextInput
          ref={ref}
          style={[styles.input, inputStyle, showPasswordIcon ? { paddingRight: 40 } : null]}
          value={value}
          onChangeText={onChangeText}
          placeholder={isFocused || value ? '' : placeholder}
          keyboardType={keyboardType}
          secureTextEntry={!showPassword}
          autoCapitalize={autoCapitalize}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {showPasswordIcon && (
          <TouchableOpacity
            style={styles.showPasswordButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="#aaa" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.errorContainer}>
        <Animated.Text style={[styles.errorText, errorStyle, animatedErrorStyle]}>
          {error}
        </Animated.Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    position: 'absolute',
    left: 16,
    top: 15,
    fontSize: 14,
    color: '#333',
    backgroundColor: 'white',
    paddingHorizontal: 4,
    zIndex: 1,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
  },
  showPasswordButton: {
    position: 'absolute',
    right: 10,
    backgroundColor: '#ffffff'
  },
  errorContainer: {
    height: 20, // Set a fixed height for the error message area
  },
  errorText: {
    fontSize: 12,
    color: 'red',
  },
});

export default CustomTextInput;
