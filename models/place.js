export class Place {
  constructor(title, imgUri, location) {
    this.title = title;
    this.imgUri = imgUri;
    this.address = location.address;
    this.location = {
      latitude: location.latitude,
      longitude: location.longitude,
    };
    this.id = new Date().toString() + Math.random().toString();
  }
}
