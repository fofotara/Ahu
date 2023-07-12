import {
  PermissionsAndroid,
  View,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import React, {forwardRef, useEffect, useState} from 'react';
import MapView, {enableLatestRenderer, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {Button, Icon} from '@rneui/themed';

import {useDispatch, useSelector} from 'react-redux';
import { SetTopTarget} from '../redux/action';
import TopMarker from '../component/TopMarker';
enableLatestRenderer();
let id = 0;
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    // console.log('granted', granted);
    if (granted === 'granted') {
      //   console.log('You can use Geolocation');
      return true;
    } else {
      //    console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};






const SelectTarget = forwardRef(({navigation, route}, ref) => {
  const store = useSelector(state => state.OperationStore);
  console.log(store);
  const [currentLocation, setCurrentLocation] = useState(false);
  const [marker, setMarker] = useState({
    latitude: 32.9400337,
    longitude: -117.2416767,
  });
  const [topLocation, setTopLocation] = useState(null);
  const dispatch = useDispatch();

  const DEFAULT_CAMERA_ZOOM = 15;

  const DEFAULT_CAMERA = {
    center: {
      latitude: marker.latitude,
      longitude: marker.longitude,
    },
    heading: 0,
    pitch: 0,
    zoom: DEFAULT_CAMERA_ZOOM,
  };

  useEffect(() => {
    getLocation();
    return () => {
      getLocation();
    };
  }, []);

  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      //  console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            //  console.log(position);
            setCurrentLocation(position);
            setMarker({
              longitude: position.coords.longitude,
              latitude: position.coords.latitude,
            });
          },
          error => {
            // See error code charts below.
            //    console.log(error.code, error.message);
            setCurrentLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    //  console.log('currentLocation', currentLocation);
  };

  const saveTopLocationHandler = () => {
    dispatch(SetTopTarget(topLocation));
    console.log('saveTopLocationHandler', topLocation);
    navigation.navigate('FinalMaps');
  };

  return (
    <View style={StyleSheet.absoluteFillObject}>
      {currentLocation && (
        <>
          <MapView
            ref={ref}
            style={styles.map}
            //   initialRegion={currentLocation}
            initialCamera={DEFAULT_CAMERA}
            mapType="satellite"
            zoomEnabled={true}
            pitchEnabled={true}
            showsUserLocation={true}
            // followsUserLocation={true}
            // showsCompass={true}
            // showsBuildings={true}
            // showsTraffic={true}
            showsIndoors={true}
            loadingEnabled
            // loadingIndicatorColor="#666666"
            // loadingBackgroundColor="#eeeeee"
            onRegionChange={region => {
              setTopLocation(region);
              console.log(region);
            }}
            onPress={e => {
              //
            }}>
            <TopMarker store ={store} />
            {/*<TimMarkers tims={store.TopTim} />*/}
          </MapView>
        </>
      )}
      <View style={styles.markerFixed}>
        <Icon reverse name="target" type="simple-line-icon" />
      </View>
      <View style={{position: 'absolute', bottom: 20, alignSelf: 'center'}}>
        <Button
          onPress={() => {
            saveTopLocationHandler();
            console.log(store);
          }}
          buttonStyle={
            {
              //    backgroundColor:'white',
            }
          }
          title={'Hedef Konum Kaydet'}
        />
      </View>
    </View>
  );
});

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

export default SelectTarget;
