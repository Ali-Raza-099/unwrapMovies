import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import { auth } from "./Firebase";
import Icon from "react-native-vector-icons/Ionicons";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (!name) {
      alert('Please fill Name');
      return;
    }
    if (!email) {
      alert('Please fill Email');
      return;
    }
    if (!password) {
      alert('Please fill Password');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        navigation.navigate("Login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

  }

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>UnWrap Movies</Text>
      <Icon name={"tv-outline"} size={75} />
      <View style={styles.inputContainer}>
        <Icon name={"person-outline"} size={25} />
        <TextInput
          style={styles.input}
          placeholder=" Name"
          onChangeText={setName}
          value={name}
        />
      </View>
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
          type="password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
      </View>

      <TouchableOpacity onPress={handleSignUp} style={styles.button}>
        <Text>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text>Already have Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "deepskyblue" }}> Login</Text>
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

export default SignUp;