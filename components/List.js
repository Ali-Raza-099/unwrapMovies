import { View, Text, FlatList, StyleSheet } from "react-native";
import Card from "./Card";

export default function List({ navigation, title, content }) {
  return (
    <View>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View>
        <FlatList
          data={content}
          horizontal={true}
          renderItem={({ item }) => (
            <Card navigation={navigation} item={item} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    paddingBottom: 20,
    fontSize: 20,
    padding: 10,
    paddingTop: 15,
  },
});
