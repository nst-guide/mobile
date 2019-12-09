import React from 'react';
import MapData from '../assets/map_data/track.json';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Parse } from '../core/parse';
import { point, featureCollection } from '@turf/helpers';

export class Map extends React.Component {
  state = {
    waypoints: null,
    nationalParkBoundariesVisible: false,
  };

  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
    this.getWaypoints().then(waypoints => {
      const features = waypoints.map(waypoint => {
        return this.parseGeoPointToFeature(waypoint);
      });
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
    query.fromLocalDatastore();
    const results = await query.find();
    return results;
  }

  parseGeoPointToFeature(geopoint) {
    const longitude = geopoint.attributes.geometry.longitude;
    const latitude = geopoint.attributes.geometry.latitude;
    const properties = {
      alt: geopoint.attributes.alt,
      name: geopoint.attributes.name,
      desc: geopoint.attributes.description,
      symbol: geopoint.attributes.symbol,
    };
    return point([longitude, latitude], properties);
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

          {this.state.waypoints !== null && (
            <MapboxGL.ShapeSource
              id="waypoints"
              shape={this.state.waypoints}
              onPress={event =>
                console.log(event.nativeEvent.payload.properties)
              }
            >
              <MapboxGL.CircleLayer
                id="waypointCircle"
                style={layerStyles.waypointCircle}
              />
            </MapboxGL.ShapeSource>
          )}

          {this.state.nationalParkBoundariesVisible && (
            <MapboxGL.VectorSource
              id="nationalParkBoundaries"
              url="https://tiles.nst.guide/nationalpark/tile.json"
              onPress={event =>
                console.log(event.nativeEvent.payload.properties)
              }
              ref={source => {
                this._vectorSource = source;
              }}
            >
              <MapboxGL.FillLayer
                id="nationalParkFill"
                sourceLayerID="nationalpark"
                style={layerStyles.nationalParkFill}
                visibility="visible"
              />
            </MapboxGL.VectorSource>
          )}
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
  nationalParkFill: {
    fillColor: 'rgb(0, 102, 0)',
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
