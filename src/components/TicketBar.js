import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HStack from './moleclues/HStack'

export default function TicketBar() {
  return (
    <HStack
      style={{
        height: 70,
        overflow: 'hidden',
      }}>
      <HStack
        justifyContent='space-between'
        alignItems='center'
        style={{
          flex: 3,
          borderRadius: 16,
          paddingHorizontal: 4,
          backgroundColor: "rgba(26,29,30,1)",
          // marginRight: 4
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: 'center',
            height: 64,
            borderRadius: 12,
          }}>
          <FontAwesome
            style={{ transform: [{ rotate: '45deg' }] }}
            name="ticket" size={26} color="black" />
          <Text
            style={{
              fontSize: 10,
              fontFamily: 'Inter_400Regular',
              color: '#000'
            }}>
            TICKETS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            height: 64,
            justifyContent: "center",
            alignItems: 'center'
          }}>
          <FontAwesome name="id-card-o" size={22} color="white" />
          <Text
            style={{
              fontSize: 10,
              fontFamily: 'Inter_400Regular',
              color: '#fff',
              marginTop: 4
            }}>
            ID CARDS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            height: 64,
            justifyContent: "center",
            alignItems: 'center'
          }}>
          <MaterialCommunityIcons name="map-marker-path" size={24} color="white" />
          <Text
            style={{
              fontSize: 10,
              fontFamily: 'Inter_400Regular',
              color: '#fff',
              marginTop: 4
            }}>
            ROUTE
          </Text>
        </TouchableOpacity>

      </HStack>
      <TouchableOpacity
        style={{
          flex: 0.8,
          height: 70,
          justifyContent: "center",
          alignItems: 'center',
          borderRadius: 16,
          paddingHorizontal: 4,
          backgroundColor: "rgba(26,29,30,1)",
          marginLeft: 4,
          minWidth: 8
        }}>

        <Ionicons name="add-circle-outline" size={24} color="white" />
        <Text
          style={{
            fontSize: 10,
            fontFamily: 'Inter_400Regular',
            color: '#fff',
            marginTop: 4
          }}>
          ADD
        </Text>
      </TouchableOpacity>
    </HStack>
  )
}

const styles = StyleSheet.create({})