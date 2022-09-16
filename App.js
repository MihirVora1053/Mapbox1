import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@rnmapbox/maps';
const token="pk.eyJ1IjoibWloaXJvbmx5Y29tcGFuaW9uIiwiYSI6ImNsODJuZzZzZzA4MXgzeG9lYXZxdGo0djMifQ.SbSZ0W9-qn4YCW-U8536dA"
MapboxGL.setWellKnownTileServer('Mapbox')
MapboxGL.setAccessToken(token);

const App = () => {
  // return (
  //   <View style={styles.page}>
  //     <View style={styles.container}>
  //       <MapboxGL.MapView style={styles.map} />
  //     </View>
  //   </View>
  // );
  const coordinates=["19.1379832","72.8397201"]
  return(
    <MapboxGL.MapView style={{flex:1}}>

      <MapboxGL.MarkerView coordinate={coordinates} />
    </MapboxGL.MapView>
  );
}

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1
  }
});