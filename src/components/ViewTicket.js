import React from "react"
import { ImageBackgroundBase } from "react-native"
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions, Pressable } from "react-native"

const ViewTicket = React.memo(({ item, isActive }) => {
  console.log('isActive', isActive)
  return (
    <View style={[styles.Group5, { backgroundColor: isActive ? 'lightblue' : 'white', }]}>
      {/* <ImageBackground
        source={require('../assets/images/TicketBG.png')}
        style={{
          // width: '100%', 
          height: '100%',
          width: Dimensions.get('window').width - 40,

        }}
      > */}
      <View style={styles.Group308}>
        <View style={styles.Group315}>
          <View style={styles.Group2109}>
            <Text style={styles.Text}>{item?.from}</Text>
            <Text style={styles.Text1}>{item?.to}</Text>
          </View>
          <View style={styles.Group387}>
            <Text style={styles.Text2}>Delhi 00:10</Text>
            <Text style={styles.Text3}>02:00 Chennai</Text>
          </View>
          <View style={styles.Group213}>
            <Text style={styles.Text4}>INDIGO</Text>
            <Text style={styles.Text5}>PNR</Text>
          </View>
          <View style={styles.Group961}>
            <Text style={styles.Text6}>{item?.flightNumber}</Text>
            <Text style={styles.Text7}>98JNF7R</Text>
          </View>
        </View>
        <Text style={styles.Text8}>View Ticket</Text>
      </View>

      <View style={styles.Ellipse16} />
      <View style={styles.Ellipse17} />
      <View style={styles.Ellipse18} />
      <View style={styles.Ellipse19} />
      <View style={styles.Ellipse20} />
      </View>
  );
});
export default ViewTicket;

const styles = StyleSheet.create({
  Group5: {
    position: "relative",
    height: 140,
    backgroundColor: 'white',
    zIndex: 250,
    overflow: "hidden",
    borderRadius: 12,
    // marginLeft: 16
  },
  Group308: {
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: Dimensions.get('window').width - 40,
    height: 140,
    paddingLeft: 20,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 19,
    borderRadius: 12,
    boxSizing: "border-box",
    backgroundColor: "rgba(17,17,17,0.08)",
  },
  Group315: {
    flexDirection: "column",
    flex: 1
  },
  Group2109: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    boxSizing: "border-box",
    justifyContent: 'space-between'
  },
  Text: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    lineHeight: 20,
    // fontFamily: "Inter, sans-serif",
    fontWeight: "400",
  },
  Text1: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    lineHeight: 20,
    // fontFamily: "Inter, sans-serif",
    fontWeight: "400",
  },
  Group387: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    boxSizing: "border-box",
  },
  Text2: {
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    lineHeight: 14,
    // fontFamily: "Inter, sans-serif",
    fontWeight: "400",
  },
  Text3: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Inter_400Regular",
    // fontWeight: "400",
    textAlign: "right",
  },
  Group213: {
    flex: 1,
    flexDirection: "row",
  },
  Text4: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    lineHeight: 12,
    fontFamily: "Inter_400Regular",

    // fontWeight: "400",
  },
  Text5: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    lineHeight: 12,
    fontFamily: "Inter_400Regular",

    // fontFamily: "Inter, sans-serif",
    // fontWeight: "400",
    textAlign: "right",
  },
  Group961: {
    flex: 1,
    flexDirection: "row",
    // width: "100%",
    boxSizing: "border-box",
  },
  Text6: {
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Inter_400Regular",
  },
  Text7: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Inter_400Regular",

    // fontFamily: "Inter, sans-serif",
    // fontWeight: "400",
    textAlign: "right",
  },
  Text8: {
    color: "rgba(155,161,166,1)",
    fontSize: 10,
    lineHeight: 10,
    fontFamily: "Inter_600SemiBold",

    // fontFamily: "Inter, sans-serif",
    // fontWeight: "600",
    // textAlignVertical:'top'
    transform: [{ rotate: '-90deg' }]
  },
  Ellipse16: {
    position: "absolute",
    top: 13 + 5,
    left: Dimensions.get('window').width - 47,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "rgba(255,255,255,1)",
  },
  Ellipse17: {
    position: "absolute",
    top: 35 + 5,
    left: Dimensions.get('window').width - 47,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "rgba(255,255,255,1)",
  },
  Ellipse18: {
    position: "absolute",
    top: 57 + 5,
    left: Dimensions.get('window').width - 47,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "rgba(255,255,255,1)",
  },
  Ellipse19: {
    position: "absolute",
    top: 79 + 5,
    left: Dimensions.get('window').width - 47,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "rgba(255,255,255,1)",
  },
  Ellipse20: {
    position: "absolute",
    top: 101 + 5,
    left: Dimensions.get('window').width - 47,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "rgba(255,255,255,1)",
  },
})
