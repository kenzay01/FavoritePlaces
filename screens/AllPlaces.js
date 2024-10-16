import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import PlacesList from "../components/Places/PlacesList";
export default function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocudes = useIsFocused();
  useEffect(() => {
    if (isFocudes && route.params?.place) {
      const isAlreadyAdded = loadedPlaces.some(
        (place) => place.id === route.params.place.id
      );

      if (!isAlreadyAdded) {
        setLoadedPlaces((prev) => [...prev, route.params.place]);
      }

      route.params.place = null;
    }
  }, [isFocudes, route, loadedPlaces]);

  return <PlacesList places={loadedPlaces} />;
}
