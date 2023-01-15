import {
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function Navbar({ navigation, main }) {
  return (
    <SafeAreaView>
      {main ? (
        <View style={styles.MainNav}>
          <Image
            style={styles.logo}
            source={require("../assets/app-logo.png")}
          />
          <View style={{flexDirection: "row"}}>
            <TouchableOpacity
            style={{marginRight: 10}}
              onPress={() => {
                navigation.navigate("Search");
              }}
            >
              <Icon name={"search-outline"} size={30} color={"#fff"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("LogOut");
              }}
            >
              <Icon name={"person-outline"} size={30} color={"#fff"} />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.DetailNav}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name={"chevron-back"} size={30} color={"#ccc"} />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MainNav: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    padding: 20
  },
  DetailNav: {
    marginTop: 40,
    marginLeft: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
});

// Navbar.defaultProps = defaultProps;
export default Navbar;
