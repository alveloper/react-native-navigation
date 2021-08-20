import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

/*
(1) createNativeStackNavigator is a function that returns an object containing 2 properties: Screen and Navigator.
The Navigator should contain Screen elements as its children to define the configuration for routes.
*/
const Stack = createNativeStackNavigator();

function App() {
  return (
    /*
    (2) NavigationContainer is a component which manages our navigation tree.
    This component must wrap all navigators structure.
    */
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
