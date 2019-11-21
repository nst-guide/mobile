import React from 'react';
import MapData from '../assets/map_data/track.json';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { MAPBOX_API_KEY } from 'react-native-dotenv';
import { StyleSheet, View, Dimensions } from 'react-native';

MapboxGL.setAccessToken(MAPBOX_API_KEY);

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
          styleURL="mapbox://styles/mapbox/streets-v11"
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
