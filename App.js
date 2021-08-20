import * as React from "react";
import { View, Text, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
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

/*
(3) you may want to render an image in place of the title, or make the title into a button. 
In these cases you can completely override the component used for the title and provide your own.
*/ 
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
      {/*
      (2) We can move the configuration up to the native stack navigator 
      under the prop screenOptions.
      Now, any screen that belongs to the StackScreen will have our wonderful branded styles.
      */}
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          /*
          (3) this makes image to apply every screen
          */
          // headerTitle: props => <LogoTitle {...props} />
        }}
      >
        {/*
        (1)
        There are three key properties to use when customizing the style of your header
        : headerStyle, headerTintColor, and headerTitleStyle.

        headerStyle: 
        a style object that will be applied to the View that wraps the header. 
        If you set backgroundColor on it, that will be the color of your header.

        headerTintColor: 
        the back button and title both use this property as their color. 
        In the example below, we set the tint color to white (#fff) 
        so the back button and the header title would be white.

        headerTitleStyle: 
        if we want to customize the fontFamily, fontWeight and other Text style properties 
        for the title, we can use this to do it.

        The configuration we set only applies to the home screen; 
        when we navigate to the details screen, the default styles are back.
        We'll look at how to share options between screens now.
        */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // (3) this makes image apply only one screen
          options={{ headerTitle: props => <LogoTitle {...props} /> }}
        />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
