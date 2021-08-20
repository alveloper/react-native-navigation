import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      {/*
      (5) navigation - the navigation prop is passed in to every screen component in the native stack navigator.
      navigate('Details') - we call the navigate function with the name of the route that we'd like to move the user to.
      */}
      <Button
        title="Go to Details" 
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      {/*
      (6) we can change navigate to push. 
      This allows us to express the intent to add another route regardless of the existing navigation history.
      Each time you call push we add a new route to the navigation stack.
      When you call navigate it first tries to find an existing route with that name, 
      and only pushes a new route if there isn't yet one on the stack.
      */}
      <Button 
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
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
        {/*
        (4)  Each screen in the navigator can specify some options for the navigator,
        such as the title to render in the header.
        These options can be passed in the options prop for each screen component.
         */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
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
