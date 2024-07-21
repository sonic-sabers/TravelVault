import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AnimatedBottomTab from './AnimatedBottomTab';
import HStack from './moleclues/HStack';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get("window");

const TabBar = ({ state, navigation, descriptors }) => {
  return (
    <HStack
    >
      <View style={styles.tabBarStyle}>
        <AnimatedBottomTab
          state={state}
          navigation={navigation}
          descriptors={descriptors}
        />
      </View>
      <TouchableOpacity
        style={{
          height: 68,
          width: 68,
          justifyContent: "center",
          alignItems: 'center',
          position: 'absolute',
          bottom: 40, // here you can use the bottom inset for more flexbility
          right: 20,
          backgroundColor: '#1A1D1E',
          borderRadius: 12
        }}>
        <Ionicons name="add-circle-outline" size={18} color="white" />

        <Text
          style={{
            fontSize: 10,
            fontFamily: 'Inter_400Regular',
            color: 'rgba(255, 255, 255, 0.59)'
          }}>
          ADD
        </Text>
      </TouchableOpacity>
    </HStack>

  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#1A1D1E',
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    maxWidth: width - 120,
    bottom: 40, // here you can use the bottom inset for more flexbility
    left: 20,
    right: 20,
    height: 68,
    flex: 1,
    elevation: 0,
    // width: 
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
});