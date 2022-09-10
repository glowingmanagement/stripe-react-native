import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";

const StripeApp = () => {
  const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();

  const API_URL = "https://localhost:3000";

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handlePayPress = async () => {
    if (!cardDetails?.complete || !email) {
      Alert.alert("Please enter complete card details and email");
      return;
    }

    const billingDetails = {
      email: email,
    };
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        keyboardType="email-address"
        onChange={(value) => setEmail(value.nativeEvent.text)}
        style={styles.input}
      />
      <CardField
        postalCodeEnabled={true}
        placeholder={{ number: "4242 4242 4242 4242" }}
        cardStyle={styles.card}
        style={styles.cardConatiner}
        onCardChange={(cardDetails) => {
          setCardDetails(cardDetails);
        }}
      />
      <Button onPress={handlePayPress} title="Pay" disabled={loading} />
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
  card: {
    backgroundColor: "#efefefef",
  },

  cardConatiner: {
    height: 50,
    marginVertical: 30,
  },
});
