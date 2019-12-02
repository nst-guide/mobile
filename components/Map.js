import React from 'react';
import MapData from '../assets/map_data/track.json';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { StyleSheet, View, Dimensions } from 'react-native';

export class Map extends React.Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          ref={ref => (this.map = ref)}
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
        </MapboxGL.MapView>
      </View>
    );
  }
}

const layerStyles = {
  pctLine: {
    lineColor: 'rgb(204, 0, 0)',
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
