// src/hoc/withKeyboardAnimation.js

import React, { useEffect, useState } from 'react';
import {
  View,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';

const withKeyboardAnimation = (WrappedComponent) => {
  return (props) => {
    const [shift] = useState(new Animated.Value(0));
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', handleKeyboardShow);
      const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardHide);

      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      };
    }, []);

    const handleKeyboardShow = (event) => {
      setKeyboardVisible(true);
      Animated.timing(shift, {
        toValue: -event.endCoordinates.height / 2,
        duration: 300,
        useNativeDriver: true,
      }).start();
    };

    const handleKeyboardHide = () => {
      setKeyboardVisible(false);
      Animated.timing(shift, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    };

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}
      >
        <Animated.View style={{ transform: [{ translateY: shift }] }}>
          <WrappedComponent keyboardVisible={keyboardVisible} {...props} />
        </Animated.View>
      </KeyboardAvoidingView>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withKeyboardAnimation;
