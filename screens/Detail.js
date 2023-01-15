import { useEffect, useState } from "react";
import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  ActivityIndicator,
  Modal,
  Pressable,
  Button,
} from "react-native";
import dateFormat from "dateformat";
import { Video, AVPlaybackStatus } from "expo-av";

import { getMovieDetail } from "../services/apiServices";
import Rating from "../components/Rating";
import PlayButton from "../components/PlayButton";
const placeHolderImage = require("../assets/placeholder.png");
const dimension = Dimensions.get("screen");

export default function Detail({ route, navigation }) {
  const video = React.useRef(null);
  const movieId = route.params.movieId;

  const [movieDetail, setMovieDetail] = useState();
  const [loaded, setLoaded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [status, setStatus] = React.useState({});

  const videoShown = () => {
    setModalVisible(!modalVisible);
  };
  useEffect(() => {
    getMovieDetail(movieId).then((movieData) => {
      setMovieDetail(movieData);
      setLoaded(true);
    });
  }, [movieId]);

  return (
    <View>
      {loaded ? (
        <ScrollView>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={
              movieDetail.poster_path
                ? {
                  uri:
                    "https://image.tmdb.org/t/p/w500" +
                    movieDetail.poster_path,
                }
                : placeHolderImage
            }
          />
          <View style={styles.container}>
            <View style={styles.playButton}>
              <PlayButton handlePress={videoShown} />
            </View>
            <Text style={styles.movieTitle}>{movieDetail.title}</Text>
            {movieDetail.genres && (
              <View style={styles.genresContainer}>
                {movieDetail.genres.map((genre) => {
                  return (
                    <Text style={styles.genreText} key={genre.id}>
                      {genre.name}
                    </Text>
                  );
                })}
              </View>
            )}
            <Rating rating={movieDetail.vote_average / 2} />
            <Text style={styles.overview}>{movieDetail.overview}</Text>
            <Text style={styles.release}>
              {"Release Date: " +
                dateFormat(movieDetail.release_date, "dS mmmm yyyy")}
            </Text>
          </View>
        </ScrollView>
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
      <Modal animationType="slide" visible={modalVisible}>
        <Pressable onPress={() => videoShown()}>
          <Text>Hide Model</Text>
        </Pressable>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          volume={1}
          audioPan={1}
        />
        <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: dimension.height / 2.5,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  genresContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  genreText: {
    marginRight: 10,
    fontWeight: "bold",
  },
  overview: {
    padding: 15,
  },
  release: {
    fontWeight: "bold",
  },
  playButton: {
    position: "absolute",
    top: -30,
    right: 20,
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
