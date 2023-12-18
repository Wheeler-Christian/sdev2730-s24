import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";

import { UserContext } from "../context/userContext";

function BlueScreen({ navigation }) {
  const userNameCtx = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Verify your first and last names.</Text>
      <Text style={styles.text}>{userNameCtx.firstName} {userNameCtx.lastName}</Text>
    </View>
  );
}

export default BlueScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  text: {
    color: "darkblue",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
