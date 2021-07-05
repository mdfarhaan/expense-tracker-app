import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import DataCard from "./DataCard";

export default function Home() {
  const [ExpenseData, setExpenseData] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const fetchData = () => {
    fetch("API URL/api/view/")
      .then((response) => response.json())
      .then((data) => {
        var newData = data.reverse();
        setExpenseData(newData);
      });
  };

  const updateData = () => {
    fetch("API URL/api/totalupdate/").then(
      () => {
        fetch("API URL/api/total/")
          .then((response) => response.json())
          .then((data) => {
            setTotalExpense(data[0]["total"]);
          });
      }
    );
  };

  useEffect(() => {
    fetchData();
    updateData();
  });

  const onRefresh = () => {
    fetchData();
    updateData();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>My Account</Text>
        <Text style={styles.amt}>{"₹" + totalExpense}</Text>
        <View style={styles.card}>
          {ExpenseData.map((data) => (
            <DataCard
              amt={"₹" + data.amt}
              title={data.title}
              date={data.date}
              id={data.id}
              transaction={data.transaction}
              onRefresh={onRefresh}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 30,
  },

  items: {
    padding: 10,
  },

  title: {
    fontSize: 42,
    color: "white",
  },

  amt: {
    fontSize: 80,
    fontWeight: "bold",
    color: "white",
  },

  card: {
    paddingTop: 30,
  },
});
