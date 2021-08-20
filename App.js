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

function DetailScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  )
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
        {/*
        (3) Now our stack has two routes, a Home route and a Details route. 
        A route can be specified by using the Screen component. 
        The Screen component accepts a name prop which corresponds to the name of the route we will use to navigate,
         and a component prop which corresponds to the component it'll render.
        */}
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
