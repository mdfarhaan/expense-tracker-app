import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { FAB } from "react-native-paper";
import Add from "./components/Add";
import Home from "./components/Home";

export default function App() {
  const [showHomeScreen, setShowHomeScreen] = useState(true);
  const [showAddScreen, setShowAddScreen] = useState(false);

  const addbtnHandler = () => {
    setShowHomeScreen(false);
    setShowAddScreen(true);
  };

  const onSave = () => {
    setShowHomeScreen(true);
    setShowAddScreen(false);
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
        translucent={true}
      />

      {showHomeScreen && (
        <View style={styles.container}>
          <Home />
          <FAB
            onPress={addbtnHandler}
            large
            icon="plus"
            style={styles.addBtn}
          ></FAB>
        </View>
      )}
      {showAddScreen && <Add onSave={onSave} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#171717",
    minHeight: 685,
  },

  addBtn: {
    position: "absolute",
    margin: 10,
    backgroundColor: "white",
    bottom: 10,
    right: 10,
  },
});
