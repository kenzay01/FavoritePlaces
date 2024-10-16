const GOOGLE_MAPS_API_KEY = "AIzaSyAyGAq2ZdMXrXKMB5afE0EcoT85-IczhJM";
const HERE_API_KEY = "zClRhBP4zZLqcWAgEvG11a7AgxmT2U18hyg-0Ym31D4";
export function getMapPreview(lat, lng) {
  const imagePreviewURL = `https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=${GOOGLE_MAPS_API_KEY}`;
  console.log(imagePreviewURL);
  return imagePreviewURL;
}
export async function getAddress(lat, lng) {
  const url = `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${lat},${lng}&limit=20&apiKey=${HERE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch address");
  }

  const data = await response.json();
  const address = data.items[0].address.label;
  return address;
}
