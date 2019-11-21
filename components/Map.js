import MapView from "react-native-maps";
import React from "react";
import Geojson from "./Geojson";
MapView.Geojson = Geojson;
import MapData from "../assets/map_data/track.json";

export class Map extends React.Component {
  render() {
    return (
      <MapView style={this.props.style}>
        <Geojson geojson={MapData} />
      </MapView>
    );
  }
}
