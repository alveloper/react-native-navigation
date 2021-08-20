import * as React from "react";
import { View, Text, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  /*
  To be able to interact with the screen component, 
  we need to use navigation.setOptions to define our button 
  instead of the options prop. 
  By using navigation.setOptions inside the screen component, 
  we get access to screen's props, state, context etc.
  */
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);
  return (
    <Text>Count: {count}</Text>
  );
}

function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button 
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function LogoTitle() {
  return (
    <Image 
      style={{ width: 50, height: 50 }}
      source={require('./assets/favicon.png')}
    />
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: ({ navigation }) => (
              <Button 
                onPress={() => alert('This is a button!')}
                title="Info"
                color="black"
              />
            )
          }}
        />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
