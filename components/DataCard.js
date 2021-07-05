import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function DataCard(props) {
  const textColor = "#171717";
  const Expense = "#FD5E53";
  const Income = "#28DF99";
  const [cardColor, setCardColor] = useState(Income);
  const id = props.id;
  var transaction = props.transaction;

  useEffect(() => {
    if (transaction === "Expense") {
      setCardColor(Expense);
    }
  }, []);

  const styles = StyleSheet.create({
    container: {
      paddingBottom: 20,
      paddingRight: 30,
    },

    items: {
      backgroundColor: cardColor,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },

    amt: {
      paddingLeft: 15,
      paddingTop: 5,
      fontSize: 40,
      fontWeight: "bold",
      color: textColor,
    },

    title: {
      fontSize: 28,
      paddingLeft: 18,
      paddingBottom: 5,
      paddingTop: 1,
      color: textColor,
    },

    date: {
      fontSize: 15,
      paddingRight: 10,
      paddingTop: 10,
      color: textColor,
      fontWeight: "bold",
    },

    data: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });
  const dataDelHandler = () => {
    fetch("API URL/del/" + id);
    props.onRefresh();
  };

  return (
    <TouchableOpacity activeOpacity={0.9} onLongPress={dataDelHandler}>
      <View style={styles.container} on>
        <View style={styles.items}>
          <Text style={styles.amt}>{props.amt}</Text>
          <View style={styles.data}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.date}>{props.date}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
