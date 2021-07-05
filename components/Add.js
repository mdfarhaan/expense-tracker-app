import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import RadioButtonRN from "radio-buttons-react-native";

export default function Add(props) {
  //Style
  const styles = StyleSheet.create({
    title: {
      fontSize: 42,
      color: "black",
      fontWeight: "bold",
    },
    container: {
      flex: 1,
      paddingTop: 50,
      paddingLeft: 30,
    },

    titleInput: {
      borderWidth: 1,
      borderColor: "black",
      height: 50,
      borderRadius: 10,
      padding: 10,
    },

    inputArea: {
      paddingRight: 30,
      paddingTop: 30,
    },

    selectContainer: {
      padding: 10,
    },

    dateContainer: {
      borderWidth: 1,
      height: 20,
    },

    datePickerStyle: {
      width: 200,
      marginTop: 20,
    },
    saveButtonContainer: {
      marginTop: 5,
      backgroundColor: "#28DF99",
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 12,
      height: 50,
      width: 100,
    },
    saveButtonText: {
      fontSize: 20,
      color: "#171717",
      fontWeight: "bold",
      alignSelf: "center",
      justifyContent: "center",
    },
  });
  const RadioBtndata = [
    {
      label: "Income",
    },
    {
      label: "Expense",
    },
  ];

  const [title, setTitle] = useState("");
  const [amt, setAmt] = useState(0);
  const [transaction, setTransaction] = useState("");
  const [date, setDate] = useState("");

  const saveBtnHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        amt: amt,
        transaction: transaction,
        date: date,
      }),
    };
    fetch("https://expense-app-api-v1.herokuapp.com/api/post/", requestOptions);

    setTitle("");
    setAmt(0);
    setTransaction("");
    setDate("");
    props.onSave();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add</Text>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.titleInput}
          placeholder="Title"
          onChangeText={(value) => setTitle(value)}
        />

        <View style={styles.selectContainer}>
          <RadioButtonRN
            data={RadioBtndata}
            selectedBtn={(value) => setTransaction(value.label)}
          />
        </View>

        <View style={{ paddingTop: 90 }}>
          <TextInput
            style={styles.titleInput}
            placeholder="Amount"
            keyboardType="numeric"
            onChangeText={(value) => setAmt(value)}
          />
        </View>
        <View style={{ paddingTop: 70 }}>
          <TextInput
            style={styles.titleInput}
            placeholder="Date"
            onChangeText={(value) => setDate(value)}
          />
        </View>
        <View style={{ paddingLeft: 130, paddingTop: 40 }}>
          <Text></Text>
          <TouchableOpacity
            onPress={saveBtnHandler}
            style={styles.saveButtonContainer}
          >
            <Text style={styles.saveButtonText}>save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
