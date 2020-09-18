import React from "react";
import { View, StyleSheet, Text, Image, Button } from "react-native";
import profile from "./assets/profile.jpg";

function App() {
  return (
    <View style={style.container}>
      <View style={style.navbar}>
        <Text style={style.title}>Profile</Text>
        <Image source={profile} style={style.profile} />
      </View>

      <View style={style.textContainer}>
        <Text style={style.label}>Name</Text>
        <Text style={style.info}>Edmund Quashie</Text>
      </View>

      <View style={style.textContainer}>
        <Text style={style.label}>Email</Text>
        <Text style={style.info}>dwolino@gmail.com</Text>
      </View>

      <View style={style.textContainer}>
        <Text style={style.label}>Gender</Text>
        <Text style={style.info}>Male</Text>
      </View>
      <View style={style.post}>
        <Text style={style.posts}>425</Text>
        <View style={style.divider}></View>
        <Text style={style.posts}>75K</Text>
        <View style={style.divider}></View>
        <Text style={style.posts}>425</Text>
        <View style={style.descriptionContainer}>
          <Text style={style.description}>Post</Text>
          <Text style={style.description2}>Following</Text>
          <Text style={style.description1}>followers</Text>
        </View>
      </View>
      <View style={style.buttonContainer}>
        <Button title="Send Message" style={style.button1} />
        <Button title="Follow" style={style.button2} />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    height: 170,
    backgroundColor: "#545867",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginBottom: 90,
  },
  title: {
    position: "absolute",
    top: 80,
    alignSelf: "center",
    color: "white",
    fontSize: 22,
  },
  profile: {
    height: 110,
    width: 110,
    borderRadius: 55,
    alignSelf: "center",
    marginBottom: 120,
    position: "relative",
    top: 110,
    borderWidth: 5,
    borderColor: "white",
  },
  textContainer: {
    flexDirection: "row",
    marginVertical: 3,
  },
  label: {
    flex: 3,
    fontSize: 25,
    borderColor: "grey",
    borderWidth: 1,
    paddingHorizontal: 6,
  },
  info: {
    flex: 7,
    fontSize: 25,
    borderColor: "grey",
    borderWidth: 1,
    borderLeftWidth: 0,
    paddingHorizontal: 6,
  },
  post: {
    flexDirection: "row",
    alignSelf: "center",
    position: "relative",
    right: 8,
    top: 15,
  },
  posts: {
    flex: 4,
    position: "relative",
    left: 50,
    fontSize: 20,
    fontWeight: "bold",
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: "grey",
    position: "relative",
    left: 10,
  },
  descriptionContainer: {
    position: "absolute",
    top: 19,
    left: 50,
    flexDirection: "row",
  },
  description: {
    fontSize: 18,
    color: "grey",
  },
  description1: {
    fontSize: 18,
    color: "grey",
    position: "relative",
    left: 12,
  },
  description2: {
    fontSize: 18,
    color: "grey",
    left: 200,
  },
  buttonContainer: {
    paddingTop: 80,
  },
});

export default App;
