import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const StripeApp = () => {
  const [email, setEmail] = useState();
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        keyboardType="email-address"
        onChange={(value) => setEmail(value.nativeEvent.text)}
        style={styles.input}
      />
    </View>
  );
};

export default StripeApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#efefefef",
    borderColor: "#000000",
    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
});
