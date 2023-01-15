import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Card from "../components/Card";
import { searchMovieTv } from "../services/apiServices";

export default function Search({ navigation }) {
  const [text, onChangeText] = useState("");
  const [searchResults, setSearchResults] = useState("");

  const OnSubmit = (query) => {
    searchMovieTv(query, "movie").then((searchedData) =>
      setSearchResults(searchedData)
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder={"Search Movie or TV"}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            OnSubmit(text);
          }}
        >
          <Icon name={"search-outline"} size={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchItems}>
        {/* Searched items results */}
        {searchResults && searchResults.length > 0 && (
          <FlatList
            numColumns={3}
            data={searchResults}
            renderItem={({ item }) => (
              <Card navigation={navigation} item={item} />
            )}
            keyExtractor={(item) => item.id}
          />
        )}

        {/* When searched but no results */}
        {searchResults && searchResults.length == 0 && (
          <View style={styles.noResults}>
            <Text>No results matching your criteria.</Text>
            <Text>Try different keywords.</Text>
          </View>
        )}

        {/* When nothing is searched */}
        {!searchResults && (
          <View style={styles.empty}>
            <Text>Type something to start searching</Text>
          </View>
        )}

        {/* Error */}
        {/* {error && <Error />} */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  form: {
    flexBasis: "auto",
    flexGrow: 1,
    paddingRight: 10,
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 15,
    height: 50,
    padding: 8,
  },
  searchItems:{
    padding: 5
  }
});
