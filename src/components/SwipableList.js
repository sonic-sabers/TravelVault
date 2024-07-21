import React, { useState, useCallback, useMemo } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Animated } from 'react-native';
import DragList from 'react-native-draglist';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Octicons, Entypo, Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import ViewTicket from './ViewTicket';
import TicketPopComponent from './TicketPopComponent';
import HStack from './moleclues/HStack';
// import { Link } from 'expo-router';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    from: 'DEL',
    to: 'MAA',
    flightNumber: '1B 8BE1'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    from: 'NBA',
    to: 'ASE',
    flightNumber: '1V 8BE1'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    from: 'RFS',
    to: 'PLS',
    flightNumber: '2P 8BE1'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    title: 'Fourth Item',
    from: 'QSA',
    to: 'JHG',
    flightNumber: '0W 8BE1'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d70',
    title: 'Fifth Item',
    from: 'OUN',
    to: 'CHS',
    flightNumber: 'US 8BE1'
  },
];

export default function SwipableList() {
  const [listData, setListData] = useState(DATA);
  const [activeItem, setActiveItem] = useState(null);
  const [pressedItem, setPressedItem] = useState(null);
  const scaleAnim = useState(new Animated.Value(1))[0];

  let row = [];
  let prevOpenedRow;

  const closeRow = useCallback((index) => {
    if (prevOpenedRow && prevOpenedRow !== row[index]) {
      prevOpenedRow.close();
    }
    prevOpenedRow = row[index];
  }, []);

  const deleteItem = useCallback((index) => {
    const newData = listData.filter((_, i) => i !== index);
    setListData(newData);
  }, [listData]);

  const renderRightActions = useCallback((progress, dragX, index) => (
    <TouchableOpacity
      onPress={() => deleteItem(index)}
      style={styles.rightAction}>
      <>
        <Ionicons name="add-circle-outline" size={24} color="white" />
        <Text style={styles.actionText}>Add ticket on 23rd Jan</Text>
      </>
    </TouchableOpacity>
  ), [deleteItem]);

  const renderLeftActions = useCallback((progress, dragX, index) => (
    <TouchableOpacity
      onPress={() => deleteItem(index)}
      style={styles.leftAction}>
      <>
        <Ionicons name="add-circle-outline" size={24} color="white" />
        <Text style={styles.actionText}>Show QR code</Text>
      </>
    </TouchableOpacity>
  ), [deleteItem]);

  const handleLongPress = useCallback((onDragStart, item) => {
    onDragStart(item);
    setActiveItem(item.id);
  }, []);

  const handleDragEnd = useCallback((onDragEnd, newData) => {
    onDragEnd(newData);
    setActiveItem(null);
  }, []);

  const handlePress = (item) => {
    setPressedItem(item.id);
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.1,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setPressedItem(null);
    });
  };

  const renderItem = useCallback(({ item, onDragStart, onClick, onDragEnd, index }) => (
    <Animated.View style={{ transform: [{ scale: item.id === pressedItem ? scaleAnim : 1 }] }}>
      <TouchableOpacity
        onLongPress={() => handleLongPress(onDragStart, item)}
        onPressOut={() => handleDragEnd(onDragEnd, item)}
        onPress={() => handlePress(item)}
        activeOpacity={1}
        style={styles.pressable}>
        <Swipeable
          renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, index)}
          renderLeftActions={(progress, dragX) => renderLeftActions(progress, dragX, index)}
          containerStyle={styles.swipeableContainer}
          childrenContainerStyle={styles.swipeableChildren}
          onSwipeableOpen={() => closeRow(index)}
          ref={(ref) => (row[index] = ref)}
          rightOpenValue={-100}>
          <ViewTicket item={item} isActive={activeItem === item.id} />
        </Swipeable>
      </TouchableOpacity>
    </Animated.View>
  ), [renderRightActions, renderLeftActions, closeRow, handleLongPress, handleDragEnd, handlePress, activeItem, row, pressedItem, scaleAnim]);

  const ListHeader = useMemo(() => (
    <HStack alignItems='center' justifyContent='space-between' style={styles.listHeader}>
      <TouchableOpacity>
        <HStack alignItems='center'>
          <View style={styles.headerIcon} />
          <Text style={styles.headerText}>Ceed workation</Text>
        </HStack>
      </TouchableOpacity>
      <HStack>
        <TouchableOpacity>
          <Octicons name="filter" size={20} color="black" style={styles.filterIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </HStack>
    </HStack>
  ), []);

  async function onReordered(fromIndex, toIndex) {
    const copy = [...listData];
    const removed = copy.splice(fromIndex, 1);
    copy.splice(toIndex, 0, removed[0]);
    setListData(copy);
  }

  return (
    <View style={styles.container}>
      <DragList
        data={listData}
        renderItem={renderItem}
        onReordered={onReordered}
        ListHeaderComponent={ListHeader}
        onDragEnd={(newData) => console.log(newData)}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        style={styles.dragList}
        contentContainerStyle={styles.dragListContent}
        keyExtractor={(item) => item.id}
        renderDragHandle={({ drag, isActive }) => (
          <View
            style={[
              styles.dragHandle,
              { backgroundColor: isActive ? 'red' : 'blue' }
            ]}
            onTouchStart={drag}
          />
        )}
        ListComponent={FlatList}
        ListProps={{
          showsVerticalScrollIndicator: false
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rightAction: {
    justifyContent: 'center',
    width: 100,
    backgroundColor: '#161616',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    alignItems: "center",
    height: 140,
  },
  leftAction: {
    justifyContent: 'center',
    width: 100,
    backgroundColor: '#161616',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    alignItems: "center",
    height: 140,
  },
  actionText: {
    textAlign: 'center',
    color: '#A0A0A0',
    fontSize: 10,
    fontFamily: 'Inter_400Regular',
    lineHeight: 15,
    maxWidth: 70,
    marginTop: 10
  },
  pressable: {
    flex: 1,
    backgroundColor: '#161616',
    zIndex: 1,
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden'
  },
  swipeableContainer: {
    zIndex: 200,
    borderRadius: 12,
    overflow: 'hidden'
  },
  swipeableChildren: {
    zIndex: 200,
    backgroundColor: "rgba(17,17,17,0.08)",
  },
  listHeader: {
    marginBottom: 12,
    marginHorizontal: 20
  },
  headerIcon: {
    backgroundColor: '#D9D9D9',
    borderRadius: 4,
    height: 24,
    width: 24,
  },
  headerText: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'Inter_300Light',
    lineHeight: 33,
    marginLeft: 8
  },
  filterIcon: {
    marginRight: 8
  },
  itemSeparator: {
    marginBottom: 20,
  },
  dragList: {
    paddingTop: 30,
  },
  dragListContent: {
    paddingBottom: 200,
  },
  dragHandle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  }
});
