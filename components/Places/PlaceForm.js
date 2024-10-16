import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import { useState, useCallback } from "react";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../../UI/Button";
import { Place } from "../../models/place";

export default function PlaceForm({ onCreatePlace }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [pickedLocation, setPickedLocation] = useState();

  const imageTakenHandler = (imagePath) => {
    setSelectedImage(imagePath);
  };
  const locationPickedHandler = useCallback((location) => {
    setPickedLocation(location);
  }, []);
  const savePlaceHandler = () => {
    const placeData = new Place(enteredTitle, selectedImage, pickedLocation);
    onCreatePlace(placeData);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          s
          onChangeText={(e) => setEnteredTitle(e)}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onImageTaken={imageTakenHandler} />
      <LocationPicker onLocationPick={locationPickedHandler} />
      <View style={styles.buttonContainer}>
        <Button onPress={savePlaceHandler}>Add Place</Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: { flex: 1, padding: 24 },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
  buttonContainer: {
    marginVertical: 16,
  },
});
