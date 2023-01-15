import { Image, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";

const placeHolderImage = require("../assets/placeholder.png");

export default function Card({ item, navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Detail", { movieId: item.id })}
    >
      <Image
        resizeMode="cover"
        style={styles.image}
        source={
          item.poster_path
            ? { uri: "https://image.tmdb.org/t/p/w500" + item.poster_path }
            : placeHolderImage
        }
      />
      {!item.poster_path && <Text style={styles.movieName}>{item.title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: "relative",
    height: 200,
    marginBottom: 8
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  movieName: {
    position: "absolute",
    width: 100,
    alignSelf: "center",
    top: 10,
  },
});
