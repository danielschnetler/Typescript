import { GoogleAPIKey } from "./google.api.key";
import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

export function initMap(coordinates: { lat: number; lng: number }) {
  const map = new google.maps.Map(document.getElementById("map")!, {
    center: coordinates,
    zoom: 16,
  });
  new google.maps.Marker({ position: coordinates, map: map });
}

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  type GoogleGeocodeingResponse = {
    results: {
      geometry: { location: { lat: number; lng: number } };
    }[];
    status: "OK" | "ZERO_RESULTS";
  };

  axios
    .get<GoogleGeocodeingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GoogleAPIKey}`
    )
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinates = response.data.results[0].geometry.location;
      initMap(coordinates);
      console.log(coordinates);
      console.log(response);
    })
    .catch((error) => {
      alert(error.message);
      console.log(error);
    });
}

form.addEventListener("submit", searchAddressHandler);
