import { useContext, useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

import { UserContext } from "../context/userContext";

function BlueScreen({ navigation }) {
  const userNameCtx = useContext(UserContext);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  function onChangeFirstName(newFirstName) {
    setFirstName(newFirstName);
  }

  function onChangeLastName(newLastName) {
    setFirstName(newLastName);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter your name</Text>
      <TextInput
        value={firstName}
        placeholder={"First Name"}
        onChangeText={onChangeFirstName}
        style={styles.input}
      />
      <TextInput
        value={lastName}
        placeholder={"Last Name"}
        onChangeText={onChangeLastName}
        style={styles.input}
      />
      <Button title="Next" onPress={() => console.log("pressed the button")} />
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
  input: {
    height: 40,
    minWidth: 200,
    margin: 6,
    borderWidth: 1,
    borderColor: "darkblue",
    padding: 10,
  },
});
