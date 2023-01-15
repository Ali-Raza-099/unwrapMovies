import { signOut } from 'firebase/auth';
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { auth } from "../screens/Firebase"
const statusBarHeight = StatusBar.currentHeight;



export default function LogOut({ navigation }) {
    return (
        <SafeAreaView>
            {/* <View style={{ paddingTop: statusBarHeight, marginTop: 50 }}>
                <Text>This text will not go into the status bar area.</Text>
            </View> */}
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => signOut(auth).then(() => {
                    console.log("sign out")
                    navigation.navigate("Login")
                }).catch((error) => {
                    console.log(error)
                })}>
                    <Text>Log Out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     alignItems: "center",
    //     justifyContent: "center",
    //     backgroundColor: "aliceblue"
    // },
    button: {
        marginTop: 500,
        marginLeft: 150,
        backgroundColor: "deepskyblue",
        borderRadius: 70,
        padding: 12,
        width: 100,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
})