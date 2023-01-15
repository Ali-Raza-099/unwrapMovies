import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Detail from "./screens/Detail";
import Navbar from "./components/Navbar";
import Search from "./screens/Search";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import LogOut from "./screens/LogOut";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp}
          options={{
            headerTransparent: true,
            headerShown: false
          }} />
        <Stack.Screen name="Login" component={Login}
          options={{
            headerTransparent: true,
            headerShown: false
          }} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
            header: ({ navigation }) => (
              <Navbar navigation={navigation} main={true} />
            ),
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerTransparent: true,
            header: ({ navigation }) => (
              <Navbar navigation={navigation} main={false} />
            ),
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerTransparent: true,
            header: ({ navigation }) => (
              <Navbar navigation={navigation} main={false} />
            ),
          }}
        />
        <Stack.Screen name="LogOut" component={LogOut}
          options={{
            headerTransparent: true,
            headerShown: false
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
