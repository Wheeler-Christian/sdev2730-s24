import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";

import { UserContext } from "../context/userContext";

function GreenScreen({ navigation }) {
  const userNameCtx = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Verify your phone.</Text>
      <Text style={styles.text}>{userNameCtx.phone}</Text>
    </View>
  );
}

export default GreenScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  text: {
    color: "darkgreen",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
