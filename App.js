import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import BlueScreen from "./screens/BlueScreen";
import GreenScreen from "./screens/GreenScreen";
import RedScreen from "./screens/RedScreen";
import UserContextProvider, { UserContext } from "./context/userContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <UserContextProvider>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#222" },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen name="Registration" component={HomeScreen} />
            <Stack.Screen name="Name" component={BlueScreen} />
            <Stack.Screen name="Phone" component={GreenScreen} />
            <Stack.Screen name="Email" component={RedScreen} />
          </Stack.Navigator>
        </UserContextProvider>
      </NavigationContainer>
    </>
  );
}
