import MapView from 'react-native-maps';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {PermissionsAndroid, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {useFocusEffect} from '@react-navigation/native';

const Maps = ({children, currentLocation, ...props}) => {
  const DEFAULT_CAMERA_ZOOM = 15;

  const DEFAULT_CAMERA = {
    center: {
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
    },
    heading: 0,
    pitch: 0,
    zoom: DEFAULT_CAMERA_ZOOM,
  };

  return (
    <MapView
      {...props}
      style={styles.map}
      showsBuildings={false}
      initialCamera={DEFAULT_CAMERA}
      showsMyLocationButton={false}
      showsPointsOfInterest={false}
      showsCompass={false}
      showsScale={false}
      showsIndoors={false}
      //   initialRegion={currentLocation}

      mapType="satellite"
      zoomEnabled={true}
      pitchEnabled={true}
      showsUserLocation={true}
      followsUserLocation={true}
      //showsTraffic={true}

      loadingEnabled
      // loadingIndicatorColor="#666666"
      // loadingBackgroundColor="#eeeeee"
      onRegionChange={region => {
        // console.log('SET TARGET :', region);
      }}
      onPress={e => {
        console.log(e.nativeEvent.coordinate);
        console.log(e.nativeEvent.coordinate);
      }}>
      {children}
    </MapView>
  );
};

export default Maps;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%',
  },
  marker: {
    height: 48,
    width: 48,
  },
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  region: {
    color: '#fff',
    lineHeight: 20,
    margin: 20,
  },
});
