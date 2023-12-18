import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";

import { UserContext } from "../context/userContext";


function RedScreen({ navigation }) {
  const userNameCtx = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Verify your email.</Text>
      <Text style={styles.text}>{userNameCtx.email}</Text>
    </View>
  );
}

export default RedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faa",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  text: {
    color: "#a00",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
