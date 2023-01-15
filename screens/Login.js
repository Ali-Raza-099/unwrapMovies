import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { auth, provider } from "./Firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import Icon from "react-native-vector-icons/Ionicons";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email) {
      alert('Please fill Email');
      return;
    }
    if (!password) {
      alert('Please fill Password');
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Successfully logged in!");
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const googleLogin = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       // ...
  //       console.log("Successfully logged in!");
  //       navigation.navigate("Home");
  //     }).catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>UnWrap Movies</Text>
      <Icon name={"tv-outline"} size={75} />
      <View style={styles.inputContainer}>
        <Icon name={"mail"} size={25} />
        <TextInput
          style={styles.input}
          placeholder=" Email"
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name={"lock-closed-outline"} size={25} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text>Log In</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={googleLogin}>
        <Text style={{ color: "deepskyblue" }}> Login with google, do not try at home</Text>
      </TouchableOpacity> */}

      <View style={styles.infoContainer}>
        <Text>Not Registered?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ color: "deepskyblue" }}> Sign Up</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "aliceblue"
  },
  appName: {
    marginBottom: 50,
    fontSize: 30
  },
  input: {
    width: "70%",
    height: 50,
    borderBottomWidth: 2,
    borderColor: "gray",
    marginLeft: 20,
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "deepskyblue",
    borderRadius: 70,
    padding: 12,
    width: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  infoContainer: {
    margin: 30,
    flexDirection: "row"
  }
});

export default Login;
