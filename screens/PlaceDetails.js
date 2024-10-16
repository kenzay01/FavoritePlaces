import { ScrollView, Image, View, Text, StyleSheet } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../constants/colors";
import { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
export default function PlaceDetails({ navigation, route }) {
  const showOnMapHandler = () => {
    navigation.navigate("Map", {
      initialLocation: route.params.place.location,
    });
  };
  const selectedPlace = route.params.place;

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedPlace.imgUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{selectedPlace.address}</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
