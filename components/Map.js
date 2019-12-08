import React from 'react';
import MapData from '../assets/map_data/track.json';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Parse } from '../core/parse';
import { point, featureCollection } from '@turf/helpers';

export class Map extends React.Component {
  state = {
    waypoints: {},
  };

  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
    this.getWaypoints().then(waypoints => {
      const features = waypoints.map(waypoint =>
        this.parseGeoPointToFeature(waypoint.attributes.geometry),
      );
      const fc = featureCollection(features);
      this.setState({ waypoints: fc });
    });
  }

  async getWaypoints() {
    const Waypoint = Parse.Object.extend('Waypoint');
    const [west, south, east, north] = [-117.3278, 32.197, -115.6065, 33.7532];
    const ne = new Parse.GeoPoint(north, east);
    const sw = new Parse.GeoPoint(south, west);

    // Create query
    const query = new Parse.Query(Waypoint);
    query.withinGeoBox('geometry', sw, ne);
    const results = await query.find();
    return results;
  }

  parseGeoPointToFeature(geopoint) {
    return point([geopoint.longitude, geopoint.latitude]);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          ref={ref => (this.map = ref)}
          logoEnabled={false}
          style={styles.map}
          styleURL="https://raw.githubusercontent.com/nst-guide/osm-liberty/gh-pages/style.json"
        >
          <MapboxGL.Camera
            zoomLevel={10}
            centerCoordinate={[-116.5085524, 32.6524889]}
          />

          <MapboxGL.ShapeSource
            id="pctSource"
            shape={MapData}
            onPress={() => console.log('Nemo touched the line!')}
          >
            <MapboxGL.LineLayer id="pctLine" style={layerStyles.pctLine} />
          </MapboxGL.ShapeSource>


          <MapboxGL.ShapeSource id="waypoints" shape={this.state.waypoints}>
            <MapboxGL.CircleLayer
              id="waypointCircle"
              style={layerStyles.waypointCircle}
            />
          </MapboxGL.ShapeSource>
        </MapboxGL.MapView>
      </View>
    );
  }
}

const layerStyles = {
  pctLine: {
    lineColor: 'rgb(204, 0, 0)',
  },
  waypointCircle: {
    circleColor: 'rgb(204, 50, 50)',
  },
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'transparent',
  },
  map: {
    flex: 1,
  },
});
