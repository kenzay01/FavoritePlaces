import MapView, { Marker } from "react-native-maps";
import { Alert, StyleSheet } from "react-native";
import { useState, useLayoutEffect, useCallback } from "react";
import IconButton from "../UI/IconButton";

export default function Map({ navigation, route }) {
  const initialLocation = route.params?.initialLocation;

  const [selectedLocation, setSelectedLocation] = useState(
    initialLocation
      ? {
          latitude: initialLocation.latitude,
          longitude: initialLocation.longitude,
        }
      : null
  );

  const region = {
    latitude: initialLocation?.latitude || 50.450001,
    longitude: initialLocation?.longitude || 30.523333,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
  };

  const selectLocationHandler = (e) => {
    const latitude = e.nativeEvent.coordinate.latitude;
    const longitude = e.nativeEvent.coordinate.longitude;
    setSelectedLocation({ latitude, longitude });
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked",
        "Please pick a location before saving",
        [{ text: "Okay" }]
      );
      return;
    }

    navigation.navigate("AddPlace", {
      pickedLat: selectedLocation.latitude,
      pickedLng: selectedLocation.longitude,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    if (initialLocation) {
      return;
    }
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          color={tintColor}
          size={24}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, selectedLocation]);

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectedLocation ? null : selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.latitude,
            longitude: selectedLocation.longitude,
          }}
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
