import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

function MyMap({ google, locations = [] }) {
  return (
    <Map
      google={google}
      containerStyle={{
        width: "100%",
      }}
      style={{
        width: "100%",
        height: "300px",
      }}
      center={locations[0]}
      initialCenter={locations[0]}
      zoom={locations.length === 1 ? 14 : 11}
      disableDefaultUI={true}
    >
      {locations.map((coords) => (
        <Marker position={coords} />
      ))}
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDQilC5bx0BgPCC6NDEVLhaWqoJmnQhgTc",
})(MyMap);
